import React from 'react'
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri'

interface BookmarksType {
  host: any
  dish: any
}

const BookmarkButton: React.FC<BookmarksType> = ({ host, dish }) => {

  const bookMarks = dish.bookmarks
  const dishId = dish.id

  // useState check if the post is already in the user bookmarks
  const [bookmark, setBookmark] = React.useState(false)

  // i am using useEffect hook for update the bookmarks state if there is a new post...
  React.useEffect(() => {
    // if this (bookMarks.some) is true, setBookmark state will turn to true...
    setBookmark(bookMarks.some((bookmarked: { userId: any }) => bookmarked.userId === host.id))
  }, [host.id, bookMarks])

  // function for adding the post to user bookmarks
  async function addBookmark(dishId: any) {
    const userId = host.id

    await fetch('/api/bookmarks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, dishId })
    })
  }

  // function for remove the post to user bookmarks
  async function deleteBookmark(dishId: any) {
    const userId = host.id

    await fetch('/api/bookmarks/delete_post_bookmarks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, dishId })
    })
  }

  return (
    <button className="outline-none" onClick={async () => {
      bookmark ? await deleteBookmark(dishId) : await addBookmark(dishId)
      setBookmark(!bookmark)
    }}>
      {bookmark ? (
          <RiBookmarkFill className="text-[#00B3F3]" />
        ) : (
          <RiBookmarkLine />
        )
      }
    </button>
  )
}

export default BookmarkButton