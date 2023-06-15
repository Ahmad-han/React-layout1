import logo1 from '../assets/Logo.png'



export const Header = () => {

    return (
        <header>
            <div className="logo">
                <img src={logo1} alt="" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blogs</li>
                </ul>
            </nav>
            <div className="button">
                GIFT FINDER
            </div>
        </header>
    )
}