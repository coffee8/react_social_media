import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name={'Ahmet'} id={1}/>
                <DialogItem name={'Mehmet'} id={2}/>
                <DialogItem name={'Can'} id={3}/>
            </div>

            <div className={styles.messages}>
                <Message message={'Merhaba, ben Ahmet'}/>
                <Message message={'Merhaba, ben Mehmet'}/>
                <Message message={'Merhaba, ben Can'}/>
            </div>

        </div>
    )
}

export default Dialogs;