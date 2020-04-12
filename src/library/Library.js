import React from "react";
import Grid from '@material-ui/core/Grid';
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import recipes from "../data/recipes";

const Library = () => {
    return <React.Fragment>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SearchBar/>
            </Grid>
            { recipes.map( recipe => <RecipeCard recipe={recipe} /> ) }
        </Grid>
    </React.Fragment>
};

export default Library;