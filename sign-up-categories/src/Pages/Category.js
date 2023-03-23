import { Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
function Category(props) {
  const { id } = useParams();
  const selectedCategory = props.categories.find(
    (category) => category.key === id
  );

  const filteredUsers = props.users.filter(
    (user) => user.category === selectedCategory.value
  );

  return (
    <div>
      <Typography>selected catagory {selectedCategory.value}</Typography>
      <Typography>filtered users {filteredUsers.length}</Typography>
      <Paper
        elevation={8}
        sx={{
          marginTop: "10px",
          padding: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          backgroundColor: "#e4e0e0e3",
        }}
      >
        <div
          style={{
            marginLeft: "16px",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#000",
              fontWeight: "bold",
              borderBottom: "1px solid #000",
            }}
          >
            Category1
          </Typography>
          <Typography>Sub-Category1</Typography>
        </div>
      </Paper>
    </div>
  );
}

export default Category;
