import style from './Header.module.css'
import headerIcon from './fb_logo.png'

const Header = () => {
    return (
        <div className={style.header}>
            <img className={style.img} src={headerIcon} alt="logo"/>
        </div>
    )
}

export default Header;