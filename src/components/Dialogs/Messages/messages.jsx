import React from 'react';
import classes from './../dialogs.module.css';
const Messages = (props)=> {
	return <div className={classes.message}>{props.message}</div>
}

export default Messages;