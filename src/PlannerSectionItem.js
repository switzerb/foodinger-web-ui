import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {
    DragIndicator,
    ExpandMore,
    CallSplit,
    Close,
    Launch,
    Lens
} from "@material-ui/icons"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const drawItems = (items) => {
    return items.map( item => <PlannerSectionItem item={item} />)
};

const PlannerSectionItem = ({item}) => {
    return (
        <Box m={1}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <IconButton>
                            <DragIndicator />
                        </IconButton>
                        <IconButton>
                            <ExpandMore />
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText
                        primary={item.name}
                    />
                    <ListItemSecondaryAction>
                        <IconButton>
                            <Close />
                        </IconButton>
                        <IconButton>
                            <CallSplit />
                        </IconButton>
                        <IconButton>
                            <Launch />
                        </IconButton>
                        {/* Add a color toggle like gmail so we can cycle through status indicators*/}
                        <IconButton>
                            <Lens color="secondary" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                {item.items && item.items.length > 0 ? drawItems(item.items) : ""}
            </List>
        </Box>)
};

export default PlannerSectionItem;