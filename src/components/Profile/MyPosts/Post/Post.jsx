import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://ava-24.com/_ph/98/2/433115580.jpg'/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;