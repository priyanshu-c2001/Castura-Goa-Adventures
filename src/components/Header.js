import { Link } from "react-router-dom";
import Clogo from"url:../assets/Castura T&T Logo.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={Clogo} alt="logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/" className="same-a"><li>Home</li></Link>
                    <Link to="/components/packages" className="same-a"><li>Packages</li></Link>
                    <Link to="/components/Contact" className="same-a"> <li>Contact Us</li></Link>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;

