import React from "react";
import {Container} from "@material-ui/core";
import AppHeader from "./AppHeader";
import {
    Switch,
    Route
} from "react-router-dom";
import Library from "./Library";
import Planner from "./Planner";
import ShoppingList from "./ShoppingList";
import Tasks from "./Tasks";



function App() {
    return (
        <Container maxWidth="lg">
            <AppHeader/>
            <div className="App">
                <Switch>
                    <Route path="/library"><Library/></Route>
                    <Route path="/planner"><Planner/></Route>
                    <Route path="/shopping"><ShoppingList/></Route>
                    <Route path="/tasks"><Tasks/></Route>
                </Switch>
            </div>
        </Container>
    );
}

export default App;
