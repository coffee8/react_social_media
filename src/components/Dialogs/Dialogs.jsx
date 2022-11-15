import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
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

        </div>
    )
}

export default Dialogs;