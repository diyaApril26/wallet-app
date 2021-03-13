import React from "react";
import transactions from '../transactions';

const AllTransactions = () => {
  return (
    <div className="scroll">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.Name}</td>
                <td>{data.Date}</td>
                <td>{data.Amount}</td>
                <td>{data.Balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransactions;
