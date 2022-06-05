import React, { useState, createContext } from "react";

export const CustomerDetailsContext = createContext();

export default function CustomerDetailsProvider({ children }) {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState("User");
  const [contactNumber, setContactNumber] = useState("");
  const [customerMailId, setCustomerMailId] = useState("");
  const [cartItems, setCartItems] = useState([]);
  // The address is of two types one is society and the other is open area, for open area we will have normal two address line but for society we will have specific fields so we need to store all this details bucause at the time of editing we must display the address in the specific manner. IMPORTANT :  The Structure of the each object of this array of objects in address must be of the form {isSociety : (true or false), society : (society name for society), houseNumber : (house number for society), tower :(tower details for society), parkingNumber :(parking number for society if any), parkingFloor:(parking floor for society), addressLine1:(address line 1 for open area) addressLine2: (address line 2 for open area),pin:(pin code for both), area : (area for both), state : (state for both)  }
  const [customerAddressList, setCustomerAddressList] = useState([]);
  // This order list will store all the previous and current orders of a customer
  const [customerOrderList, setCustomerOrderList] = useState([]);
  // This customerCurrentOrder object will store all the details of the current order IMPORTANT : The structure of the object must be of the form {name : (customer name), contactNumber: (customer contactNumber), orderItemList : (current cartItems), address : (customer address), cost : (total payable amount) }
  const [customerCurrentOrder, setCustomerCurrentOrder] = useState({});
  const [customerCarsList, setCustomerCarsList] = useState([]);
  return (
    <CustomerDetailsContext.Provider
      value={{
        isCustomerLoggedIn,
        setIsCustomerLoggedIn,
        customerName,
        setCustomerName,
        contactNumber,
        setContactNumber,
        customerMailId,
        setCustomerMailId,
        cartItems,
        setCartItems,
        customerAddressList,
        setCustomerAddressList,
        customerOrderList,
        setCustomerOrderList,
        customerCurrentOrder,
        setCustomerCurrentOrder,
        customerCarsList,
        setCustomerCarsList,
      }}
    >
      {children}
    </CustomerDetailsContext.Provider>
  );
}
