import React, { useState } from "react";
import mockData from "../data";

const CheckBalance = () => {
  const [balance, setBalance] = useState(null);
  const [showBalance, setShowBalance] = useState(false);

  const selectUser = (e) => {
    setBalance(e.target.value);
  };

  const onSubmit = () => {
    setShowBalance(true);
  };

  return (
    <form>
      <div class="form-group columnFlex">
        <label className="maringRight">User</label>
        <select
          class="form-control maringRight"
          id="userSelection"
          onChange={(e) => {
            selectUser(e);
            setShowBalance(false);
          }}>
          <option value="" selected disabled>
            Select user
          </option>
          ;
          {mockData.map((data) => {
            return <option value={data.Balance}>{data.Name}</option>;
          })}
        </select>

        <button type="button" onClick={onSubmit} class="btn btn-primary">
          Check Balance
        </button>
      </div>

      {showBalance && balance!==""? (
        <div className="alertContainer">
          <div class="alert alert-success" role="alert">
            {balance}
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default CheckBalance;
