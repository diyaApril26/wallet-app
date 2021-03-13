import React, { useState } from "react";
import mockData from "../data";

const CheckBalance = () => {
  const [balance, setBalance] = useState("");
  const [showBalance, setShowBalance] = useState(false);
  const [error, setError] = useState("");

  const selectUser = (e) => {
    setBalance(e.target.value);
    setError('');
  };

  const onSubmit = () => {
    if (balance) {
      setShowBalance(true);
    } else {
      setError("Please select a wallet");
    }
  };

  return (
    <form>
      <div className="form-group columnFlex">
        <label className="maringRight">User</label>
        <select
          className="form-control maringRight"
          id="userSelection"
          defaultValue="Select user"
          onChange={(e) => {
            selectUser(e);
            setShowBalance(false);
          }}>
          <option value="Select user" disabled>
            Select user
          </option>
          ;
          {mockData.map((data, index) => {
            return (
              <option key={index} value={data.Balance}>
                {data.Name}
              </option>
            );
          })}
        </select>

        <button type="button" onClick={onSubmit} className="btn btn-primary">
          Check Balance
        </button>
      </div>

      {showBalance || error ? (
        <div className="alertContainer">
          <div
            className={`alert ${
              error && error !== "" ? `alert-danger` : `alert-success`
            }`}
            role="alert">
            {error && error !== ""
              ? error
              : `Available wallet balance is ${balance}.`}
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default CheckBalance;
