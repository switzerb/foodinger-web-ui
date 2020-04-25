import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
        root: {
            fontSize: "2.5em",
            color: "black",
            margin: theme.spacing(3),
            paddingRight: theme.spacing(5)
        },
        F: {
            fontFamily: "Pacifico",
        }
    })
);

const Logo = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <span className={classes.F}>Foodinger</span>
        </div>);
};

export default Logo;