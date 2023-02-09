import './HeaderCartButton.css';
import CartIcon from "./CartIcon";
import { useContext } from 'react';
import CartContext from '../Context/display-cart';

const HeaderCartButton = props => {
    const cart = useContext(CartContext);
    const showCart = (e) => {
        e.preventDefault();
        cart.updateshowcart();
    }
    return(
        <button className="header_Cart_button" onClick={showCart}>
            <CartIcon />
            <h3>Your Cart</h3>
            <h4 className="cart_item_count">0</h4>
        </button>
    )
}

export default HeaderCartButton;