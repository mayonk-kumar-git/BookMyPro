import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// -------------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyCart.scss";
// -------------------------------------------------------------
import CirclePlusIcon from "../../assets/icons/CirclePlusIcon.svg";
import LocationIcon from "../../assets/icons/LocationIcon.svg";
import CartCarIcon from "../../assets/icons/CartCarIcon.svg";
import EditIcon from "../../assets/icons/EditIcon.svg";

// -------------------------------------------------------------
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import InputBox from "../../components/InputBox";
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import { CarWashServiceDetailsContext } from "../../components/Contexts/CarWashServiceDetailsProvider";
import InputBoxWithLabel from "../../components/InputBoxWithLabel";
import Button from "../../components/Button";
// -------------------------------------------------------------

function AddressBox({
  address,
  setCustomerCurrentOrder,
  customerCurrentOrder,
  setIsAddressPopUpVisible,
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
  } = address;
  return (
    <div
      className="mobile-address-box"
      onClick={() => {
        setCustomerCurrentOrder({
          ...customerCurrentOrder,
          customerAddress: { ...address },
        });
        setIsAddressPopUpVisible(false);
      }}
    >
      <div className="mobile-address-box-details">
        {isSociety ? (
          <>
            <p>{`Society: ${society}, Tower: ${tower}, House No.: ${houseNumber}`}</p>
            <p>{`Parking: ${parkingFloor}, ${parkingNumber}`}</p>
          </>
        ) : (
          <>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
          </>
        )}
        <p>{`${pin}, ${area}, ${state}`}</p>
      </div>
      <div className="mobile-address-box-select-button">
        <p>Select</p>
      </div>
    </div>
  );
}

function AddressPopUp({
  setIsAddressPopUpVisible,
  customerAddressList,
  setCustomerAddressList,
  customerCurrentOrder,
  setCustomerCurrentOrder,
}) {
  const [newIsSociety, setNewIsSociety] = useState("");
  const [newSociety, setNewSociety] = useState("");
  const [newHouseNumber, setNewHouseNumber] = useState("");
  const [newTower, setNewTower] = useState("");
  const [newParkingNumber, setNewParkingNumber] = useState("");
  const [newParkingFloor, setNewParkingFloor] = useState("");
  const [newAddressLine1, setNewAddressLine1] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newPin, setNewPin] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newState, setNewState] = useState("");

  const [isAddAddressInputVisible, setIsAddAddressInputVisible] =
    useState(false);

  useEffect(() => {
    //This if conditon is used so that the state hook values are not changed back to empty strings even in case of editing
    setNewIsSociety(true);
    setNewSociety("");
    setNewHouseNumber("");
    setNewTower("");
    setNewParkingNumber("");
    setNewParkingFloor("");
    setNewAddressLine1("");
    setNewAddressLine2("");
    setNewPin("");
    setNewArea("");
    setNewState("");
  }, [customerAddressList]);
  return (
    <div className="mobile-address">
      <div
        className="close-popup"
        onClick={() => {
          setIsAddressPopUpVisible(false);
        }}
      >
        <p>x</p>
      </div>
      <div className="select-address-container">
        <div className="saved-address">
          {customerAddressList.length > 0 ? (
            <>
              <h2>Select from saved Address</h2>
              {customerAddressList.map((address, index) => (
                <AddressBox
                  key={index}
                  address={address}
                  setCustomerCurrentOrder={setCustomerCurrentOrder}
                  customerCurrentOrder={customerCurrentOrder}
                  setIsAddressPopUpVisible={setIsAddressPopUpVisible}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div
          className="add-new-address-button"
          onClick={() => {
            setIsAddAddressInputVisible(true);
          }}
        >
          <img src={CirclePlusIcon} alt="" />
          <p>Add new Address</p>
        </div>
      </div>
      <div
        className={
          "mobile-address-pop-up" +
          (isAddAddressInputVisible ? " show" : " hide")
        }
      >
        <div
          className="close-popup"
          onClick={() => {
            setIsAddAddressInputVisible(false);
          }}
        >
          <p>x</p>
        </div>
        <div className="mobile-address-pop-up-address-type">
          <p>I live in a </p>
          <p
            className={"btn" + (newIsSociety ? " selected" : "")}
            onClick={() => {
              setNewIsSociety(true);
            }}
          >
            Society
          </p>
          <p
            className={"btn" + (newIsSociety ? "" : " selected")}
            onClick={() => {
              setNewIsSociety(false);
            }}
          >
            Open Area
          </p>
        </div>
        {newIsSociety ? (
          <>
            <InputBoxWithLabel
              input={newSociety}
              setInput={setNewSociety}
              label="Society Name"
              placeholder="Enter Society Name"
            />
            <InputBoxWithLabel
              input={newTower}
              setInput={setNewTower}
              label="Tower Name / Number"
              placeholder="Enter Tower Name or Number"
            />
            <InputBoxWithLabel
              input={newHouseNumber}
              setInput={setNewHouseNumber}
              label="House Number"
              placeholder="Enter House Number"
            />
            <InputBoxWithLabel
              input={newParkingFloor}
              setInput={setNewParkingFloor}
              label="Parking Floor"
              placeholder="Enter Parking Floor"
            />
            <InputBoxWithLabel
              input={newParkingNumber}
              setInput={setNewParkingNumber}
              label="Parking Number"
              placeholder="Enter Parking Number"
            />
          </>
        ) : (
          <>
            <InputBoxWithLabel
              input={newAddressLine1}
              setInput={setNewAddressLine1}
              label="Address Line 1"
              placeholder="Enter Address"
            />
            <InputBoxWithLabel
              input={newAddressLine2}
              setInput={setNewAddressLine2}
              label="Address Line 2"
              placeholder="Enter Address"
            />
          </>
        )}
        <InputBoxWithLabel
          input={newPin}
          setInput={setNewPin}
          label="PIN code"
          placeholder="Enter your PIN code"
        />
        <InputBoxWithLabel
          input={newArea}
          setInput={setNewArea}
          label="Area"
          placeholder="Enter Area"
        />
        <InputBoxWithLabel
          input={newState}
          setInput={setNewState}
          label="State"
          placeholder="Enter State Name"
        />
        <Button
          onClick={() => {
            if (
              (newIsSociety &&
                (!newSociety ||
                  !newHouseNumber ||
                  !newHouseNumber ||
                  !newTower ||
                  !newParkingNumber ||
                  !newParkingFloor)) ||
              (!newIsSociety && !newAddressLine1) ||
              !newPin ||
              !newArea ||
              !newState
            ) {
              alert("Please enter all the data fields");
              return;
            }
            const newAddress = {
              isSociety: newIsSociety,
              society: newSociety,
              houseNumber: newHouseNumber,
              tower: newTower,
              parkingNumber: newParkingNumber,
              parkingFloor: newParkingFloor,
              addressLine1: newAddressLine1,
              addressLine2: newAddressLine2,
              pin: newPin,
              area: newArea,
              state: newState,
            };
            setCustomerCurrentOrder({
              ...customerCurrentOrder,
              customerAddress: { ...newAddress },
            });
            const newCustomerAddressList = [...customerAddressList, newAddress];
            setCustomerAddressList([...newCustomerAddressList]);
            setIsAddressPopUpVisible(false);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

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

function SelectedAddress({ address, name, contact }) {
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
  } = address;
  return (
    <div className="selected-address">
      <div className="selected-address-details">
        <p>{name}</p>
        {isSociety ? (
          <>
            <p>{`Society: ${society}, Tower: ${tower}, House No.: ${houseNumber}`}</p>
            <p>{`Parking: ${parkingFloor}, ${parkingNumber}`}</p>
          </>
        ) : (
          <>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
          </>
        )}
        <p>{`${pin}, ${area}, ${state}`}</p>
        <p>{`Contact: ${contact}`}</p>
      </div>
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
  const [isAddressPopUpVisible, setIsAddressPopUpVisible] = useState(false);
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
      customerName: customerName,
      customerContactNumber: contactNumber,
      orderItemList: cartItems,
      customerAddress: {},
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
    <>
      {isAddressPopUpVisible ? (
        <AddressPopUp
          setIsAddressPopUpVisible={setIsAddressPopUpVisible}
          customerAddressList={customerAddressList}
          setCustomerAddressList={setCustomerAddressList}
          customerCurrentOrder={customerCurrentOrder}
          setCustomerCurrentOrder={setCustomerCurrentOrder}
        />
      ) : (
        <></>
      )}
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
                    <div
                      key={index}
                      className="mobile-payment-section-bill-item"
                    >
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
        <div
          className="mobile-select-address"
          onClick={() => {
            setIsAddressPopUpVisible(true);
          }}
        >
          <div>
            <header>
              <img src={LocationIcon} alt="" />
              <h2>Address</h2>
            </header>
            {JSON.stringify(customerCurrentOrder.customerAddress) !==
            JSON.stringify({}) ? (
              <SelectedAddress
                name={customerName}
                address={customerCurrentOrder.customerAddress}
                contact={contactNumber}
              />
            ) : (
              <div className="choose-address">
                <img src={CirclePlusIcon} alt="" />
                <p>Choose Your address</p>
              </div>
            )}
          </div>
          <img src={EditIcon} alt="" />
        </div>
      </div>
    </>
  );
}
