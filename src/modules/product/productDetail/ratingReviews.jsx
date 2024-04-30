import { Grid, Stack, Rating } from "@mui/material";

const ratingReviews = ({ product }) => {

    return (
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                    Reviews: <Rating name="read-only" readOnly size='large' value={product.review} />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default ratingReviews;