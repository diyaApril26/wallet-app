import React from "react";

const NewWallet = () => {
  return (
    
    <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"  />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Amount (Rs)</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" /> 
    </div>
  </div>
</form>

  );
};

export default NewWallet;
