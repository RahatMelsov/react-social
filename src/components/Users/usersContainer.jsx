import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUser, unFollowAC } from '../redux/users_reducer';
import Users from './users';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow : (userid) => {
			console.log('dispatch')
			dispatch(followAC(userid));
		},
		unfollow: (userid) => {
			console.log('dispatch')
			dispatch(unFollowAC(userid));
		},
		setUser: (users) => {
			dispatch(setUser(users));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;