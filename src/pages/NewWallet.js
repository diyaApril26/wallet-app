import React, { useState } from "react";
import mockData from "../data";

const NewWallet = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(null);

  const onSubmit = () => {
    mockData.push({
      UserId: "Usr" + Math.round(Math.random()*1000000),
      Name: name,
      Phone: phone,
      Balance: amount,
    });
    setShowAlert(true);
  };

  return (
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            on
            readonly
            class="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowAlert(false);
            }}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Phone
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setShowAlert(false);
            }}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Amount (Rs)
        </label>
        <div class="col-sm-10 cutomButton">
          <input
            type="text"
            class="form-control"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setShowAlert(false);
            }}
          />
          <button
            type="button"
            onClick={onSubmit}
            class="btn btn-primary customSubmit">
            Submit
          </button>
        </div>
        {showAlert ? (
          <div className="alertContainer">
            <div class="alert alert-success" role="alert">
              New Wallet is added
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default NewWallet;
