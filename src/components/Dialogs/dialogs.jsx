import React from 'react';
import classes from './dialogs.module.css';
import DialogsItem from './DialogsItem/dialogsItem';
import Messages from './Messages/messages';

const Dialogs = (props) => {

	let usersElements = props.usersData.map(u => <DialogsItem name={u.name} id={u.id} />);
	let dialogsElements = props.dialogsData.map(d => < Messages message={d.message} />);

	let newDialogsMessage = React.createRef();
	let createNewMessage = () => {
		props.addMessage();
	}

	let updateNewMessage = ()=> {
		props.updateDialogsMessage(newDialogsMessage.current.value)
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
						<textarea name="post" cols="30" rows="3" onChange={updateNewMessage} ref={newDialogsMessage} value={props.newMessageData}></textarea>
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