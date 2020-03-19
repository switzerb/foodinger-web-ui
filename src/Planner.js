import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import PlannerSection from "./PlannerSection"
import PlannerSectionItem from "./PlannerSectionItem";
import data from "./data/planner";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    section: {
        padding: theme.spacing(1),
    },
}));

class Planner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            treeData: [
                {title: 'Chicken', children: [{title: 'Egg'}]},
                {title: 'Fish', children: [{title: 'fingerline'}]}
            ],
        };
    }

    render() {
        return (
            <Container>
                <Typography variant="h5">Week of March 20</Typography>
                {
                    data.map(section => {
                        return (
                            <PlannerSection section={section} />
                        )
                    })
                }
            </Container>
        );
    }
}

export default Planner;