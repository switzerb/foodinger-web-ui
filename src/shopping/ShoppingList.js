import React from 'react';
import {
    Checkbox,
    Input,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    Typography
} from "@material-ui/core";
import {
    Delete,
    DragIndicator
} from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ShoppingListFilters from "./ShoppingListFilters";

const items = [
    "whole milk",
    "half and half",
    "tomatoes",
    "apples",
    "potatoes"
];

const planners = [
  "Week of March 1",
  "Week od March 8",
  "Passover",
  "Birthday Dinner"
];

const tasklists = [
  "Garden",
  "Studio Revamp",
  "Other Thing"
];

// TODO: Snackbar
// TODO: Detail modal for where it comes from
// TODO: filters are at the top for plan and task lists to be visible

const ShoppingListItem = ({item, idx}) => {

  return (
      <ListItem>
          <ListItemIcon>
              <DragIndicator />
          </ListItemIcon>
          <ListItemIcon>
              <Checkbox
                  edge="start"
                  checked={false}
                  tabIndex={-1}
                  disableRipple
              />
          </ListItemIcon>
          <ListItemText>
              <Input value={item} selected={idx === 1}>{item}</Input>
          </ListItemText>
          <ListItemSecondaryAction>
              <Delete />
          </ListItemSecondaryAction>
      </ListItem>
  )
};

const ShoppingList = () => {

    return (
        <div>
            <ShoppingListFilters/>
            <Typography variant="h3">Shopping List</Typography>
            <List>
                {items.map((item, idx) => <ShoppingListItem item={item} idx={idx}/>)}
            </List>
        </div>
    )
};

export default ShoppingList;