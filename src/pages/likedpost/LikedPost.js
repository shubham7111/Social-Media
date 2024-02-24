import React, { useContext } from "react";

import { AuthKey } from "../../context/AuthContext";
import { ExploreKey } from "../../context/ExploreContext";
import { Card } from "../../component/card/Card";

function LikedPost() {
  const {
    state: { posts },
  } = useContext(ExploreKey);
  const {
    state: { userInfo },
  } = useContext(AuthKey);

  const likedPostByUser = posts?.filter((post) =>
    post?.likes?.likedBy.find((user) => user?.username === userInfo?.username)
  );

  return (
    <div>
      {likedPostByUser?.map((post) => (
        <Card post={post} />
      ))}
    </div>
  );
}

export default LikedPost;
