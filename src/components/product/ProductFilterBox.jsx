import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Card, Typography} from '@mui/material';
import CategoryListItem from '../../modules/product/productFilterBox/categoryListItem';
import PriceInputs from '../../modules/product/productFilterBox/priceInputs';
import RatingSection from '../../modules/product/productFilterBox/ratingSection';

function ProductFilterBox({ onFilterChange }) {

    const [selectedCategories, setSelectedCategories] = useState(['Todos']);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minRating, setMinRating] = useState(0); 

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    }

    useEffect(() => {
        onFilterChange({
            category: 'Todos',
            minPrice: minPrice,
            maxPrice: maxPrice,
            minRating: minRating
        });
    }, [minPrice, maxPrice, minRating]);

    const handleToggle = (value) => () => {
        let newSelectedCategories = [];
        newSelectedCategories = selectedCategories.includes(value) ? selectedCategories.filter((category) => category !== value) :
                            (value === 'Todos' ? ['Todos'] : (selectedCategories.includes('Todos') ? [value] : [...selectedCategories, value]));
    
        newSelectedCategories = newSelectedCategories.length > 1 ? ['Todos'] : newSelectedCategories;
    
        setSelectedCategories(newSelectedCategories);
    
        const category = newSelectedCategories.includes('Todos') ? 'Todos' : newSelectedCategories[0];
        onFilterChange({
            category: category,
            minPrice: minPrice,
            maxPrice: maxPrice,
            minRating: minRating
        });
    }    

    return (
        <Card className='mt-1 mb-3 mx-3 box-filter-products' sx={{minWidth: 250, maxWidth: 250}}>            
            <List sx={{ bgcolor: 'background.paper' }}>
                <Typography variant='h6' className='ms-2'>Categorías y Precios</Typography>                
                {['Todos', 'Celulares', 'Televisores'].map((value) => (
                    <CategoryListItem
                        key={value}
                        value={value}
                        selectedCategories={selectedCategories}
                        handleToggle={handleToggle}
                    />
                ))}
            </List>
            <PriceInputs
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={handleMinPriceChange}
                handleMaxPriceChange={handleMaxPriceChange}
            />
            <RatingSection
                minRating={minRating}
                handleRatingChange={setMinRating}
            />
        </Card>
    );
}

ProductFilterBox.propTypes = { onFilterChange: PropTypes.func.isRequired }

export { ProductFilterBox }