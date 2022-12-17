import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageActionCreator, onUpdateMessageTextActionCreator} from '../../redux/DialogReducer';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData,
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText,
        auth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        updateMessageText: (text) => dispatch(onUpdateMessageTextActionCreator(text)),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;