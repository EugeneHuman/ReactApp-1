import React from 'react';

import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.img}>
                <img
                    src="https://files.realpython.com/media/Image-Processing-in-Python-With-Pillow_Watermarked.b86d7e55f981.jpg"/>
            </div>
            <div className={s.discriptionBlock}>
                Ava + discription
            </div>
        </div>)
}

export default ProfileInfo;