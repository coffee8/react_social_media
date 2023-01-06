import style from "./Dialogs.module.css";
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
        <div className={style.dialogsPage}>

            <div className={style.dialogColumn}>

                <div className={style.dialogContainer}>
                    <div className={style.messageContainer}>
                        <div className={style.message}>{"msg 1"}</div>
                    </div>
                    <div className={style.messageContainer}>
                        <div className={style.message}>{"msg 2 "}</div>
                    </div>
                    <div className={style.messageContainer}>
                        <div className={style.message}>{"msg 3"}</div>
                    </div>
                </div>

                <div className={style.messageInputRow}>
                    <textarea className={style.messageTextInput}
                              placeholder={"Write some message..."}></textarea>
                    <button className={style.messageTextButton}>send</button>
                </div>
            </div>


            {/*<div className={style.dialogItems}>*/}
            {/*    {dialogs}*/}
            {/*</div>*/}

            {/*<div className={style.message}>*/}
            {/*    {messages}*/}
            {/*</div>*/}

            {/*<div className={style.text}>*/}
            {/*    <textarea placeholder={"say something!"}*/}
            {/*              value={props.newMessageText}*/}
            {/*              ref={messageTextUpdate}*/}
            {/*              onChange={onUpdateMessageText}/>*/}
            {/*    <div>*/}
            {/*        <button onClick={onSendMessage}>Send</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default Dialogs;