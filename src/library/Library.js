import React from "react";
import {
    Button,
    Icon,
    Grid,
    Typography, InputLabel
} from "@material-ui/core";
import RecipeCard from "./RecipeCard";
import FilterSelect from "../common/FilterSelect";
import recipes from "../data/recipes";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },
    filters: {
        padding: theme.spacing(2),
        textAlign: 'center',
        border: "1px"
    }
}));

const filters = [
    "Recipe Labels",
    "Rating",
    "Yield",
    "Other Stuff"
];

const Library = () => {
    const classes = styles();
    return (
        <React.Fragment>
            <Typography variant="h2">Recipe Library</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.filters}>
                    { filters.map( filter => <FilterSelect filter={filter} />) }
                </Grid>
                    {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
            </Grid>
        </React.Fragment>
    )
};

export default Library;