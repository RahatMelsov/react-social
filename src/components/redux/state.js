import dialogsReduser from './dialogs_reducer';
import profileReduser from './profile_reducer';
import sidebarReduser from './sidebar_reducer';

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
    },
    sidebar: {

    }
  },
  subscriber(observer){
    this._rerender = observer
  },
  get getState() {
    return this._state;
  },
  dispatch(action) {
      this._state.MessagePage = dialogsReduser(this._state.MessagePage, action);
      this._state.postPage = profileReduser(this._state.postPage, action);
      this._state.sidebar = sidebarReduser(this._state.sidebar, action);
      this._rerender();
  },
}

window.store = Store;
export default Store;