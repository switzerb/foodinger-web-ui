import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from '@material-ui/core/Grid';
import {Search} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: "auto",
    },
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            label="Find a recipe"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}/>
    );
};

export default SearchBar;
