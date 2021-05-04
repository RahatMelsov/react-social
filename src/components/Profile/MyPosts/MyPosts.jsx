import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let createNewPost = () => {
    props.addPost(newPostElement.current.value);
    newPostElement.current.value = '';
  }
  let postsElements = props.postData.map( p => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div className={classes.posts}>
      My posts
      <div className={classes.post}>
        <div>
          <textarea name="post" cols="30" rows="3" ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={createNewPost}>post</button>
        </div>
      </div>

      { postsElements }

    </div>

  )
}

export default MyPosts;