import PropTypes from 'prop-types';
import { TextField } from "@mui/material";

const Form = ({ fields }) => {
    return (
        <>
            {fields.map((field, index) => (
                <TextField
                    key={index}
                    label={field.label}
                    className={`ms-3 mx-2 ${index !== 0 ? 'mt-3' : ''}`}
                    value={field.value}
                    onChange={field.onChange}
                />
            ))}
        </>
    );
}

Form.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            onChange: PropTypes.func.isRequired
        })
    ).isRequired
};

export default Form;