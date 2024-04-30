import { useState } from 'react';

const useProductState = () => {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    }

    const toggleFavorite = (productId) => {
        setFavorites(prevFavorites => prevFavorites.includes(productId) ?
            prevFavorites.filter(id => id !== productId) :
            [...prevFavorites, productId]
        );
    }

    return { open, selectedProduct, favorites, handleOpen, handleClose, toggleFavorite };
}

export default useProductState;