import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    TreeView,
    TreeItem
} from "@material-ui/lab";
import {
    Box,
    ButtonGroup,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Typography
} from "@material-ui/core";
import {
    DragIndicator,
    ExpandMore,
    ChevronRight,
    CallSplit,
    Close,
    Launch,
    Lens
} from "@material-ui/icons";

const useStyles = makeStyles( theme => ({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
}));

const PlannerRecipeItem = ({labelText, type, ...props}) => {
    const classes = useStyles();
    return (
        <TreeItem
        label={
            <div>
                <div className={classes.labelRoot}>
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    { type === "recipe" ? <RecipeActions /> : <PantryActions /> }
                </div>
            </div>
        }
        {...props}
        />);
};


const RecipeActions = () => (
    <Box>
        <IconButton><Launch/></IconButton>
        <IconButton><CallSplit/></IconButton>
        <IconButton><Lens/></IconButton>
        <IconButton><Close/></IconButton>
    </Box>
);

const PantryActions = () => (
    <ButtonGroup>
        <IconButton><Lens/></IconButton>
        <IconButton><Close/></IconButton>
    </ButtonGroup>
);

const PlannerSectionItem = ({item}) => {

    const renderTree = nodes => {
        return (
            <PlannerRecipeItem nodeId={nodes.id} labelText={nodes.name} type={nodes.type}>
                {Array.isArray(nodes.items) ? nodes.items.map(node => renderTree(node)) : null}
            </PlannerRecipeItem>)
    };

    return (
        <TreeView
            defaultCollapseIcon={<ExpandMore/>}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRight/>}
        >
            {renderTree(item)}
        </TreeView>
    );

//    return (
    // <List>
    //     <ListItem>
    //         <ListItemIcon>
    //             <BtnDrag/>
    //             <IconButton>
    //                 <ExpandMore/>
    //             </IconButton>
    //         </ListItemIcon>
    //         <ListItemText primary={item.name}/>
    //         <ListItemSecondaryAction>
    //             <IconButton>
    //                 <Close/>
    //             </IconButton>
    //             <IconButton>
    //                 <CallSplit/>
    //             </IconButton>
    //             <IconButton>
    //                 <Launch/>
    //             </IconButton>
    //             {/* Add a color toggle like gmail so we can cycle through status indicators*/}
    //             <IconButton>
    //                 <Lens color="secondary"/>
    //             </IconButton>
    //         </ListItemSecondaryAction>
    //     </ListItem>
    //     {item.items && item.items.length > 0 ? drawItems(item.items) : ""}
    // </List>
    //   )
};

export default PlannerSectionItem;