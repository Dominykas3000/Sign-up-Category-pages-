import ListIcon from "@mui/icons-material/List";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Modal from "@mui/material/Modal";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import StartIcon from "@mui/icons-material/Start";
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
    width: "50%",
    borderRadius: "16px",
    bgcolor: "#e8eae3",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const list = (anchor) => (
    <Box
      sx={{
        backgroundColor: "#e8eae3",
        height: "100%",
      }}
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
        {/* HomeButton */}
        <ListItemButton href="/">
          <StartIcon />
          <Typography variant="h5">Add New User</Typography>
        </ListItemButton>
        {/* New Category Button  */}
        <ListItemButton onClick={handleOpen}>
          <StartIcon />
          <Typography variant="h5"> Create New Department </Typography>
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
              <Typography variant="h4"
                style={{
                marginBottom: "16px",
              }}
              >Create New Department</Typography>
              <CreateCategoryForm
                categories={props.categories}
                onSubmit={props.onSubmit}
              />
            </div>
          </Box>
        </Modal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <CircleIcon fontSize="small" />
          <Typography variant="h5">Departments:</Typography>
        </div>
        <Divider />
        {props.categories.map((category) => (
          <ListItemButton href={`/category/${category.key}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardArrowRightTwoToneIcon />
              <Typography variant="h5">{category.key} </Typography>
            </div>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {Object.keys(Object.freeze(["left"])).map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Menu">
            <IconButton
              fontSize="large"
              onClick={props.toggleDrawer(anchor, true)}
            >
              <ListIcon
                sx={{
                  color: "#E8EAE3",
                }}
                fontSize="large"
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
