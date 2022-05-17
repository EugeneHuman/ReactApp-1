import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.dws}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a href="/news">News</a>
                </div>
                <div className={s.item}>
                    <a href="/musics">Musics</a>
                </div>
                <div className={s.item}>
                    <a href="/settings">Settings</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;