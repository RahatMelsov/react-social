import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Messages = (props)=> {
	return <div className={classes.message}>{props.message}</div>
}

const DialogsItem = (props)=> {
	let path = "/dialogs/" + props.id;
	return <div className={classes.dialog}>
	<NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
</div>
}

const Dialogs = () => {
	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItem}>
					<DialogsItem name="Vlad" id="1"/>
					<DialogsItem name="Rahat" id="2"/>
					<DialogsItem name="Saken" id="3"/>
					<DialogsItem name="Elaman" id="4"/>
					<DialogsItem name="Amanzhan" id="5"/>
					<DialogsItem name="Madi" id="6"/>
				</div>
				<div className={classes.messages}>
					<Messages message="hi"/>
					<Messages message="hi"/>
					<Messages message="What is your name?"/>
					<Messages message="React"/>
					<Messages message="cool"/>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;