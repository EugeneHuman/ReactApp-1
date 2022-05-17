import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogsData = {
        [id: 1, name: "Max"],
        [id: 2, name: "Eugene"],
        [id: 3, name: "Sasha"],
        [id: 4, name: "Tatyana"],
        [id: 5, name: "Olga"],
        [id: 6, name: "Valera"]
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Max" id="1"/>
                <DialogItem name="Eugene" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Tatyana" id="4"/>
                <DialogItem name="Olga" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className="messages">
                <Message message="HI!"/>
                <Message message="How it is work?!"/>
                <Message message="Hello!"/>
            </div>
        </div>
    );
}


export default Dialogs;