import React from "react";

const AddUser = () => {
  return (
    <div className="col">
      <form className="col s12">
        <div className="col">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label for="icon_prefix">First Name</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
