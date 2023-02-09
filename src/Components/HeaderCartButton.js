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
    let totalquantity = 0
    if(cart.cartitems.length > 0){
        totalquantity = cart.cartitems.map((item) => {return item.quantity}).reduce((acc,ele) => {return acc + ele})
    }

    // const classes = `header_Cart_button ${}`
    
    return(
        <button className="header_Cart_button bump" onClick={showCart}>
            <CartIcon />
            <h3>Your Cart</h3>
            <span className="cart_item_count">{totalquantity}</span>
        </button>
    )
}

export default HeaderCartButton;