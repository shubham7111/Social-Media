import React, { useContext, useEffect, useState } from "react";
import { ExploreKey } from "../../context/ExploreContext";
import "../../component/card/Card.css";
import { Card } from "../../component/card/Card";
import { CircleLoader } from "react-spinners";
const Explore = () => {
 
  const {
    getPost,
    state: { posts },
    state,
  } = useContext(ExploreKey);


  const [loading, setLoading] = useState(false);
  let feedPosts = posts;

  let userDetail;
  useEffect(() => {
    setLoading(true);
    getPost();
    setLoading(false);
  }, [posts]);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="posts-parent-container">
      {loading && (
        <div style={style}>
          {" "}
          <CircleLoader color="#123abc" />{" "}
        </div>
      )}
      {!loading && feedPosts?.map((post, id) => <Card post={post} key={id} />)}
    </div>
  );
};

export default Explore;
