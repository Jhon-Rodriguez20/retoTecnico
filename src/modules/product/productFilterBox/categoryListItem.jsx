import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";

const categoryListItem = ({ value, selectedCategories, handleToggle }) => {
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

export default categoryListItem;