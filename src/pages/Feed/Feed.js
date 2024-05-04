import React, { useContext, useEffect } from "react";
import { AuthKey } from "../../context/AuthContext";
import { ExploreKey } from "../../context/ExploreContext";
import { Card } from "../../component/card/Card";

const Feed = () => {
  const {
    state: { userInfo },
  } = useContext(AuthKey);
  const {
    state: { posts },
    getPost,
  } = useContext(ExploreKey);

  //console.log(posts)
  const feedPosts = posts?.filter(
    (post) =>
      post?.username === userInfo?.username ||
      userInfo?.following?.some((follow) => follow.username === post.username)
  );
  useEffect(() => {
    getPost();
  }, [userInfo, posts]);
  //console.log(feedPosts)
  return (
    <div className="cards-parent">
      <h1>This is Feed Page</h1>

      {feedPosts?.length >0 && feedPosts?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
     
    </div>

  );
};

export default Feed;
