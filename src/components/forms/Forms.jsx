import PropTypes from 'prop-types';
import { TextField, InputAdornment } from "@mui/material";

const Form = ({ fields }) => {
    return (
        <>
            {fields.map((field, index) => (
                <TextField
                    key={index}
                    label={field.label}                    
                    style={field.style}                    
                    value={field.value}
                    onChange={field.onChange}
                    className={`ms-3 mx-auto ${index !== 0 ? 'mt-3' : ''}`}
                    variant="standard"
                    InputProps={field.icon && {
                        endAdornment: (
                            <InputAdornment position="end">
                                {field.icon}
                            </InputAdornment>
                        )
                    }}
                />
            ))}
        </>
    );
}

Form.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string,
            onChange: PropTypes.func,
            style: PropTypes.object,
            icon: PropTypes.element,
        })
    ).isRequired
};

export default Form;