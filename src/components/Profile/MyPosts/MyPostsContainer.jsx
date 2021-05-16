import React from 'react';
import {updatePostMessageActionCreate, addPostMessageActionCreate} from './../../redux/profile_reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostMessageActionCreate());
  }
  let updatePost = (text)=> {
    props.dispatch(updatePostMessageActionCreate(text))
  }

  return (
    <MyPosts updatePost={updatePost} addPost={addPost} 
    postData={props.profileState.postPage.postData} 
    newPostMessage={props.profileState.postPage.newPostMessage}/>
  )
}

export default MyPostsContainer;