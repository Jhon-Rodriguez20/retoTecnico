import Modal from '@mui/material/Modal';

function ModalExtended({ open, onClose, children }) {
  
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"        
      >
        {children}
      </Modal>
    </>
  );
}

export { ModalExtended }