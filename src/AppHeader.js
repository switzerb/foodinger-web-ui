import React from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    withStyles,
    makeStyles
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

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    title: {
        flexGrow: 1,
    }
}));

const AppHeader = () => {
    const classes = styles();

    return <AppBar className={classes.root}>
            <Toolbar>
                <Logo />
                <Typography className={classes.title}>
                    Foodinger
                </Typography>
                <Tabs
                    value={"library"}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab icon={<MenuBookIcon />}     component={Link} to="library"  label="Library"   value="library" />
                    <Tab icon={<EventNoteIcon />}    component={Link} to="planner"  label="Planner"   value="planner"/>
                    <Tab icon={<ShoppingCartIcon />} component={Link} to="shopping" label="Shopping"  value="shopping"/>
                    <Tab icon={<ListIcon />}         component={Link} to="tasks"    label="Tasks"     value="Tasks"/>
                </Tabs>
                <IconButton><AssignmentIcon /></IconButton>
                <IconButton><AccountCircle /></IconButton>
            </Toolbar>
        </AppBar>
};

export default withRouter(AppHeader);