const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const dialogReducer = (state, action) => {

    if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: 4,
            message: state.newMessageText
        }

        state.messageData.push(newMessage);
        state.newMessageText = '';

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessageText;
    }

    return state;
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onUpdateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogReducer;