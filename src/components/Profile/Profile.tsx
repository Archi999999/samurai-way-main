import React from 'react';
import cls from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={cls.content}>
            <div className={cls.img}>
                <img src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'/>
            </div>
            <div>
                <div>
                    Avatar
                </div>
                <div>
                    Description
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile