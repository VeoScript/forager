import React from 'react'
import { RiHeartLine, RiHeart2Fill } from 'react-icons/ri'

interface ReactionsType {
  host: any
  dish: any
}

const ReactionButton: React.FC<ReactionsType> = ({ host, dish }) => {

  const likes = dish.likes
  const dishId = dish.id

  // useState check if the post is liked
  const [like, setLike] = React.useState(false)

  // i am using useEffect hook for update the likes state if there is a new post...
  React.useEffect(() => {
    // if this (likes.some) is true, setLike state will turn to true...
    setLike(likes.some((liked: { userId: any }) => liked.userId === host.id))
  }, [host.id, likes])

  // function for liking the post
  async function onLike(dishId: any) {
    const userId = host.id

    await fetch('/api/likes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, dishId })
    })
    onSendActivity()
  }

  // function for unliking the post
  async function onUnlike(dishId: any) {
    const userId = host.id

    await fetch('/api/likes/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, dishId })
    })
  }

  // function for reporting the like action to the activity
  async function onSendActivity() {
    const userId = dish.user.id
    const sender = dish.user.username
    const recipient = host.username
    const message = "liked your post"
    const notificationtype = "Like"

    await fetch('/api/activities/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notificationtype,
        message,
        recipient,
        sender,
        userId,
        dishId 
      })
    })
  }

  return (
    <button className="outline-none" onClick={async () => {
      like ? await onUnlike(dishId) : await onLike(dishId)
      setLike(!like)
    }}>
      {like ? (
          <RiHeart2Fill className="text-red-500" />
        ) : (
          <RiHeartLine />
        )
      }
    </button>
  )
}

export default ReactionButton