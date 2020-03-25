import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'react-sortable-tree/style.css';
import PlannerSection from "./PlannerSection";
import planData from "./data/planData";

const Planner = () => {
    return (
        <Container>
            <Typography variant="h5">Week of March 20</Typography>
            {
                planData.map(section => {
                    return (
                        <PlannerSection section={section}/>
                    )
                })
            }
        </Container>
    );
}

export default Planner;