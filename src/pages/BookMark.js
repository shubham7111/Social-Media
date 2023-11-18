import React, { useContext, useEffect } from 'react'
import { ExploreKey } from '../context/ExploreContext'
import { AuthKey } from '../context/AuthContext'
import { Card } from '../component/Card/Card'

const BookMark = () => {
  const {state : {bookmark, posts},getPost} = useContext(ExploreKey)
  const {state : {userInfo}} = useContext(AuthKey)
  console.log(bookmark)
  useEffect(()=> {
    getPost()
  }, [posts, userInfo, bookmark])
  return (
    <div>
      <h1>This is Book mark page</h1>
      {
        bookmark?.map((post) => <Card post = {post} />)
      }
    </div>
  )
}

export default BookMark