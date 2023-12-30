import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

AppContext.propTypes = {
  children: PropTypes.node,
};

function AppContextProvider({ children }) {
  const [cartItem, setCartItem] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartCount, setCartCount] = useState(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    return storedCartCount ? JSON.parse(storedCartCount) : 0;
  });
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const saveCartToLocalStorage = (cart) => {
    try {
      saveToLocalStorage("cart", cart);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  useEffect(() => {
    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(cartItem));

    // Cập nhật và lưu cartCount
    const updatedCartCount = cartItem.reduce(
      (count, item) => count + item.quantity,
      0,
    );
    localStorage.setItem("cartCount", JSON.stringify(updatedCartCount));
    setCartCount(updatedCartCount);

    // Cập nhật state
    updateCartInfo(cartItem);
  }, [cartItem]);

  const updateCartInfo = (cart) => {
    const count = cart.length;
    setCartCount(count);

    const total = cart.reduce((acc, val) => {
      return acc + val.quantity * parseFloat(val.priceSale);
    }, 0);
    setCartSubTotal(total);
  };

  const handleAddToCart = (product, quantity, colorSelect) => {
    const cart = [...cartItem];

    const index = cart.findIndex(
      (item) => item.id === product.id && item.color === color,
    );
    if (index < 0) {
      product["quantity"] = quantity;
      product["colorSelect"] = colorSelect;
      cart.push(product);
    } else {
      cart[index].quantity += quantity;
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cập nhật state
    setCartItem(cart);
  };

  useEffect(() => {
    saveCartToLocalStorage(cartItem);
    updateCartInfo(cartItem);
  }, [cartItem, cartCount]);

  const handleUpdateQuantity = (type, product) => {
    const cart = [...cartItem];
    const index = cart.findIndex((item) => item.id == product.id);

    if (type == "minus") {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      }
    } else {
      cart[index].quantity += 1;
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
        handleUpdateQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
