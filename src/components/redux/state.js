import {rerender} from './../../render'
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
    },
    postPage: {
        postData: [
            { likeCount: 11, message: 'Hello, how are you?' }, 
            { likeCount: 12, message: 'Good day today' }
          ]
    }
}

export let newPost = (messagePost) => {
  let createNewPost = {
    likesCount: 0,
    message: messagePost
  }
  state.postPage.postData.push(createNewPost);
  rerender(state);
}

export default state;