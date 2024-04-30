import { Rating, Stack } from "@mui/material";

const tableData = (product) => {
    const isCellPhone = product.category === 'Celulares';
    const origin = isCellPhone ? "China" : "Korea del Norte";
    const screen = isCellPhone ? '1280x720 píxeles' : '3840x2160 píxeles';
    const weight = isCellPhone ? '2.5 gr' : '25 kg';

    const rowsTable = [
        { label: "Nombre", value: product.name },
        { label: "Precio", value: `$${product.price} COP` },
        { label: "Descripción", value: product.description },
        { label: "Categoría", value: product.category },
        { label: "Reviews", value: <Stack spacing={1}><Rating name="read-only size-small" readOnly size='small' value={product.review} /></Stack> },
        { label: "Origen", value: origin },
        { label: "Tamaño de pantalla", value: screen },
        { label: "Peso", value: weight },
    ];

    return rowsTable;
}

export default tableData;
