import React, { useState } from "react";

const CartContext = React.createContext({
    showcart: false,
    updateshowcart: () => {}
})

export const CartContextProvider = (props) => {
    const [showcart, updateshowcart] = useState(false);
    console.log("triggered");

    const UpdateShowCart = () => {
        updateshowcart(!showcart)
    }

    const values = {
        showcart: showcart,
        updateshowcart: UpdateShowCart
    }

    return (
        <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
    )

}

export default CartContext

