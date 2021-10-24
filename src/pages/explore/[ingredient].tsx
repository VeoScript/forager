import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import PostCard from '~/components/PostsCard/View/PostCard'

interface TypeProps {
  host: any
  ingredients: any
}

const ExploreIngredients: NextPage<TypeProps> = ({ host, ingredients }) => {

  console.log(ingredients)

  return (
    <React.Fragment>
      <Head>
        <title>Explore | Forager</title>
      </Head>
      <Layout
        host={host}
        ingredients={ingredients}
      >
        <div className="flex flex-row items-center w-full h-full space-x-5">
          <div className="flex flex-col items-center w-full space-y-3">
            {ingredients.map((ingredient: any, i: number) => (
              <div className="flex justify-center w-full max-w-xl" key={i}>
                <PostCard
                  host={host}
                  dishes={ingredient.dish}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(async function (context: any) {
  const user = context.req.session.get('user')
  const { ingredient } = context.query

  // prisma is strict about uppercase and lowercase, so that we need to Capitalize the Ingredients string values,
  // to detect the capitalized ingredients string value in prisma property CONTAIN...
  const str = ingredient
  const arr = str.split(" ")
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  const capitalize_ingredients = arr.join(" ")

  if (!user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const host = await prisma.users.findFirst({
    where: {
      username: user.username
    }
  })

  const ingredients = await prisma.ingredients.findMany({
    where: {
      ingredient: {
        contains: capitalize_ingredients // prisma contain property is something similar to LIKE Operator in SQL wildcards...
      }
    },
    select: {
      countId: true,
      id: true,
      ingredient: true,
      dish: {
        select: {
          id: true,
          title: true,
          category: true,
          description: true,
          date: true,
          ingredients: true,
          bookmarks: true,
          likes: {
            select: {
              id: true,
              dishId: true,
              userId: true
            }
          },
          comments: {
            orderBy: [
              {
                countId: 'desc'
              }
            ],
            select: {
              id: true,
              comment: true,
              date: true,
              user: {
                select: {
                  id: true,
                  name: true
                }
              }
            }
          },
          user: {
            select: {
              id: true,
              avatar: true,
              name: true,
              username: true
            }
          }
        }
      }
    }
  })

  return {
    props: {
      host,
      ingredients
    }
  }
})

export default ExploreIngredients