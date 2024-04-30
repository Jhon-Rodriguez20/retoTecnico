const isProductFiltered = (product, filters) => {
    return (filters.category !== 'Todos' && product.category !== filters.category) ||
        (filters.minPrice !== '' && filters.maxPrice !== '' &&
            (parseInt(product.price) < parseInt(filters.minPrice) || parseInt(product.price) > parseInt(filters.maxPrice))) ||
        (filters.minRating !== 0 && product.review !== filters.minRating) ? false : true;
}

export default isProductFiltered;