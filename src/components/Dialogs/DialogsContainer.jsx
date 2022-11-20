import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const sendMessage = () => {
        props.dispatch(props.sendMessageActionCreator());
    }

    const updateMessageText = (text) => {
        props.dispatch(props.onUpdateMessageTextActionCreator(text));
    }

    return (
        <Dialogs dialogData={props.dialogData}
                 messageData={props.messageData}
                 newMessageText={props.newMessageText}
                 sendMessage={sendMessage}
                 updateMessageText={updateMessageText}
        />
    )
}

export default DialogsContainer;