import styles from './Footer.module.css'

const Footer = () => {
    return (
        // <div className={styles.footer}>
        //     Developed by SN
        // </div>

        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__text}>
                        Developed by SN
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;