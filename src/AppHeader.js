import React from 'react';
import {
    AppBar,
    Toolbar,
    Tabs,
    Tab
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles'
import {
    Link,
    withRouter
} from 'react-router-dom';
import Logo from "./Logo";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Library from "./Library";

const BrandedAppBar = withStyles({
    root: {
        backgroundColor: '#fff',
    },
})(AppBar);

const AppHeader = () => {
    return <BrandedAppBar>
            <Toolbar>
                <Logo />
                <Tabs
                    value={"Library"}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Link to="/library"><Tab icon={<MenuBookIcon />} label="Library" value="Library" /></Link>
                    <Tab icon={<EventNoteIcon />} label="Planner" value="Planner"/>
                    <Tab icon={<ShoppingCartIcon />} label="Shopping" value="Shopping"/>
                    <Tab icon={<ListIcon />} label="Tasks" value="Tasks"/>
                </Tabs>
                <IconButton><AssignmentIcon /></IconButton>
                <IconButton><AccountCircle /></IconButton>
            </Toolbar>
        </BrandedAppBar>
};

export default withRouter(AppHeader);