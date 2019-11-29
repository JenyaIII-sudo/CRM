import React from "react";
import { Link } from "react-router-dom";

const About = props => {
  const info = props.data.filter(item => item.id === +props.match.params.id);
  console.log("INFO", info[0]);
  const { username, telephone, skype, email, about, file } = info[0];
  return (
    <div className="about">
      <div className="row">
        <div className="container">
          <div className="about-avatar col s12 m6 l4">
            <img className="avatar-image" src={file} />
          </div>
          <div className="items col s12 m6 l6">
            <ul className="collection z-depth-4">
              <li className="collection-header center">
                <h4>About</h4>
              </li>
              <li className="collection-item name">{username}</li>
              <li className="collection-item">
                <strong>Telephone:</strong> {telephone}
              </li>
              <li className="collection-item">
                <strong>E-mail:</strong> {email}
              </li>
              <li className="collection-item">
                <strong>Skype:</strong> {skype}
              </li>
              <li className="collection-item ">
                <textarea
                  className="textarea"
                  cols="30"
                  rows="10"
                  defaultValue={about}
                />
              </li>
            </ul>
            <Link to="/UserList">
              {" "}
              <a className="waves-effect waves-light btn center backuserlist">
                BACK
              </a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
