import { TableCell, TableRow } from "@mui/material";

function productDetailRow({ label, value }) {
    return (
        <TableRow>
            <TableCell className='fw-semibold' component="th" scope="row">{label}</TableCell>
            <TableCell>{value}</TableCell>
        </TableRow>
    );
}

export default productDetailRow;