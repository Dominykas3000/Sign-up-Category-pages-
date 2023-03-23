import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import { IconButton, Tooltip, Typography } from "@mui/material";
export default function SwipeableTemporaryDrawer(props) {
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton href="/">
          <Typography variant="h3">Home:</Typography>
        </ListItemButton>
        <Typography variant="h4">Categories:</Typography>
        {props.categories.map((category) => (
          <ListItemButton href={`/category/${category.key}`}>
            <Typography variant="h5">{category.key} </Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {Object.keys(Object.freeze(["left"])).map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Categories Menu">
            <IconButton onClick={props.toggleDrawer(anchor, true)}>
              <ListIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
          </Tooltip>
          <SwipeableDrawer
            anchor={"left"}
            open={props.state[anchor]}
            onClose={props.toggleDrawer(anchor, false)}
            onOpen={props.toggleDrawer(anchor, true)}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
