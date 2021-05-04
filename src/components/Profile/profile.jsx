import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Content = (props) => {
      // пришлось вот так ссылки отдельно в переменную положить чтобы было более компактно
      let avatar = "https://s5o.ru/storage/simple/ru/edt/b1/c6/d7/e0/rue9685f06f6b.jpg";
      let background = "https://i.pinimg.com/originals/21/a1/92/21a1926ddd463659b1b17a75bdb0c6af.png"
      return (
            <div className={classes.content}>
                  <ProfileInfo name="Rahat" ava={avatar} bg={background}/>
                  <MyPosts postData={props.postData} addPost={props.addPost}/>
            </div>
      )
}

export default Content;