import React from "react";
import Grid from '@material-ui/core/Grid';
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const recipes = [
    {
        title: "Tacos Al Pastor"
    },
    {
        title: "Pancakes"
    },
    {
        title: "Chicken Francese"
    },
    {
        title: "Chicken Enchiladas"
    },
    {
        title: "Crepes"
    }
];

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