import './NavBar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return ( 
        <nav className="NavBar">
            {/* Logo */}
            <div className="NavBarLogo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* Links */}
            <ul className="NavBarLinks">
                <li>
                    <Link to="/cart" className="CartLink">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="CartBadge">{getCartCount()}</span>                            
                        </span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>                
            </ul>
            {/* Hamburger Menu */}
            <div className="HamburgerMenu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
     );
}
 
export default NavBar;