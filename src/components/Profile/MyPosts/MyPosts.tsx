import React from 'react';
import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Any body here?' likeCount='0' dislikeCount='0'/>
            <Post message='Hi everybody' likeCount='3' dislikeCount='0'/>
            <Post message="It's my first post" likeCount='9' dislikeCount='1'/>
        </div>
    )
}

export default MyPosts