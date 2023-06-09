import { Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import "./Pages.css";
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
              backgroundColor: "#e8eae3",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography variant="h6" style={{}}>
                  All {seniority.value} employees (Name, Last Name, Email):
                </Typography>
              </div>
              {filterBySeniority(seniority.value).map((user, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    margin: "20px",
                  }}
                >
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="h6">{user.lastName}</Typography>
                  <Typography variant="h6">{user.email}</Typography>
                </div>
              ))}
              <Divider />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {seniority.value} employees with a{" "}
                <span className="bold">Strong</span> password (Name, Last Name,
                Password)
              </Typography>
              {filterBySeniority(seniority.value).map((user, index) => (
                <div key={index}>
                  {user.password.length > 3 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                        flexDirection: "row",
                        margin: "20px",
                      }}
                    >
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="h6">{user.email}</Typography>
                      <Typography variant="h6">{user.password}</Typography>
                    </div>
                  )}
                </div>
              ))}
              <Divider />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {seniority.value} employees with a{" "}
                <span className="bold">Weak</span> password (Name, Last Name,
                Password)
              </Typography>
              {filterBySeniority(seniority.value).map((user, index) => (
                <div key={index}>
                  {user.password.length <= 3 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                        flexDirection: "row",
                        margin: "20px",
                      }}
                    >
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="h6">{user.email}</Typography>
                      <Typography variant="h6">{user.password}</Typography>
                    </div>
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
