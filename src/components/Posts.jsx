import React, { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(posts);
  return (
    <div>
      <h2>{posts.length}</h2>
    </div>
  );
};

export default Posts;
