import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const buttonWantIt = ({ product }) => {
    return (
        <Typography className='d-flex justify-content-center mt-3'>
            <Button component={Link} to={`/product/${product.id}`} className='button-wantIt fs-6 fw-bold'>
                Comprar a crédito
            </Button>
        </Typography>
    );
};

export default buttonWantIt;
