import React from 'react';
import {Container} from '@material-ui/core'
import AppHeader from "./AppHeader";
import {
    Switch,
    Route
} from 'react-router-dom';
import Library from "./Library";

function App() {
    return (
        <Container maxWidth="lg">
            <AppHeader/>
            <div className="App">
                <Switch>
                    <Route path="/library">
                        <Library/>
                    </Route>
                </Switch>
            </div>
        </Container>
    );
}

export default App;
