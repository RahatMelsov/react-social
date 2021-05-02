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

	let usersData = [
		{ id: '1', name: 'Vlad' }, 
		{ id: '2', name: 'Rahat' },
		{ id: '3', name: 'Saken' },
		{ id: '4', name: 'Elaman' },
		{ id: '5', name: 'Amanzhan' },
		{ id: '6', name: 'Madi' },
	];

	let dialogsData = [
		{ message: 'hi' }, 
		{ message: 'hi' },
		{ message: 'What is your name?' },
		{ message: 'React' },
		{ message: 'cool' },
	]

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItem}>
					<DialogsItem name={usersData[0].name} id={usersData[0].id}/>
					<DialogsItem name={usersData[1].name} id={usersData[1].id}/>
				</div>
				<div className={classes.messages}>
					<Messages message={dialogsData[0].message}/>
					<Messages message={dialogsData[1].message}/>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;