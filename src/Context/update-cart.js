import React, { useState } from "react";

const CartItemContext = React.createContext({
    cartitems: [],
    updatecartitems: (newitem) => {}
})

export const CartItemContextProvider = (props) => {
    const [cartitems, updateitems] = useState([]);
    console.log("triggered cartitem")

    const UpdateCartItems = (newitem) => {
        const find = cartitems.findIndex((item) => {return item.id === newitem.id});
        if(find >= 0){
            cartitems[find].quantity += +newitem.quantity;
            cartitems[find].amount += +newitem.quantity * +newitem.amount;
            updateitems(cartitems);
            return;
        }
        updateitems((prevState) => [...prevState, newitem ])
    }

    // const newitem = {
    //     id: props.id,
    //     name: props.name,
    //     amount: props.price,
    //     quantity: quantity
    //   }

    const values = {
        cartitems: cartitems,
        updatecartitems: UpdateCartItems
    }

    return (
        <CartItemContext.Provider value={values}>{props.children}</CartItemContext.Provider>
    )

}

export default CartItemContext;

