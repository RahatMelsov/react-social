import React from 'react';
import classes from './users.module.css';



const Users = (props) => {

	window.state = props;

	let UsersData = props.users.map(u => {
		return (
			<div key={u.id}>
				<ul className={classes.friend_list}>
					<li className={classes.friend}>
						<img src={u.userPhotoUrl} />
						<div className={classes.name}>
							Andres Perez
    					</div>
						<div>
							status
						</div>
						<div>
							loaction
						</div>
						<div className={classes.follow}>
						{u.isFollow 
						? <button onClick={() => (props.unfollow(u.id))}>follow</button>
						: <button onClick={() => (props.follow(u.id))}>unfollow</button>}
						</div>
					</li>
				</ul>
				</div>
		)
	})
	return (
		<div className={classes.body}>
			{UsersData}
		</div>
	)
}

export default Users;