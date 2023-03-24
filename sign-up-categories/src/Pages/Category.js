import { Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
function Category(props) {
  const { id } = useParams();
  const selectedCategory = props.categories.find(
    (category) => category.key === id
  );

  const filteredUsers = props.users.filter(
    (user) => user.category === selectedCategory.value
  );

  const filterBySeniority = (seniority) => {
    return filteredUsers.filter((user) => user.seniority === seniority);
  };

  const filterByPasswordLength = (seniority) => {
    return filterBySeniority(seniority).filter(
      (user) => user.password.length() >= 3
    );
  };

  const SeniorityOptions = [
    { key: "Intern", value: "Intern" },
    { key: "Junior", value: "Junior" },
    { key: "Mid", value: "Mid" },
    { key: "Senior", value: "Senior" },
  ];

  return (
    <div>
      <Typography
        style={{
          textAlign: "center",
          margin: "16px",
        }}
        variant="h4"
      >
        {selectedCategory.value}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {SeniorityOptions.map((seniority) => (
          <Paper
            elevation={8}
            sx={{
              display:
                filterBySeniority(seniority.value).length === 0 && "none",
              marginTop: "10px",
              padding: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: "#e4e0e0e3",
              width: "100%",
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
                {seniority.value}
              </Typography>
              {filterBySeniority(seniority.value).map((user, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="h6">{user.lastName}</Typography>
                  <Typography variant="h6">{user.email}</Typography>
                </div>
              ))}
              <Divider />
              <Typography variant="h6"> Strong Password: </Typography>
              {filterBySeniority(seniority.value).map((user, index) => (
                <div key={index}>
                  {user.password.length > 3 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        
                    }}>
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="h6">{user.email}</Typography>
                      <Typography variant="h6">{user.password}</Typography>
                    </div>
                  )}
                </div>
              ))}
              <Typography variant="h6"> Weak Password: </Typography>

              {filterBySeniority(seniority.value).map((user, index) => (
                <div key={index}>
                  {user.password.length <= 3 && (
                    <>
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="h6">{user.email}</Typography>
                      <Typography variant="h6">{user.password}</Typography>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default Category;
