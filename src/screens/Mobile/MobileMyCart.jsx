import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// -------------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyCart.scss";
// -------------------------------------------------------------
import CirclePlusIcon from "../../assets/icons/CirclePlusIcon.svg";
import CartCarIcon from "../../assets/icons/CartCarIcon.svg";

// -------------------------------------------------------------
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import InputBox from "../../components/InputBox";
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import { CarWashServiceDetailsContext } from "../../components/Contexts/CarWashServiceDetailsProvider";
// -------------------------------------------------------------

function CartItem({ brand, model, vechicleNumber, service, plan, cost }) {
  return (
    <div className="mobile-cart-item">
      <img src={CartCarIcon} alt="car" />
      <div className="mobile-cart-item-car-details">
        <div className="mobile-cart-item-car-details-top">
          {`${brand} ${model} | ${vechicleNumber}`}
        </div>
        <div className="mobile-cart-item-car-details-bottom">
          <p>{service}</p>
          <p>{plan}</p>
        </div>
      </div>
      <div className="mobile-cart-item-cost">{`₹ ${cost}`}</div>
    </div>
  );
}

export default function MobileMyCart() {
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
  const {
    setSelectedService,
    setSelectedBrand,
    setSelectedModel,
    setSelectedFuel,
    setSelectedPlan,
    setSelectedSegment,
    setVechicleNumber,
    setCost,
  } = useContext(CarServiceDetailsContext);

  const {
    setTypeOfCarWash,
    setSelectedDay,
    setExteriorWashSelectedSlot,
    setInteriorWashSelectedSlot,
  } = useContext(CarWashServiceDetailsContext);
  const [promocode, setPromocode] = useState("");
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
  const navigate = useNavigate();
  // --------------------------------------------------------
  const onClickBookAnotherService = () => {
    navigate("/");
    setSelectedService("");
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedFuel("");
    setSelectedPlan("");
    setSelectedSegment("");
    setVechicleNumber("");
    setCost("");
    setTypeOfCarWash("Exterior");
    setSelectedDay("");
    setExteriorWashSelectedSlot("");
    setInteriorWashSelectedSlot("");
  };
  // --------------------------------------------------------
  return (
    <div className="mobile-my-cart">
      <header className="mobile-my-cart-header">
        <div
          className="mobile-my-cart-header-back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <h1>{`<`}</h1>
        </div>
        <h1>My Cart</h1>
      </header>
      <div className="mobile-payment-section">
        {cartItems.length > 0 ? (
          <>
            <div className="mobile-payment-section-cart-list">
              {cartItems.map((item, index) => {
                // console.log(item);
                return (
                  <CartItem
                    key={index}
                    brand={item.brand}
                    model={item.model}
                    vechicleNumber={item.vechicleNumber}
                    service={item.service}
                    plan={item.plan}
                    cost={item.cost}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}

        <div
          className="mobile-payment-section-add-service"
          onClick={() => {
            onClickBookAnotherService();
          }}
        >
          <img src={CirclePlusIcon} alt="+" />
          <p>Book Service for your Second Car</p>
        </div>
        {cartItems.length > 0 ? (
          <>
            {/* <div className="mobile-payment-section-promocode">
              <p>Apply Promo code</p>
              <p>{`>`}</p>
            </div> */}
            <InputBox
              input={promocode}
              setInput={setPromocode}
              placeholder="Apply Promocode"
            />
            <div className="mobile-payment-section-bill">
              <h2 className="mobile-payment-section-bill-heading">
                Bill Details
              </h2>
              {cartItems.map((item, index) => {
                return (
                  <div key={index} className="mobile-payment-section-bill-item">
                    <p>{`${item.service}(${item.vechicleNumber})`}</p>
                    <p>{`₹ ${item.cost}`}</p>
                  </div>
                );
              })}
              <div className="mobile-payment-section-bill-item">
                <p>Tax(12%)</p>
                <p>{`₹ ${tax}`}</p>
              </div>
              <hr />
              <div className="mobile-payment-section-bill-payable">
                <p>To Pay</p>
                <p>{`₹ ${totalPayableAmount}`}</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
