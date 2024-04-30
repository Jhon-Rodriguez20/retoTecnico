import Forms from '../../../components/forms/Forms';

const priceInputs = ({ minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange }) => {
    const fields = [
        { label: "Precio mínimo", value: minPrice, onChange: handleMinPriceChange },
        { label: "Precio máximo", value: maxPrice, onChange: handleMaxPriceChange }
    ];

    return <Forms fields={fields} />;
}

export default priceInputs;
