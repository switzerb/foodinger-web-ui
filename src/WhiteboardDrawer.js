import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    TextField,
    Typography
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";

const WhiteboardDrawer = ({open, onClose, width}) => {
    const styles = makeStyles( theme => ({
        drawerHeader: {
            marginTop: '80px'
        },
        drawerContainer: {
            overflow: 'auto',
        },
        drawer: {
            width: width,
            flexShrink: 0,
        },
        drawerPaper: {
            width: width,
        },
    }));

    const classes = styles();

    return (
        <Drawer
            className={classes.root}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={onClose}>
                    {<Close />}
                </IconButton>
            </div>
            <Typography>Whiteboard</Typography>
            <List
                id="whiteboard"
            >
                <ListItem>Napalm</ListItem>
                <ListItem>WD40 and LightBulbs</ListItem>
                <ListItem>Milk</ListItem>
                <ListItem>Peanut Butter</ListItem>
                <ListItem>Chai Tea</ListItem>
                <TextField label="Add to Board" variant="outlined" />
                <ListItem><Link to="/tasks">Go to Whiteboard --></Link></ListItem>
            </List>
        </Drawer>
    )
}

export default WhiteboardDrawer;