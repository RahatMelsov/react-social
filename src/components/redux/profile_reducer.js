const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE'

let initialState = {
    postData: [
      { likeCount: 11, message: 'Hello, how are you?' },
      { likeCount: 12, message: 'Good day today' }
    ],
    newPostMessage: 'rwrewrw'
  }

let profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newPostMessage = action.newText;
            return stateCopy;
        }
        case ADD_POST_MESSAGE: {
            let stateCopy = {...state}
            let createNewPost = {
                message: state.newPostMessage
            }
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(createNewPost);
            stateCopy.newPostMessage = ''
            return stateCopy;
        }
        default:
            return state;
    }
    
}

export const addPostMessageActionCreate = () => ({type: ADD_POST_MESSAGE});
export const updatePostMessageActionCreate = (text) => 
({type: UPDATE_POST_MESSAGE, newText: text})

export default profileReduser;