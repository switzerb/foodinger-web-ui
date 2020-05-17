import React from "react";
import clsx from "clsx";
import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Divider,
    List,
    ListItem,
    TextField,
    Toolbar,
    Drawer
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
    Assignment, ChevronLeft,
    EventNote,
    MenuBook,
    ShoppingCart
} from "@material-ui/icons";
import Logo from "./Logo";
import SelectPlan from "./planner/SelectPlan";
import SearchBar from "./library/SearchBar";
import WhiteboardDrawer from "./WhiteboardDrawer";

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

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const {pathname} = props.location;
    const [account, setAccount] = React.useState(null);

    const handleAccountOpen = event => {
      setAccount(event.currentTarget)
    };

    const handleAccountClose = () => {
      setAccount(null);
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
        <WhiteboardDrawer onClose={handleDrawerClose} open={open} width={drawerWidth}/>
    </React.Fragment>)
};

export default withRouter(AppHeader);