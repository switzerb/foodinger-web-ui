import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
        root: {
            fontSize: "3em",
            color: "black",
            fontWeight: "bold",
            width: "90px"
        },
        F: {
            transform: "scaleX(-1)",
            display: "inline-block",
            color: "rgba(0,0,0,.4)"
        }
    })
);

const Logo = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <span className={classes.F}>F</span>
            <span>F</span>
        </div>);
};

export default Logo;