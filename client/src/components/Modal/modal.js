import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalHeader from 'react-bootstrap/ModalHeader';
import LoginUser from '../Login/login';

function LoginModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby='contained-modal-title-vcenter'
      centered
      size="md"
    >
      <ModalHeader className='modal-header' closeButton='true'>
        <ModalTitle bsPrefix='modal-title' id='contained-modal-title-vcenter'>
          Log In
        </ModalTitle>
      </ModalHeader>
      <ModalBody className='my-body'>
        <LoginUser />
      </ModalBody>
    </Modal>
  );
}

export default LoginModal;
