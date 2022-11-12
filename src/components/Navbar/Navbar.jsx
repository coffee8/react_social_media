import navbar from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbar.navbar}>
            <div className={navbar.item}>
                <a className={navbar.link} href="/profile">Profile</a>
            </div>
            <div className={navbar.item}>
                <a className={navbar.link} href="/dialogs">Dialogs</a>
            </div>
            <div className={navbar.item}>
                <a className={navbar.link} href="#">News</a>
            </div>
            <div className={navbar.item}>
                <a className={navbar.link} href="#">Music</a>
            </div>
            <div className={navbar.item}>
                <a className={navbar.link} href="#">Settings</a>
            </div>
        </div>
    )
}

export default Navbar;