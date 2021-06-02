import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import Store from './../redux/state';
import DialogsItem from './../Dialogs/DialogsItem/dialogsItem';

let State = Store.getState;
let ownFriends = State.MessagePage.usersData.map(names=> names.id<4?<DialogsItem name={names.name} id={names.id}/>:<div></div>);

const Navbar = (prop) => {
	return (<nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={`${classes.item}`}>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.item}>
          <h3>Friends</h3>
            {ownFriends}
        </div>
        <div className={classes.item}>
          <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
        </div>
      </nav>)
}

export default Navbar;