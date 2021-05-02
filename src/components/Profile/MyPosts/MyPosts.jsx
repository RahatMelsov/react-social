import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
		{ likeCount: 11, message: 'Hello, how are you?' }, 
		{ likeCount: 12, message: 'Good day today' }
	]

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

      <Post message={postData[0].message} likeCount={postData[0].likeCount} />
      <Post message={postData[1].message} likeCount={postData[1].likeCount} />

    </div>

  )
}

export default MyPosts;