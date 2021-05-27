const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE';
const UPDATE_DIALOGS_MESSAGE = 'UPDATE-DIALOGS-MESSAGE'

let initialState = {
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
  }

let dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DIALOGS_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageData = action.newText;
            return stateCopy;
        }
        case ADD_DIALOGS_MESSAGE: {
          let stateCopy = {...state}
          stateCopy.dialogsData = [...stateCopy.dialogsData]
            let createNewMessage = {
                message: state.newMessageData
            }
            stateCopy.dialogsData.push(createNewMessage);
            stateCopy.newMessageData = '';
            return stateCopy;
          }
        default:
            return state;
    }
    
}

export const addDialogsMessageActionCreate = () => ({type: ADD_DIALOGS_MESSAGE});
export const updateDialogsMessageActionCreate = (text) => 
		({type: UPDATE_DIALOGS_MESSAGE, newText: text})

export default dialogsReduser;