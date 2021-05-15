import React from 'react';
import classes from './dialogs.module.css';
import DialogsItem from './DialogsItem/dialogsItem';
import Messages from './Messages/messages';
import {updateDialogsMessageActionCreate, addDialogsMessageActionCreate} from './../redux/dialogs_reducer'

const Dialogs = (props) => {

	let usersElements = props.State.MessagePage.usersData.map(u => <DialogsItem name={u.name} id={u.id} />);
	let dialogsElements = props.State.MessagePage.dialogsData.map(d => < Messages message={d.message} />);

	let newDialogsMessage = React.createRef();
	let createNewMessage = () => {
		props.dispatch(addDialogsMessageActionCreate());
	}

	let updateNewMessage = ()=> {
		let text = newDialogsMessage.current.value
		props.dispatch(updateDialogsMessageActionCreate(text))
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItem}>
					{usersElements}
				</div>
				<div className={classes.messages}>
					{dialogsElements}
					<div className={classes.post}>
					<div>
						<textarea placeholder="enter your message" name="post" cols="30" rows="3" onChange={updateNewMessage} ref={newDialogsMessage} value={props.State.MessagePage.newMessageData}></textarea>
					</div>
					<div>
						<button onClick={createNewMessage}>post</button>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;