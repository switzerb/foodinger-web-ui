import React from 'react'
import {
    Container,
    Drawer
} from "@material-ui/core";
import 'react-sortable-tree/style.css';
import SortableTree from "react-sortable-tree";
import PlannerSortableTree from "./planner/PlannerSortableTree";
import {AddCircle, CallSplit, Close, DeleteForever, Launch, Lens} from "@material-ui/icons";
import Detail from "./Detail";
import planData from "./data/planData";
import Typography from "@material-ui/core/Typography";
import PlannerSection from "./PlannerSection";

const Planner = () => {
    const [state, setState] = React.useState({
        detail: true,
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
            <p>exapnd all / collapse all</p>
            <div style={{height: 400}}>
                <SortableTree
                    theme={PlannerSortableTree}
                    treeData={state.treeData}
                    onChange={treeData => setState({...state, treeData })}
                    generateNodeProps={row => getActions(row.node.type)}
                />
            </div>
            {/*<Typography variant="h5">Week of March 20</Typography>*/}
            {/*{*/}
            {/*    state.treeData.map(section => {*/}
            {/*        return (*/}
            {/*            <PlannerSection section={section} />*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}

            <Drawer
                anchor="right"
                open={state.detail}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
                style={{ width: "500px"}}
            >
                <Detail/>
            </Drawer>
        </Container>
    );
};

export default Planner;