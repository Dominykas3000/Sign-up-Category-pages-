import React, { useEffect, useState } from "react";
import "./App.css";
import Category from "./Pages/Category";
import SignUpPage from "./Pages/SignUpPage";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  const categoryOptions = [
    { key: "FrontEnd", value: "FrontEnd" },
    { key: "BackEnd", value: "BackEnd" },
    { key: "FullStack", value: "FullStack" },
  ];

  const user = JSON.parse(localStorage.getItem("users")) || [];

  const [isSignUp, setSignup] = useState({ isSignUp: false });
  const [users, setUsers] = useState(user);
  const [categories, setCategory] = useState(categoryOptions);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
    console.log("categories", categories);
  }, [categories]);

  const handleCreateUser = (user) => {
    setUsers([...users, user]);
  };

  const handleAddCategory = (category) => {
    setCategory([...categories, category]);
  };

  const onSubmitCategory = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.stringify(values));
    handleAddCategory(values);
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("users", users);
  }, [users]);

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.stringify(values));
    handleCreateUser(values);
    setSignup({ isSignUp: true });
    console.log("isSignUp", isSignUp);
  };
  useEffect(() => {
    console.log(localStorage.getItem("categories"));
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", JSON.stringify(categoryOptions));
      setCategory(JSON.parse(localStorage.getItem("categories")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSubmit]);

  return (
    <div className="App">
      <Header categories={categories} onSubmit={onSubmitCategory} />

      <Routes>
        <Route
          path="/"
          element={<SignUpPage onSubmit={onSubmit} categories={categories} />}
        />
        <Route
          path="/category/:id"
          element={<Category users={users} categories={categories} />}
        />
      </Routes>
    </div>
  );
}

export default App;
