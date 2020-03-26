import React from "react";
import {
    Container,
    Typography,
    TextField
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "500px",
        padding: theme.spacing(2,3),
        margin: theme.spacing(2,0)
    },
}));

const Detail = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h5">Tacos Al Pastor</Typography>
            <TextField
                id="title"
                label="Recipe Title"
                fullWidth
            />
            <TextField
                id="url"
                label="Source URL"
                fullWidth
            />
            <TextField
                id="description"
                label="Description"
                fullWidth
            />
            <p>Labels</p>
        </Container>)
};

export default Detail;