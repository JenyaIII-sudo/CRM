import React from "react";
import Modal from "react-modal";
import classes from "./Styles";

const ReactModal = ({ modal, handleCloseModal, item }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modal}
      contentLabel="Project"
      className="Modal"
      closeTimeoutMS={500}
    >
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="items col s12">
              <ul className="collection z-depth-4">
                <li className="collection-header center">
                  <h4 style={classes.modalContent}>About Project</h4>
                </li>
                <li className="collection-item ">
                  <textarea
                    className="textarea-project"
                    cols="80"
                    rows="20"
                    defaultValue={item.projectinfo}
                  />
                </li>
              </ul>
              <button
                className="col s12 center waves-effect waves-light btn"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReactModal;
