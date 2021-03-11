import React, { useState } from "react";
import mockData from "../data";

const AddFunds = () => {
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState(false);
  const [walletAmount, setWalletAmount] = useState({});
  const [amount, setAmount] = useState(null);

  const selectUser = (e) => {
    setUserId(e.target.value);
  };

  const getWalletInfo = () => {
    let objIndex = mockData.findIndex((obj) => obj.UserId === userId);
    setWalletAmount({...mockData[objIndex]})
    console.log(walletAmount)
  };

  const onSubmit = () => {
    let objIndex = mockData.findIndex((obj) => obj.UserId === userId);
    mockData[objIndex].Balance = walletAmount + amount;
    setStatus(true);
  };

  return (
    <form>
      <div className="form-group columnFlex">
        <label className="maringRight">User</label>
        <select
          className="form-control maringRight"
          id="userSelection"
          onChange={(e) => {
            selectUser(e);
            getWalletInfo();
            setStatus(false);
          }}>
          <option value="" selected disabled>
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

        <button type="button" onClick={onSubmit} class="btn btn-primary">
          Add Funds
        </button>
      </div>
      <div class="form-group columnFlex">
        <label className="maringRight">User</label>
        <input
          type="email"
          class="form-control"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      {status ? (
        <div className="alertContainer">
          <div class="alert alert-success" role="alert">
            Added
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default AddFunds;
