import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

AppContext.propTypes = {
  children: PropTypes.node,
};

function AppContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    cartItem.map(() => {
      count += 1;
    });
    setCartCount(count);

    let total = 0;
    cartItem.map((val) => {
      total += val.quantity * parseInt(val.priceSale); // add quantity vào api
      console.log(val.priceSale);
    });
    setCartSubTotal(total);
  }, [cartItem]);

  const handleAddToCart = (product, quantity) => {
    const cart = [...cartItem];
    const index = cart.findIndex((item) => item.id == product.id);
    if (index < 0) {
      product["quantity"] = quantity;
      cart.push(product);
    } else {
      cart[index].quantity += quantity;
    }
    setCartItem(cart);
  };
  return (
    <AppContext.Provider
      value={{
        cartItem,
        setCartItem,
        cartSubTotal,
        setCartSubTotal,
        cartCount,
        setCartCount,
        handleAddToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
