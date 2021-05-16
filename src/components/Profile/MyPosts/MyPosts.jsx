import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let createNewPost = () => {
    props.addPost();
  }
  let postsElements = props.postData.map( p => <Post message={p.message} likeCount={p.likeCount} />);
  let onPostChange = ()=> {
    let text = newPostElement.current.value;
    props.updatePost(text)
  }

  return (
    <div className={classes.posts}>
      My posts
      <div className={classes.post}>
        <div>
          <textarea name="post" cols="30" rows="3" onChange={onPostChange} ref={newPostElement} value={props.newPostMessage} />
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