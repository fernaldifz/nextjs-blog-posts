import React, { useState, useEffect } from "react"
import PostList from "../components/PostList"
import Buttons from "../components/Buttons"

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [nextPageIsAvailable, setNextPageIsAvailable] = useState(true)
  const [prevPageIsAvailable, setPrevPageIsAvailable] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  async function fetchPosts() {
    const postsRes = await fetch("https://gorest.co.in/public/v2/posts?page=" + page)
    const posts = await postsRes.json()
    setPosts(posts)

    const postsNextPageRes = await fetch("https://gorest.co.in/public/v2/posts?page=" + (page + 1))
    const postsNextPage = await postsNextPageRes.json()
    if (postsNextPage === 0) {
      setNextPageIsAvailable(false)
    }
    else {
      setNextPageIsAvailable(true)
    }
    setIsLoaded(true);
  }

  useEffect(() => {
    page > 1 ? setPrevPageIsAvailable(true) : setPrevPageIsAvailable(false)
    fetchPosts()
  }, [page])

  const goToPrevPage = () => {
    setPage(page - 1)
  }

  const goToNextPage = () => {
    setPage(page + 1)
  }

  if (!isLoaded) {
    return (
      <div className="text-lg">is Loading...</div>
    )
  } else {
    return (
      <div>
        <h1 className="text-4xl text-center font-semibold">Post List</h1>
        <PostList posts={posts} />
        <Buttons
          page={page}
          prevPageIsAvailable={prevPageIsAvailable}
          nextPageIsAvailable={nextPageIsAvailable}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage} />
        <p className="text-center">{page}</p>
      </div>
    )
  }
}
