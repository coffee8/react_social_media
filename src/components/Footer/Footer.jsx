import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footerRow}>
                    <div className={style.footerText}>
                        Developed by SN
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;