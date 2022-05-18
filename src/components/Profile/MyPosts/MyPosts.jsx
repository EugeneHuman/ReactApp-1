import React from 'react';
import Post from "./Post/Post.jsx";
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'HI, how are you?', likesCount: 12},
        {id: 2, message: 'It is my  first post', likesCount: 33},
    ]

    let postsElements = posts.map((post) => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;