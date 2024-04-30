import { List, Typography, Stack, Rating } from "@mui/material";

const ratingSection = ({ minRating, handleRatingChange }) => {

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

export default ratingSection;