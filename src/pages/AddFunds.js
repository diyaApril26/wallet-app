import React, { useState } from "react";
import mockData from "../data";
import transactions from '../transactions';
import moment from 'moment';

const AddFunds = () => {
  const [userId, setUserId] = useState("");
  const [walletName, setWalletName] = useState("");
  const [status, setStatus] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");


  const selectUser = (e) => {
    setUserId(e.target.value);
    setError('');
  };

  const handleAmount = (event) => {
    const re = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAmount(event.target.value);
    }
    setStatus(false);
    setError('');
  };

  const _validator = () => {
    if (!userId) {
      setError("Please select a wallet");
    } else if (!amount) {
      setError("Plese enter a valid amount");
    } else setError("");
  };

  const onSubmit = () => {
    _validator();
    if (userId && amount) {
      let objIndex = mockData.findIndex((obj) => obj.UserId === userId);
      let obj = mockData[objIndex];
      setWalletName(obj.Name);
      obj.Balance = parseFloat(obj.Balance) + parseFloat(amount);
      setStatus(true);
      transactions.push({
        Name: obj.Name,
        Date: moment().format('DD MMM, h:mm a'),
        Amount: "+"+amount,
        Balance: obj.Balance,
      });
    }
  };

  return (
    <form>
      <div className="form-group columnFlex">
        <label className="maringRight customLabel">User</label>
        <select
          className="form-control maringRight "
          defaultValue="Select user"
          id="userSelection"
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
          Add Funds
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

      {(status||error) ? (
        <div className="alertContainer">
           <div
              className={`alert ${
                error && error !== "" ? `alert-danger` : `alert-success`
              }`}
              role="alert">
              {error && error !== "" ? error : `${amount} added to ${walletName}`}
            </div>
        </div>
      ) : null}
    </form>
  );
};

export default AddFunds;
