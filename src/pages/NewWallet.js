import React, { useState } from "react";
import mockData from "../data";

const NewWallet = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handlePhone = (event) => {
    const re = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setPhone(event.target.value);
    }
    setShowAlert(false);
  };

  const handleAmount = (event) => {
    const re = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAmount(event.target.value);
    }
    setShowAlert(false);
  };

  const _validator = () => {
    if (!name || name.length < 3) {
      setError("Please enter a valid wallet name");
    } else if (!phone || phone.length !== 10) {
      setError("Please enter a valid phone number");
    } else if (!amount) {
      setError("Plese enter a valid amount");
    } else setError("");
  };

  const onSubmit = () => {
    _validator();
    if (name && phone && amount && name.length > 2 && phone.length === 10) {
      mockData.push({
        UserId: "Usr" + Math.round(Math.random() * 1000000),
        Name: name,
        Phone: phone,
        Balance: amount,
      });
      setShowAlert(true);
    }
  };

  return (
    <form>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value.replace(/[^A-Za-z]/gi, ""));
              setShowAlert(false);
            }}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Phone</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => {
              handlePhone(e);
            }}
            maxLength={10}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Amount (Rs)</label>
        <div className="col-sm-10 cutomButton">
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => {
              handleAmount(e);
            }}
          />
          <button
            type="button"
            onClick={onSubmit}
            className="btn btn-primary customSubmit">
            Submit
          </button>
        </div>
        {showAlert || error ? (
          <div className="alertContainer">
            <div
              className={`alert ${
                error && error !== "" ? `alert-danger` : `alert-success`
              }`}
              role="alert">
              {error && error !== "" ? error : `New wallet ${name} is created.`}
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default NewWallet;
