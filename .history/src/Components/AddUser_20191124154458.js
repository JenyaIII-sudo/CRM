import React from "react";

const AddUser = () => {
  return (
    <div className="container">
      <form className="col s6">
        <div className="row">
          <div className="input-field col s12">
            <input type="text" className="validate" />
            <label for="icon_prefix">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="tel" className="validate" />
            <label for="icon_telephone">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="tel" className="validate" />
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="tel" className="validate" />
            <label for="icon_telephone">Skype</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input ype="tel" className="validate" />
            <label for="icon_telephone">E-mail</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
