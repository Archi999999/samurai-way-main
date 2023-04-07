import React from 'react';
import cls from './Post.module.css'
// type message = string
const Post = (props: any) => {
    return (
        <div className={`${cls.item}`}>
            <img className={cls.avatar} src='https://www.shutterstock.com/image-illustration/human-silhouette-icon-badge-style-600w-1144683710.jpg'/>
            {props.message}
            <div>
                <span>like - {props.likeCount}</span>
                <br/>
                <span>dislike - {props.dislikeCount}</span>
            </div>
        </div>
    )
}

export default Post