import React from 'react';
import {updateDialogsMessageActionCreate, addDialogsMessageActionCreate} from './../redux/dialogs_reducer'
import Dialogs from './dialogs';
import {connect} from 'react-redux'

const mapStateToProps = (State) => {
	return {
		userData: State.MessagePage.usersData,
		dialogsData: State.MessagePage.dialogsData,
		newMessageData: State.MessagePage.newMessageData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addDialogsMessageActionCreate());
		},
		updateMessage: (text) => {
			dispatch(updateDialogsMessageActionCreate(text))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;