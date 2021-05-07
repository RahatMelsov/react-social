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
      this.updateDialogsMessage('')
      this._rerender();
    } else if(action.type === 'ADD-POST-MESSAGE') {
      let createNewPost = {
        likeCount: 0,
        message: this._state.postPage.newPostMessage
      }
      console.log(createNewPost)
      this._state.postPage.postData.push(createNewPost);
      this.updatePostMessage('')
      this._rerender();
    } else if(action.type === 'UPDATE-POST-MESSAGE') {
      this._state.postPage.newPostMessage = action.newText;
      this._rerender();
    }
  },
}
window.store = Store;
export default Store;