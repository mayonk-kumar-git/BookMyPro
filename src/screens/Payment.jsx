import React, { useContext, useState } from "react";
import StepProgress from "../components/StepProgress";
// --------------------------------------------------------------------------
import "../styles/screens/Payment.scss";
// --------------------------------------------------------------------------
import AddAddressIcon from "../assets/icons/Payment/AddAddressIcon.svg";
import CartCarIcon from "../assets/icons/Payment/CartCarIcon.svg";
import AddServiceIcon from "../assets/icons/Payment/AddServiceIcon.svg";
// --------------------------------------------------------------------------
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
import { Link } from "react-router-dom";
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

export default function Payment() {
  const { cartItems, setCartItems } = useContext(CustomerDetailsContext);
  const [specialInstruction, setSpecialInstruction] = useState("");
  var totalBill = 0;
  var totalPayableAmount = 0;
  // const [totalBill, setTotalBill] = useState(0);
  // const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  return (
    <>
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
            <div className="payment-section-left-address-add-address">
              <img src={AddAddressIcon} alt="Add location" />
              <p>Add a Service address</p>
            </div>
          </div>
          <div className="payment-section-left-instruction">
            <input
              type="text"
              placeholder="Add special instruction (if any)"
              onChange={(e) => {
                setSpecialInstruction(e.target.value);
								console.log(specialInstruction)
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
              {" "}
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

          <Link
            className="payment-section-right-add-service"
            to="/services"
          >
            <img src={AddServiceIcon} alt="+" />
            <p>Book Service for your Second Car</p>
          </Link>
          {cartItems.length > 0 ? (
            <>
              <div className="payment-section-right-promocode">
                <p>% Apply Promo code</p>
                <p>{`>`}</p>
              </div>
              <div className="payment-section-right-bill">
                <h2 className="payment-section-right-bill-heading">
                  Bill Details
                </h2>
                {cartItems.map((item, index) => {
                  totalBill = totalBill + item.cost;
                  totalPayableAmount = totalBill + totalBill * 0.12;
                  // setTotalBill(totalBill + item.cost);
                  // setTotalPayableAmount(totalBill + totalBill * 0.12);
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
                  <p>
                    {`₹ ${Math.round((totalPayableAmount - totalBill) * 100) / 100}`}
                  </p>
                </div>
                <hr />
                <div className="payment-section-right-bill-payable">
                  <p>To Pay</p>
                  <p>{`₹ ${Math.round(totalPayableAmount * 100) / 100}`}</p>
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
