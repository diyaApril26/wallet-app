import React from "react";
import mockData from "../data";
const AllWallet = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Balance (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data, index) => {
            return (
              <tr>
                <td>{data.UserId}</td>
                <td>{data.Name}</td>
                <td>{data.Phone}</td>
                <td>{data.Balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllWallet;
