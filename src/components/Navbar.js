import airbnbLogo from "../styles/images/airbnb-logo.png";

function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="airbnb-logo" alt="airbnb-logo"/>
        </nav>
    )
}

export default Navbar;