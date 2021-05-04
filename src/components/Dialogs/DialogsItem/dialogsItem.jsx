import React from 'react';
import classes from './../dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props)=> {
	let path = "/dialogs/" + props.id;
	return <div className={classes.dialog}>
	<NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
</div>
}


export default DialogsItem;