import './HeaderCartButton.css';
import CartIcon from "./CartIcon";

const HeaderCartButton = props => {
    return(
        <button className="header_Cart_button">
            <CartIcon />
            <h3>Your Cart</h3>
            <h4 className="cart_item_count">0</h4>
        </button>
    )
}

export default HeaderCartButton;