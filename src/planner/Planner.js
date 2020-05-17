import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Drawer,
    Fab
} from "@material-ui/core";
import 'react-sortable-tree/style.css';
import SortableTree from "react-sortable-tree";
import PlannerSortableTree from "./PlannerSortableTree";
import {
    Add,
    AddCircle,
    CallSplit,
    Close,
    DeleteForever,
    Kitchen,
    Launch,
    Lens
} from "@material-ui/icons";
import Detail from "../Detail";
import planData from "../data/planData";

// TODO: Add tooltip to the status icon
// TODO: Get drag and drop working on the current site
// TODO: Click through the status icons

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Planner = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        detail: false,
        treeData: planData
    });

    const toggleDrawer = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, detail: !state.detail });
    };

    const getActions = (type) => {
        switch(type) {
            case "section":
                return {
                    buttons: [
                        <AddCircle onClick={console.log}/>,
                        <DeleteForever onClick={console.log}/>
                    ]
                };
            case "recipe":
                return {
                    buttons: [
                        <CallSplit onClick={console.log}/>,
                        <Launch onClick={toggleDrawer()}/>,
                        <Close onClick={console.log} />,
                        <Lens onClick={console.log}/>,
                        <Kitchen onClick={console.log} />
                    ]

                };
            case "pantry":
                return {
                    buttons: [
                        <Close onClick={console.log} />,
                        <Lens onClick={console.log}/>,
                    ]

                };
            default:
                return { buttons: [] }
        }
    }



    return (
        <Container>
            <p>expand all / collapse all</p>
            <p>Add from library</p>
            <div style={{height: 400}}>
                <SortableTree
                    theme={PlannerSortableTree}
                    treeData={state.treeData}
                    onChange={treeData => setState({...state, treeData })}
                    generateNodeProps={row => getActions(row.node.type)}
                />
            </div>
            <Drawer
                anchor="right"
                open={state.detail}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
                style={{ width: "500px"}}
            >
                <Detail/>
            </Drawer>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <Add />
            </Fab>
        </Container>
    );
};

export default Planner;