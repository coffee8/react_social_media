import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const messageData = [{message: 'first'}, {message: 'second'}, {message: 'third'}]
const messages = messageData.map(message => <Message message={message.message}/>)

const dialogData = [{name: 'Ahmet', id: 1}, {name: 'Mehmet', id: 2}, {name: 'Can', id: 3}]
const dialogs = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogs}
            </div>

            <div className={styles.messages}>
                {messages}
            </div>

        </div>
    )
}

export default Dialogs;