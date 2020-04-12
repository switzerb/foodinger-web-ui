import React from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles'
import {
    Link,
    useParams,
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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    title: {
        flexGrow: 1,
    }
}));

const AppHeader = (props) => {
    const classes = styles();
    const {pathname} = props.location;
    const [whiteboard, setWhiteBoard] = React.useState(null);
    const [account, setAccount] = React.useState(null);

    const handleWBOpen = event => {
        setWhiteBoard(event.currentTarget);
    };

    const handleWBClose = () => {
        setWhiteBoard(null);
    };

    const handleAccountOpen = event => {
      setAccount(event.currentTarget)
    };

    const handleAccountClose = () => {
      setAccount(null);
    };

    return <AppBar className={classes.root}>
            <Toolbar>
                <Logo />
                <Typography className={classes.title} color="textPrimary">
                    Foodinger
                </Typography>
                <Tabs
                    value={pathname.substring(1)}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab icon={<MenuBookIcon />}     component={Link} to="library"  label="Library"   value="library" />
                    <Tab icon={<EventNoteIcon />}    component={Link} to="planner"  label="Planner"   value="planner"/>
                    <Tab icon={<ShoppingCartIcon />} component={Link} to="shopping" label="Shopping"  value="shopping"/>
                    <Tab icon={<ListIcon />}         component={Link} to="tasks"    label="Tasks"     value="tasks"/>
                </Tabs>
                <IconButton onClick={handleWBOpen}><AssignmentIcon /></IconButton>
                <IconButton onClick={handleAccountOpen}><AccountCircle /></IconButton>
            </Toolbar>
        <Menu
            id="whiteboard"
            anchorEl={whiteboard}
            keepMounted
            open={Boolean(whiteboard)}
            onClose={handleWBClose}
        >
            <MenuItem onClick={handleWBClose}>Napalm</MenuItem>
            <MenuItem onClick={handleWBClose}>WD40 and LightBulbs</MenuItem>
            <MenuItem onClick={handleWBClose}>Milk</MenuItem>
            <MenuItem onClick={handleWBClose}>Peanut Butter</MenuItem>
            <MenuItem onClick={handleWBClose}>Chai Tea</MenuItem>
            <TextField label="Add to Board" variant="outlined" />
            <MenuItem><Link to="/nowhere">Go to Whiteboard --></Link></MenuItem>
        </Menu>
        <Menu
            id="account"
            anchorEl={account}
            keepMounted
            open={Boolean(account)}
            onClose={handleAccountClose}
        >
            <MenuItem onClick={handleAccountClose}>Logout</MenuItem>
            <MenuItem onClick={handleAccountClose}>Profile</MenuItem>
            <MenuItem onClick={handleAccountClose}>Preferences</MenuItem>
        </Menu>

    </AppBar>
};

export default withRouter(AppHeader);