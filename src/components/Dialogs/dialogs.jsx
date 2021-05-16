import React from 'react';
import classes from './dialogs.module.css';
import DialogsItem from './DialogsItem/dialogsItem';
import Messages from './Messages/messages';

const Dialogs = (props) => {
	debugger;
	let usersElements = props.userData.map(u => <DialogsItem name={u.name} id={u.id} />);
	let dialogsElements = props.dialogsData.map(d => < Messages message={d.message} />);

	let newDialogsMessage = React.createRef();
	let createNewMessage = () => {
		props.addMessage();
	}

	let updateNewMessage = ()=> {
		let text = newDialogsMessage.current.value
		props.updateMessage(text)
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
						<textarea placeholder="enter your message" name="post" cols="30" rows="3" onChange={updateNewMessage} ref={newDialogsMessage} value={props.newMessageData}></textarea>
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