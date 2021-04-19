import React from 'react';
import classes from './profile.module.css';

const Content = () => {
	return (
	<div className={classes.content}>
      
      <div className={classes.bg}><img src="https://i.pinimg.com/originals/21/a1/92/21a1926ddd463659b1b17a75bdb0c6af.png"/></div>
      <div className={classes.ava}><img src="https://s5o.ru/storage/simple/ru/edt/b1/c6/d7/e0/rue9685f06f6b.jpg"/></div>
      
      <div className={classes.posts}>
        My posts
          <div className={classes.post}>
            New Post
          </div>

          <div className={classes.post}>
            Post 1
          </div>

          <div className={classes.post}>
            Post 2
          </div>

      </div> 

      </div>
	 
      )
}

export default Content;