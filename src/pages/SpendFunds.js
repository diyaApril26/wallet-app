import React, { useState } from "react";
import mockData from "../data";
import transactions from "../transactions";
import moment from "moment";

const SpendFunds = () => {
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState(false);
  const [walletName, setWalletName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, showError] = useState("");

  const selectUser = (e) => {
    setUserId(e.target.value);
    showError("");
    setStatus(false);
  };

  const handleAmount = (event) => {
    const re = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAmount(event.target.value);
    }
    setStatus(false);
    showError("");
  };

  const _validator = () => {
    if (!userId) {
      showError("Please select a wallet");
    } else if (!amount) {
      showError("Plese enter a valid amount");
    } else showError("");
  };

  const onSubmit = () => {
    _validator();
    if (userId) {
      let objIndex = mockData.findIndex((obj) => obj.UserId === userId);
      let obj = mockData[objIndex];
      setWalletName(obj.Name);
      if (obj.Balance < amount) {
        showError(`${obj.Name}'s wallet does not have enough funds.`);
      } else {
        obj.Balance = parseFloat(obj.Balance) - parseFloat(amount);

        transactions.push({
          Name: obj.Name,
          Date: moment().format("DD MMM, h:mm a"),
          Amount: "-" + amount,
          Balance: obj.Balance,
        });
        showError(null);
        setStatus(true);
      }
    }
  };

  return (
    <form>
      <div className="form-group columnFlex">
        <label className="maringRight customLabel">User</label>
        <select
          className="form-control maringRight "
          id="userSelection"
          defaultValue={"Select user"}
          onChange={(e) => {
            selectUser(e);
            setStatus(false);
          }}>
          <option value="Select user" disabled>
            Select user
          </option>
          ;
          {mockData.map((data, index) => {
            return (
              <option key={index} value={data.UserId}>
                {data.Name}
              </option>
            );
          })}
        </select>

        <button type="button" onClick={onSubmit} className="btn btn-primary">
          Spend Funds
        </button>
      </div>
      <div className="form-group columnFlex">
        <label className="maringRight customLabel">Amount</label>
        <input
          type="email"
          className="form-control"
          value={amount}
          onChange={(e) => {
            handleAmount(e);
          }}
        />
      </div>

      {status || error ? (
        <div className="alertContainer">
          <div
            className={`alert ${
              error && error !== "" ? `alert-danger` : `alert-success`
            }`}
            role="alert">
            {error && error !== ""
              ? error
              : `${amount} spent from ${walletName}'s wallet`}
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default SpendFunds;
