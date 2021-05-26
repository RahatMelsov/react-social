import React from 'react';
import {updatePostMessageActionCreate, addPostMessageActionCreate} from './../../redux/profile_reducer'
import MyPosts from './MyPosts'
import StoreContext from './../../../storeContext'

const MyPostsContainer = () => {

  return (
  <StoreContext.Consumer>
    { Store => {

        const State = Store.getState();

        let addPost = () => {
          Store.dispatch(addPostMessageActionCreate());
        }
        let updatePost = (text)=> {
          Store.dispatch(updatePostMessageActionCreate(text))
        }

        console.log(State)

        return ( 
        <MyPosts updatePost={updatePost} addPost={addPost} 
          postData={State.postPage.postData} 
          newPostMessage={State.postPage.newPostMessage}/>
        )
      }
    }
  </StoreContext.Consumer>
  )
}

export default MyPostsContainer;