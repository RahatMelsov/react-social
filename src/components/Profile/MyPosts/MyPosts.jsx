import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div className={classes.post}>
        <div>
          <textarea name="post" cols="30" rows="3"></textarea>
        </div>
        <div>
          <button>post</button>
        </div>
      </div>

      <Post message="Hello, how are you?" like="423" />
      <Post message="Good day today" like="324" />

    </div>

  )
}

export default MyPosts;