import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  let avatar = props.ava;
  let bg = props.bg;
  let name = props.name;
  return (
    <div className={classes.profileInfo}>
    <div className={classes.bg}><img src={bg} /></div>
    <div className={classes.ava}><img src={avatar} /></div>
    <p>{name}</p>
    </div>
  );
  }

export default ProfileInfo;