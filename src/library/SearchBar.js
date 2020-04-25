import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    FormControl,
    TextField,
    IconButton
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
    Search
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: "auto",
    },
    search: {
        margin: theme.spacing(3),
        flexGrow: 1
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <FormControl className={classes.search}>
        <TextField
            fullWidth
            placeholder="Search Recipe Library"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}/>
        </FormControl>
    );
};

export default SearchBar;
