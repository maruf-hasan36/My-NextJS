"use client";

import Posts from "../../components/Posts";
import React, { Suspense } from "react";

const postsPage = () => {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <Suspense fallback={<h1>Loading.......</h1>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    </div>
  );
};

export default postsPage;
