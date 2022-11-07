import navbar from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbar.navbar}>
            <li>Profile</li>
            <li>Feed</li>
            <li>Messages</li>
        </div>
    )
}

export default Navbar;