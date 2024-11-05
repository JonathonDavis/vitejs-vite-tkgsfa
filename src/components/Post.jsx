import React, { useState } from "react";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0)

  const handleLikes = (e) => {
    setLikes(likes + 1)
  }

  return( 
  <div className="post">
    <div className="top">
      <img src={post.profile_picture}/>
      <h2>{post["username"]}</h2>
    </div>
    <div className="image">
      <img src={post.image_url} />
    </div>
    <div className="bottom">
      <div className="likes">
        <button onClick={handleLikes}>🖤</button>
        <h3>Likes: {likes}</h3>
      </div>
      <div className="caption">
        <p>{post.caption}</p>
      </div>
    </div>
  </div>
  );
};

export default Post;
