import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    if (props.isAuth === false) {
        return <Navigate to={'/login'}/>
    }
    const messageTextUpdate = React.createRef();

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onUpdateMessageText = () => {
        props.updateMessageText(messageTextUpdate.current.value);
    }
    const dialogs = props.dialogData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messages = props.messageData.map(message => <Message message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogs}
            </div>

            <div className={styles.messages}>
                {messages}
            </div>

            <div className={styles.text}>
                <textarea placeholder={"say something!"}
                          value={props.newMessageText}
                          ref={messageTextUpdate}
                          onChange={onUpdateMessageText}/>
                <div>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;