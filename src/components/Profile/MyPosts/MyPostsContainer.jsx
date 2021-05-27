import React from 'react';
import {updatePostMessageActionCreate, addPostMessageActionCreate} from './../../redux/profile_reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (State) => {
  return {
    postData: State.postPage.postData, 
    newPostMessage: State.postPage.newPostMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (text) => {
      dispatch(updatePostMessageActionCreate(text))
    },
    addPost: () => {
      dispatch(addPostMessageActionCreate())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;