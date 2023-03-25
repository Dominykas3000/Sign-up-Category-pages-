import React from "react";
import "./ComponentStyles.css";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import Drawer from "./Drawer";
import { IconButton, Tooltip, Typography } from "@mui/material";
function Header(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const onClickDownloadData = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const categories = JSON.parse(localStorage.getItem("categories"));
    const data = JSON.stringify({ users, categories });
    const blob = new Blob([data], { type: "text/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = url;
    link.click();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="navigation-container">
      <div className="navigation">
        <Drawer
          onSubmit={props.onSubmit}
          categories={props.categories}
          toggleDrawer={toggleDrawer}
          state={state}
        />
        <Typography
          variant="h4"
          style={{
            color: "#e8eae3",
          }}
        >
          Employee Management System{" "}
        </Typography>
        <Tooltip title="Download Data">
          <IconButton onClick={onClickDownloadData}>
            <BrowserUpdatedIcon
              fontSize="large"
              sx={{
                color: "#E8EAE3",
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
