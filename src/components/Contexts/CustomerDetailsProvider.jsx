import React, { useState, createContext } from "react";

export const CustomerDetailsContext = createContext();

export default function CustomerDetailsProvider({ children }) {
  const [customerName, setCustomerName] = useState("Profile");
  const [contactNumber, setContactNumber] = useState("");
  const [cartItems, setCartItems] = useState([]);
  return (
    <CustomerDetailsContext.Provider
      value={{
        customerName,
        setCustomerName,
        contactNumber,
        setContactNumber,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CustomerDetailsContext.Provider>
  );
}
