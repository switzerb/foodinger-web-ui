import React from "react";
import Grid from '@material-ui/core/Grid';
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const recipes = [
    {
        name: "Tacos Al Pastor",
        img: "https://static01.nyt.com/images/2019/06/05/dining/04Camararex2/merlin_155267136_8a0323b8-1d07-4f62-ae0b-f6dbc82d33c6-articleLarge.jpg"
    },
    {
        name: "Pancakes",
        img: "https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg"
    },
    {
        name: "Chicken Francese",
        img: "https://static01.nyt.com/images/2018/12/28/dining/as-chicken-piccata/as-chicken-piccata-articleLarge-v2.jpg"
    },
    {
        name: "Chicken Enchiladas",
        img: "https://static01.nyt.com/images/2017/04/06/dining/06COOKING-ENCHILADAS1/06COOKING-ENCHILADAS1-articleLarge.jpg"
    },
    {
        name: "Crepes",
        img: "https://static01.nyt.com/images/2016/05/28/dining/28COOKING-CREPES2/28COOKING-CREPES2-articleLarge.jpg"
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