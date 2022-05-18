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

    let dialogs = [
        {id: 1, name: "Max"},
        {id: 2, name: "Eugene"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Tanya"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Valera"}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How it is work?!'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'}
    ]

    let dialogsElements = dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    });

    let messagesElements = messages.map((message) => {
        return <Message message={message.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;