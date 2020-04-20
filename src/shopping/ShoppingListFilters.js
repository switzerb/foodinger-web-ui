import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Checkbox,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import planners from "../data/planners";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    select: {},
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ShoppingListFilters = () => {
    const classes = useStyles();

    const [plannerName, setPlannerName] = React.useState([]);

    const handleChange = event => {
        setPlannerName(event.target.value);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="planners-select">Planners</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="planners-select"
                        value={plannerName}
                        onChange={handleChange}
                        input={<Input/>}
                    >
                        {planners.map(plan => (
                            <MenuItem key={plan} value={plan}>
                                <Checkbox
                                    edge="start"
                                    checked={false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                {plan}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="planners-select">Tasks</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="planners-select"
                        value={plannerName}
                        onChange={handleChange}
                        input={<Input/>}
                    >
                        {planners.map(plan => (
                            <MenuItem key={plan} value={plan}>
                                <Checkbox
                                    edge="start"
                                    checked={false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                {plan}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default ShoppingListFilters;