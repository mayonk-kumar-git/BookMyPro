import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// --------------------------------------------------------------------------
import "../styles/screens/Payment.scss";
// --------------------------------------------------------------------------
import AddAddressIcon from "../assets/icons/Payment/AddAddressIcon.svg";
import CartCarIcon from "../assets/icons/Payment/CartCarIcon.svg";
import AddServiceIcon from "../assets/icons/Payment/AddServiceIcon.svg";
// --------------------------------------------------------------------------
import StepProgress from "../components/StepProgress";
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
import Button from "../components/Button";
import AddNewAddressPopUp from "../components/AddNewAddressPopUp";
// --------------------------------------------------------------------------

const STEPS = [
  "Select Service",
  "Car Information",
  "Choose Package",
  "Make Payment",
];

function CartItem({ brand, model, vechicleNumber, service, cost }) {
  return (
    <div className="cart-item">
      <img src={CartCarIcon} alt="car" />
      <div className="cart-item-car-details">
        <div className="cart-item-car-details-top">
          {`${brand} ${model} | ${vechicleNumber}`}
        </div>
        <div className="cart-item-car-details-bottom">
          <p>{service}</p>
        </div>
      </div>
      <div className="cart-item-cost">{`₹ ${cost}`}</div>
    </div>
  );
}

function AddressBox({
  savedAddress,
  name,
  contact,
  customerCurrentOrder,
  setCustomerCurrentOrder,
}) {
  const {
    isSociety,
    society,
    houseNumber,
    tower,
    parkingNumber,
    parkingFloor,
    addressLine1,
    addressLine2,
    pin,
    area,
    state,
  } = savedAddress;

  return (
    <div className="address-box">
      <div className="address-box-details">
        <p>{name}</p>
        {isSociety ? (
          <>
            <p>{`${society}, ${tower}, ${houseNumber}`}</p>
            <p>{`parking : ${parkingFloor}, ${parkingNumber}`}</p>
          </>
        ) : (
          <>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
          </>
        )}
        <p>{`${pin}, ${area}, ${state}`}</p>
        <p>{contact}</p>
      </div>
      <div className="address-box-button">
        <Button
          onClick={() => {
            setCustomerCurrentOrder({
              ...customerCurrentOrder,
              address: savedAddress,
            });
          }}
        >
          Use address
        </Button>
      </div>
    </div>
  );
}

export default function Payment() {
  const {
    customerName,
    contactNumber,
    cartItems,
    setCartItems,
    customerAddressList,
    setCustomerAddressList,
    customerOrderList,
    setCustomerOrderList,
    customerCurrentOrder,
    setCustomerCurrentOrder,
  } = useContext(CustomerDetailsContext);
  const [specialInstruction, setSpecialInstruction] = useState("");
  const [isAddAddressPopupVisible, setIsAddAddressPopupVisible] =
    useState(false);
  const [totalBill, setTotalBill] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);


  useEffect(() => {
    // Always use parseFLoat to add the numbers otherwise it will be added as a string instead of numbers
    var total = 0;
    cartItems.forEach((item) => {
      total = parseFloat(total) + parseFloat(item.cost);
    });
    setTotalBill(total);
    var tempTax = Math.round(parseFloat(total) * 12) / 100;
    setTax(tempTax);
    setTotalPayableAmount(
      Math.round((parseFloat(total) + parseFloat(tempTax)) * 100) / 100
    );
    // console.log(tax, total, totalPayableAmount);

    setCustomerCurrentOrder({
      name: customerName,
      contactNumber: contactNumber,
      orderItemList: cartItems,
      address: "",
      cost: totalPayableAmount,
    });
  }, []);

  return (
    <>
      {isAddAddressPopupVisible ? (
        <AddNewAddressPopUp
          setIsAddAddressPopupVisible={setIsAddAddressPopupVisible}
        />
      ) : (
        <></>
      )}
      <StepProgress
        stepsList={STEPS}
        //assuming by the time we reach the payment page we must have already completed the previous steps, might change the implementation later... as of now lets assume the current step is "make payment" -- STEPS[3]
        currentStep={3}
      />
      <section className="payment-section">
        <div className="payment-section-left">
          <div className="payment-section-left-address">
            <h3 className="payment-section-left-adderss-heading">
              Add a Service address
            </h3>
            <div className="payment-section-left-address-container">
              <div
                onClick={() => {
                  setIsAddAddressPopupVisible(true);
                }}
                className="payment-section-left-address-container-add-address"
              >
                <img src={AddAddressIcon} alt="Add location" />
                <p>Add a Service address</p>
              </div>
              {customerAddressList &&
                customerAddressList.map((savedAddress, index) => (
                  <AddressBox
                    key={index}
                    savedAddress={savedAddress}
                    name={customerName}
                    contact={contactNumber}
                    customerCurrentOrder={customerCurrentOrder}
                    setCustomerCurrentOrder={setCustomerCurrentOrder}
                  />
                ))}
            </div>
          </div>
          <div className="payment-section-left-instruction">
            <p>Special Instruction</p>
            <input
              type="text"
              placeholder="Add special instruction (if any)"
              onChange={(e) => {
                setSpecialInstruction(e.target.value);
                // console.log(specialInstruction);
              }}
            />
          </div>
          <div className="payment-section-left-payment">
            <p>Payment</p>
          </div>
        </div>
        <div className="payment-section-right">
          {cartItems.length > 0 ? (
            <>
              <div className="payment-section-right-cart-list">
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    brand={item.brand}
                    model={item.model}
                    vechicleNumber={item.vechicleNumber}
                    service={item.service}
                    cost={item.cost}
                  />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}

          <Link className="payment-section-right-add-service" to="/services">
            <img src={AddServiceIcon} alt="+" />
            <p>Book Service for your Second Car</p>
          </Link>
          {cartItems.length > 0 ? (
            <>
              <div className="payment-section-right-promocode">
                <p>Apply Promo code</p>
                <p>{`>`}</p>
              </div>
              <div className="payment-section-right-bill">
                <h2 className="payment-section-right-bill-heading">
                  Bill Details
                </h2>
                {cartItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="payment-section-right-bill-item"
                    >
                      <p>{`${item.service}(${item.vechicleNumber})`}</p>
                      <p>{`₹ ${item.cost}`}</p>
                    </div>
                  );
                })}
                <div className="payment-section-right-bill-item">
                  <p>Tax(12%)</p>
                  <p>{`₹ ${tax}`}</p>
                </div>
                <hr />
                <div className="payment-section-right-bill-payable">
                  <p>To Pay</p>
                  <p>{`₹ ${totalPayableAmount}`}</p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
