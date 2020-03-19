import React from "react";
import {
    Paper,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PlannerSectionItem from "./PlannerSectionItem";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2,3),
        margin: theme.spacing(2,0)
    },
}));

// collapsable HOC
// draggable HOC

const PlannerSection = ({section}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography variant="h6">{section.name}</Typography>
            { section.items.map(item => <PlannerSectionItem item={item}/>) }
        </Paper>)
};

export default PlannerSection;