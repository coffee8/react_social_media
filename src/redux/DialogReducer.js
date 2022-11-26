const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogData: [
        {name: 'Ahmet', id: 1},
        {name: 'Mehmet', id: 2},
        {name: 'Can', id: 3}],
    messageData: [
        {message: 'first', id: 1},
        {message: 'second', id: 2},
        {message: 'third', id: 3}],
    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
    }
    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onUpdateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogReducer;