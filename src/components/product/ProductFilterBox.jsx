import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox,
    Rating, Stack, TextField, Card, 
    Typography} from '@mui/material';

function CategoryListItem({ value, selectedCategories, handleToggle }) {

    const labelId = `checkbox-list-label-${value}`;
    return (
        <ListItem key={value} disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={selectedCategories.includes(value)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
        </ListItem>
    );
}

function PriceInputs({ minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange }) {

    return (
        <form>
            <TextField label="Precio mínimo" className='ms-3 mx-2' value={minPrice} onChange={handleMinPriceChange} />
            <TextField label="Precio máximo" className='ms-3 mx-2 mt-3' value={maxPrice} onChange={handleMaxPriceChange} />
        </form>
    );
}

function RatingSection({ minRating, handleRatingChange }) {

    return (
        <List className='ms-3 mt-4 mb-4'>
            <Typography variant='h6'>Reviews</Typography>
            <Stack spacing={1}>
                <Rating
                    name="simple-controlled"
                    value={minRating}
                    size='large'
                    onChange={(event, newValue) => handleRatingChange(newValue)}
                />
            </Stack>
        </List>
    );
}

function ProductFilterBox({ onFilterChange }) {

    ProductFilterBox.propTypes = {
        onFilterChange: PropTypes.func.isRequired
    }

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

        if (selectedCategories.includes(value)) {
            newSelectedCategories = selectedCategories.filter((category) => category !== value);
        } else {
            if (value === 'Todos') {
                newSelectedCategories = ['Todos'];
            } else {
                if (selectedCategories.includes('Todos')) {
                    newSelectedCategories = [value];
                } else {
                    newSelectedCategories = [...selectedCategories, value];
                }
            }
        }

        if (newSelectedCategories.length > 1) {
            newSelectedCategories = ['Todos'];
        }
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

export { ProductFilterBox }