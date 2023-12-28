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
  console.log(localStorage.getItem("cartCount"));
  // Hàm để lưu giỏ hàng vào localStorage
  const saveCartToSessionStorage = (cart) => {
    try {
      console.log("Saving to sessionStorage:", cart);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving to sessionStorage:", error);
    }
  };

  const getCartFromSessionStorage = () => {
    try {
      const storedCart = sessionStorage.getItem("cart");
      console.log("Retrieved from sessionStorage:", storedCart);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error retrieving from sessionStorage:", error);
      return [];
    }
  };

  useEffect(() => {
    // Lấy giỏ hàng từ localStorage khi component mount
    const storedCart = getCartFromSessionStorage();
    setCartItem(storedCart);
    updateCartInfo(storedCart);
  }, []);

  useEffect(() => {
    // Mỗi khi giỏ hàng thay đổi, lưu vào localStorage và cập nhật thông tin giỏ hàng
    saveCartToSessionStorage(cartItem);
    updateCartInfo(cartItem);
  }, [cartItem, cartCount]);

  const updateCartInfo = (cart) => {
    let count = 0;
    cart.forEach(() => {
      count += 1;
    });
    setCartCount(count);

    let total = 0;
    cart.forEach((val) => {
      total += val.quantity * parseFloat(val.priceSale);
    });
    setCartSubTotal(total);
  };
  const handleAddToCart = (product, quantity) => {
    const cart = [...cartItem];
    const index = cart.findIndex((item) => item.id == product.id);
    if (index < 0) {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
      product["quantity"] = quantity;
      cart.push(product);
      localStorage.setItem("cartCount", JSON.stringify(cartCount));
    } else {
      // Nếu sản phẩm đã có trong giỏ hàng, cập nhật quantity
      cart[index].quantity += quantity;
    }
    setCartItem(cart);
    localStorage.setItem("cartCount", cartCount);
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
