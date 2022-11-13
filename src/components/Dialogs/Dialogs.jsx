import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog}>AHMET</div>
                <div className={styles.dialog}>MEHMET</div>
                <div className={styles.dialog}>CAN</div>
            </div>


            <div className={styles.messages}>
                <div className={styles.message}>MERHABA</div>
                <div className={styles.message}>HELLO</div>
                <div className={styles.message}>PRIVET</div>
            </div>

        </div>
    )
}

export default Dialogs;