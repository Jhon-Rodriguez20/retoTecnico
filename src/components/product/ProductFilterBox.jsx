import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';

function ProductFilterBox({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState(['Todos']);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0); 

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

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
  };

  return (
    <Card className='mt-1 mb-3 mx-3 box-filter-products' sx={{minWidth: 250, maxWidth: 250}}>
      <h6 className='ms-3 mt-4'>Categorías y Precios</h6>
      <List sx={{ bgcolor: 'background.paper' }}>
        {['Todos', 'Celulares', 'Televisores'].map((value) => {
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
        })}
      </List>
      <div className='d-flex justify-content-between mt-3'>
        <form>
          <TextField label="Precio mínimo" className='ms-3 mx-2' value={minPrice} onChange={handleMinPriceChange} />
          <TextField label="Precio máximo" className='ms-3 mx-2 mt-3' value={maxPrice} onChange={handleMaxPriceChange} />
        </form>
      </div>
      <div className='ms-3 mt-4 mb-4'>
        <h6>Reviews</h6>
        <Stack spacing={1}>
          <Rating
            name="simple-controlled"
            value={minRating}
            size='large'
            onChange={(event, newValue) => {
              setMinRating(newValue);
            }}
          />
        </Stack>
      </div>
    </Card>
  );
}

export { ProductFilterBox };
