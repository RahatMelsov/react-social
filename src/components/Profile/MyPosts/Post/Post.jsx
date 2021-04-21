import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
	<div>
          <div className={classes.post}>
          	<img src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' />
            {props.message}
            <div><span>like {props.like}</span></div>
          </div> 
	</div>
      )
}

export default Post;