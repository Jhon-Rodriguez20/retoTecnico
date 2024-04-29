import { Modal, Box } from '@mui/material';

function ModalExtended({ open, onClose, children }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
            }}
        >
            <Box sx={{ width: '90%', maxWidth: '1000px' }}>
                {children}
            </Box>
        </Modal>
    );
}

export { ModalExtended }