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
            return { ...state, newPostMessage: action.newText }
        }
        case ADD_POST_MESSAGE: {
            return {
                ...state,
                postData: [...state.postData, {
                    message: state.newPostMessage
                }],
                newPostMessage : ''
            }
        }
        default:
            return state;
    }

}

export const addPostMessageActionCreate = () => ({ type: ADD_POST_MESSAGE });
export const updatePostMessageActionCreate = (text) =>
    ({ type: UPDATE_POST_MESSAGE, newText: text })

export default profileReduser;