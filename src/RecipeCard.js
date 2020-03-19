import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    AddBox,
    Edit,
    Queue
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginLeft: 'auto'
    }
}));

const RecipeCard = ({recipe}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={recipe.img}
                    title={recipe.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {recipe.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button startIcon={<Edit/>}>Edit</Button>
                    <Button startIcon={<AddBox/>}>Plan</Button>
                    <Button startIcon={<Queue/>}>Plan Copy</Button>
            </CardActions>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Sat Mar 14</MenuItem>
                <MenuItem onClick={handleClose}>Sun Mar 15</MenuItem>
                <MenuItem onClick={handleClose}>Mon Mar 16</MenuItem>
                <MenuItem onClick={handleClose}>Tues Mar 17</MenuItem>
                <MenuItem onClick={handleClose}>Weds Mar 18</MenuItem>
                <MenuItem onClick={handleClose}>Thurs Mar 19</MenuItem>
                <MenuItem onClick={handleClose}>Fri Mar 20</MenuItem>
            </Menu>
        </Card>
    </Grid>)
};

export default RecipeCard;