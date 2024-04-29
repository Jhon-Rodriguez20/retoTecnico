import { Modal, Box } from '@mui/material';
import PropTypes from 'prop-types';

function ModalExtended({ open, onClose, children }) {

    ModalExtended.propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    }

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