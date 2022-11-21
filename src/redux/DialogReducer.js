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
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
    }
    return state;
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onUpdateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogReducer;