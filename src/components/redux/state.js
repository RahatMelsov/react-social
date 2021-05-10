const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE';
const UPDATE_DIALOGS_MESSAGE = 'UPDATE-DIALOGS-MESSAGE'

const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE';
const UPDATE_POST_MESSAGE = 'UPDATE-POST-MESSAGE'

let Store = {
  _rerender() {
    console.log('hi')
  },
  _state: {
    MessagePage: {
      usersData: [
        { id: '1', name: 'Vlad' },
        { id: '2', name: 'Rahat' },
        { id: '3', name: 'Saken' },
        { id: '4', name: 'Elaman' },
        { id: '5', name: 'Amanzhan' },
        { id: '6', name: 'Madi' },
      ],
      dialogsData: [
        { message: 'hi' },
        { message: 'hi' },
        { message: 'What is your name?' },
        { message: 'React' },
        { message: 'cool' },
      ],
      newMessageData: 'rerr'
    },
    postPage: {
      postData: [
        { likeCount: 11, message: 'Hello, how are you?' },
        { likeCount: 12, message: 'Good day today' }
      ],
      newPostMessage: 'rwrewrw'
    }
  },
  subscriber(observer){
    this._rerender = observer
  },
  get getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type=== 'UPDATE-DIALOGS-MESSAGE') {
      this._state.MessagePage.newMessageData = action.newText;
      this._rerender();
    } else if(action.type === 'ADD-DIALOGS-MESSAGE') {
      let createNewMessage = {
        message: this._state.MessagePage.newMessageData
      }
      this._state.MessagePage.dialogsData.push(createNewMessage);
      this._state.MessagePage.newMessageData = ''
      this._rerender();
    } else if(action.type === 'ADD-POST-MESSAGE') {
      let createNewPost = {
        likeCount: 0,
        message: this._state.postPage.newPostMessage
      }
      console.log(createNewPost)
      this._state.postPage.postData.push(createNewPost);
      this._state.postPage.newPostMessage = ''
      this._rerender();
    } else if(action.type === 'UPDATE-POST-MESSAGE') {
      this._state.postPage.newPostMessage = action.newText;
      this._rerender();
    }
  },
}

export const addDialogsMessageActionCreate = () => ({type: ADD_DIALOGS_MESSAGE});
export const updateDialogsMessageActionCreate = (text) => 
		({type: UPDATE_DIALOGS_MESSAGE, newText: text})

export const addPostMessageActionCreate = () => ({type: ADD_POST_MESSAGE});
export const updatePostMessageActionCreate = (text) => 
({type: UPDATE_POST_MESSAGE, newText: text})

window.store = Store;
export default Store;