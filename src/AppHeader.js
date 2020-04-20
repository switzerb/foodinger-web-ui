import React from "react";
import {
    AppBar,
    Card,
    IconButton,
    Menu,
    MenuItem,
    Select,
    Tabs,
    Tab,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    makeStyles
} from "@material-ui/core/styles"
import {
    Link,
    withRouter
} from "react-router-dom";
import {
    AccountCircle,
    Assignment,
    EventNote,
    List,
    MenuBook,
    ShoppingCart,
} from "@material-ui/icons";
import Logo from "./Logo";
import planners from "./data/planners";
import InputLabel from "@material-ui/core/InputLabel";
import SelectPlan from "./planner/SelectPlan";

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#fff"
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
                    <Tab icon={<MenuBook />}     component={Link} to="library"  label="Library"   value="library" />
                    <Tab icon={<EventNote />}    component={Link} to="planner"  label="Planner"   value="planner"/>
                    <Tab icon={<ShoppingCart />} component={Link} to="shopping" label="Shopping"  value="shopping"/>
                    <Tab icon={<List />}         component={Link} to="tasks"    label="Tasks"     value="tasks"/>
                    <Tab component={SelectPlan} />
                </Tabs>
                <IconButton onClick={handleWBOpen}><Assignment /></IconButton>
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