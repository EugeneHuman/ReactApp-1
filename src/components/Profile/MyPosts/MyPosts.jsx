import React from 'react';
import Post from "./Post/Post.jsx";
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message='HI, how are you?' likesCount='12'/>
                <Post message="It is my  first post" likesCount='25'/>
            </div>
        </div>
    );
}

export default MyPosts;