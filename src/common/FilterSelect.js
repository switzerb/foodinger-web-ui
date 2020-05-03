import React from "react";
import {Button, Checkbox, Menu, MenuItem} from "@material-ui/core";
import {ArrowDropDown} from "@material-ui/icons";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3)
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function FilterSelect({filter}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                variant="outlined"
                endIcon={<ArrowDropDown/>}
                onClick={handleToggle}
                className={classes.button}
            >
                {filter}
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem><Checkbox /> Choice One</MenuItem>
                                    <MenuItem><Checkbox /> Choice Two</MenuItem>
                                    <MenuItem><Checkbox /> Choice Three</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}