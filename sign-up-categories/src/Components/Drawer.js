import ListIcon from "@mui/icons-material/List";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Modal from "@mui/material/Modal";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useState } from "react";
import CreateCategoryForm from "./CreateCategoryForm";
import Divider from "@mui/material/Divider";
export default function SwipeableTemporaryDrawer(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
        {/* HomeButton */}
        <ListItemButton href="/">
          <Typography variant="h5">Add New User</Typography>
        </ListItemButton>
        {/* New Category Button  */}
        <ListItemButton onClick={handleOpen}>
          <Typography variant="h5"> Create New Category </Typography>
        </ListItemButton>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">Create New Category</Typography>
              <CreateCategoryForm
                categories={props.categories}
                onSubmit={props.onSubmit}
              />
            </div>
          </Box>
        </Modal>

        <Typography variant="h4">Categories:</Typography>
        <Divider />
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
