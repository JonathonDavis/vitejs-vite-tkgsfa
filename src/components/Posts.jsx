import React from "react";
import Post from "./Post";


//look up regular prop import process
const Posts = ({ data }) => {
  return (
    <>
      <section className="posts">
        {data.map((post) => {
          return (
            <>
              <Post post={post} data={data}/>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Posts;
