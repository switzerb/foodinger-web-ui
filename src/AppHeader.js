import React from 'react';
import {
    AppBar,
    Toolbar,
    Tabs,
    Tab
} from '@material-ui/core';
import Logo from "./Logo";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import EventNoteIcon from '@material-ui/icons/EventNote';

const AppHeader = () => {
    return <AppBar>
            <Toolbar>
                <Logo />
                <Tabs
                    value={"Library"}
                    indicatorColor="secondary"
                    textColor="white"
                    variant="fullWidth"
                >
                    <Tab icon={<MenuBookIcon />} label="Library" value="Library"/>
                    <Tab icon={<EventNoteIcon />} label="Planner" disabled />
                    <Tab icon={<ShoppingCartIcon />} label="Shopping" />
                    <Tab icon={<ListIcon />} label="Tasks" />
                </Tabs>
                <IconButton><AssignmentIcon /></IconButton>
                <IconButton><AccountCircle /></IconButton>
            </Toolbar>
        </AppBar>
};

export default AppHeader;