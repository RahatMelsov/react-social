import React from 'react';
import {updateDialogsMessageActionCreate, addDialogsMessageActionCreate} from './../redux/dialogs_reducer'
import Dialogs from './dialogs';

const DialogsContainer = (props) => {

	let addMeassage = () => {
		props.dispatch(addDialogsMessageActionCreate());
	}

	let updateMessage = (text)=> {
		props.dispatch(updateDialogsMessageActionCreate(text))
	}

	return (
		<Dialogs addMessage={addMeassage} updateMessage={updateMessage} 
		userData={props.State.MessagePage.usersData} 
		dialogsData={props.State.MessagePage.dialogsData}
		newMessageData={props.State.MessagePage.newMessageData}/>
	)
}

export default DialogsContainer;