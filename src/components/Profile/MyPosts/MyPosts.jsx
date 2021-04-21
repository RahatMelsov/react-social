import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div className={classes.post}>
        New Post
          </div>

      <Post message="Hello, how are you?" like="423" />
      <Post message="Good day today" like="324" />

    </div>

  )
}

export default MyPosts;