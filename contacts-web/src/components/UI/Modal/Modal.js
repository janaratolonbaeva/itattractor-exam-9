import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";

const Modal = props => {
  return (
    <>
      <Backdrop show={props.show} onClick={props.closed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        <div className="Modal-close">
          <Button>
            <CloseIcon onClick={props.closed}/>
          </Button>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Modal;