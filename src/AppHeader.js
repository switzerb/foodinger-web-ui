import React from "react";
import {
    AppBar,
    Card,
    IconButton,
    Menu,
    MenuItem,
    Select,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tabs,
    Tab,
    TextField,
    Toolbar,
    Typography, Drawer, Container
} from "@material-ui/core";
import {
    makeStyles, useTheme
} from "@material-ui/core/styles"
import {
    Link,
    withRouter
} from "react-router-dom";
import {
    AccountCircle,
    Assignment, ChevronLeft,
    EventNote,
    List as ListIcon,
    MenuBook,
    ShoppingCart,
    Menu as MenuIcon
} from "@material-ui/icons";
import Logo from "./Logo";
import planners from "./data/planners";
import InputLabel from "@material-ui/core/InputLabel";
import SelectPlan from "./planner/SelectPlan";
import clsx from "clsx";
import SearchBar from "./library/SearchBar";

const drawerWidth = 440;

const styles = makeStyles(theme => ({
    toolbar: {
      display: "flex"
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#fff",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
}));

const AppHeader = (props) => {
    const classes = styles();
    const [open, setOpen] = React.useState(false);

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

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
    <React.Fragment>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar)}
        >
            <Toolbar className={classes.toolbar}>
                <Logo />
                <Divider orientation="vertical" flexItem />
                <SearchBar />
                <IconButton component={Link} to="library" value="library" ><MenuBook /></IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton  component={Link} to="planner" value="planner"><EventNote /></IconButton>
                <SelectPlan />
                <IconButton component={Link} to="shopping" value="shopping"><ShoppingCart /></IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton onClick={handleDrawerOpen}><Assignment /></IconButton>
                <IconButton onClick={handleAccountOpen}><AccountCircle /></IconButton>
            </Toolbar>
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
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {<ChevronLeft />}
                </IconButton>
            </div>
            <List
                id="whiteboard"
            >
                <ListItem>Napalm</ListItem>
                <ListItem>WD40 and LightBulbs</ListItem>
                <ListItem>Milk</ListItem>
                <ListItem>Peanut Butter</ListItem>
                <ListItem>Chai Tea</ListItem>
                <TextField label="Add to Board" variant="outlined" />
                <ListItem><Link to="/nowhere">Go to Whiteboard --></Link></ListItem>
            </List>
            <Tabs
                orientation="vertical"
                className={classes.title}
                value={pathname.substring(1)}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab icon={<ListIcon />}         component={Link} to="tasks"    label="Tasks"     value="tasks"/>
            </Tabs>
        </Drawer>
    </React.Fragment>)
};

export default withRouter(AppHeader);