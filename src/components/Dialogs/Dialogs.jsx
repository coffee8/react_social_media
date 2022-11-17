import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    const messageTextUpdate = React.createRef();

    const sendMessage = () => {
        props.dispatch(props.sendMessageActionCreator());
    }

    const onUpdateMessageText = () => {
        props.dispatch(props.onUpdateMessageTextActionCreator(messageTextUpdate.current.value));
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

            <div>
                <textarea placeholder={"say something!"}
                value={props.newMessageText}
                ref={messageTextUpdate}
                onChange={ onUpdateMessageText }/>
                <button onClick={ sendMessage }>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;