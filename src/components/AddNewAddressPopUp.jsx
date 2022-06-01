import React, { useState, useContext, useEffect } from "react";
// -----------------------------------------------------------------
import "../styles/components/AddNewAddressPopUp.scss";
// -----------------------------------------------------------------
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "./InputBoxWithLabel";
import Button from "./Button";
// -----------------------------------------------------------------

export default function AddNewAddressPopUp({
  setIsAddAddressPopupVisible,
  isEdit = false,
  editIndex = 0,
  setIsEditAddress = () => {
    console.log("setIsEditAddress is not passed as a parameter");
  },
}) {
  const { customerAddressList, setCustomerAddressList } = useContext(
    CustomerDetailsContext
  );
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

  useEffect(() => {
    if (!isEdit) return;

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
    } = customerAddressList[editIndex];
    setNewIsSociety(isSociety);
    setNewSociety(society);
    setNewHouseNumber(houseNumber);
    setNewTower(tower);
    setNewParkingNumber(parkingNumber);
    setNewParkingFloor(parkingFloor);
    setNewAddressLine1(addressLine1);
    setNewAddressLine2(addressLine2);
    setNewPin(pin);
    setNewArea(area);
    setNewState(state);
  }, [isEdit]);

  useEffect(() => {
		//This if conditon is used so that the state hook values are not changed back to empty strings even in case of editing
		if(isEdit) return;
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
    <div className="add-address">
      <div className="add-address-pop-up">
        <header className="add-address-pop-up-header">
          <div className="add-address-pop-up-header-cross">
            <Button
              buttonSize="small-square"
              onClick={() => {
                setIsAddAddressPopupVisible(false);
                setIsEditAddress(false);
              }}
            >
              X
            </Button>
          </div>
          {isEdit ? (
            <h2 className="add-address-pop-up-header-heading">Edit Address</h2>
          ) : (
            <h2 className="add-address-pop-up-header-heading">
              Add New Address
            </h2>
          )}
        </header>
        <div className="add-address-pop-up-address-type">
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
        <div className="add-address-pop-up-inputs">
          <div className="add-address-pop-up-inputs-left">
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
          </div>
          <div className="add-address-pop-up-inputs-right">
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
          </div>
        </div>
        <div className="add-address-pop-up-button">
          {isEdit ? (
            <Button
              onClick={() => {
                var newCustomerAddressList = customerAddressList;
                newCustomerAddressList[editIndex] = {
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
                setCustomerAddressList([...newCustomerAddressList]);
                setIsAddAddressPopupVisible(false);
                setIsEditAddress(false);
              }}
            >
              Save
            </Button>
          ) : (
            <Button
              onClick={() => {
                const newCustomerAddressList = [
                  ...customerAddressList,
                  {
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
                  },
                ];
                setCustomerAddressList(newCustomerAddressList);
                setIsAddAddressPopupVisible(false);
              }}
            >
              Add
            </Button>
          )}
          {/* <Button
            onClick={() => {
              const newCustomerAddressList = [
                ...customerAddressList,
                {
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
                },
              ];
              setCustomerAddressList(newCustomerAddressList);
              setIsAddAddressPopupVisible(false);
            }}
          >
            Add
          </Button> */}
        </div>
      </div>
    </div>
  );
}
