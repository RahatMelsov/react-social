let rerender = () => {
  console.log('hi')
}
let state = {
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
        newMessageData: ''
    },
    postPage: {
        postData: [
            { likeCount: 11, message: 'Hello, how are you?' }, 
            { likeCount: 12, message: 'Good day today' }
          ],
        newPostMessage: ''
    }
}

export let subscriber = (observer) => {
  rerender = observer;
}

//Dialogs Functions
window.state = state;
export const updateDialogsMessage = (text)=> {
  state.MessagePage.newMessageData = text;
  rerender();
}

export const addMessage = ()=> {
  let createNewMessage = {
    message: state.MessagePage.newMessageData
  }

  state.MessagePage.dialogsData.push(createNewMessage);
  updateDialogsMessage('')
  rerender();
}

//Post Functions
export const newPost = () => {
  let createNewPost = {
    likesCount: 0,
    message: state.postPage.newPostMessage
  }

  state.postPage.postData.push(createNewPost);
  updatePostMessage('')
  rerender();
}

export const updatePostMessage = (newMessage) => {
  state.postPage.newPostMessage = newMessage;
  rerender();
}
// Post Functions end

export default state;