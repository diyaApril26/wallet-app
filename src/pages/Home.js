import React, { useState } from "react";
import "./style.css";
import menuItems from "../menuItems";
import AddFunds from "./AddFunds";
import CheckBalance from "./CheckBalance";
import AllTransactions from "./AllTransactions";
import NewWallet from "./NewWallet";
import SpendFunds from "./SpendFunds";
import AllWallets from "./AllWallets";

const Home = () => {
  const [screen, setScreen] = useState("All Wallets");

  const menuRender = () => {
    switch (screen) {
      case "All Wallets":
        return <AllWallets />;
      case "New Wallet":
        return <NewWallet />;
      case "Check Balance":
        return <CheckBalance />;
      case "Add Funds":
        return <AddFunds />;
      case "Spend Funds":
        return <SpendFunds />;
      case "All Transactions":
        return <AllTransactions />;
      default:
        return null;
    }
  };

  return (
    <div className="container ">
      <h3 className="title customTitle">Personal Wallet UI</h3>
      <div className="row">
        <div className="col-md-2 padding0">
          <ul className="padding0 margin15">
            {menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setScreen(item);
                  }}
                  className={`list-group-item menuItem ${
                    screen === item ? `activeMenuItem` : ``
                  }`}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-10  contentArea">{menuRender()}</div>
      </div>
    </div>
  );
};

export default Home;
