import React, { Component } from "react";
import { ActionCreators } from "../Sign-Login/ActionCreator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        category: "",
      },
      errors: {
        user: {
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          age: "",
          gender: "",
          category: "",
        },
      },
      validForm: false,
      submitted: false,
    };
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({ user: this.props.profile });
      if (this.props.profile.email) {
        this.resetErrorMsg();
      }
    }
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.user.name =
          value.length < 3 ? "Name must be 3 characters long!" : "";
        break;
      case "lastName":
        errors.user.lastName =
          value.length < 1 ? "Last Name must be 1 characters long!" : "";
        break;
      case "email":
        errors.user.email =
          value.length < 1 ? "Email must be 1 characters long!" : "";

        //   errors.email.valueOf.match(
        //   "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/."
        // )? ""
        //   : "Email is not valid!";
        break;
      case "password":
        errors.user.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        errors.password = value.match(
          "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
        )
          ? ""
          : "Password must contain at least one uppercase, one lowercase, and one number!";
        break;
      case "confirmPassword":
        errors.user.confirmPassword =
          !this.state.user.password === value ? "Passwords do not match!" : "";
        break;
      case "age":
        errors.user.age =
          value.length < 1 ? "Age must be 1 characters long!" : "";
        break;
      case "gender":
        errors.user.gender =
          value.length < 1 ? "Gender must be 1 characters long!" : "";
        break;
      case "category":
        errors.user.category =
          value.length < 1 ? "Category must be 1 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  inputChange = (event) => {
    const {
      name,
      lastName,
      email,
      password,
      gender,
      age,
      category,
      confirmPassword,
      value,
    } = event.target;
    const user = this.state.user;

    user[name] = value;
    user[lastName] = value;
    user[value] = value;
    user[email] = value;
    user[password] = value;
    user[gender] = value;
    user[age] = value;
    user[category] = value;
    user[confirmPassword] = value;

    this.setState({ user });
    this.validationErrorMessage(event);
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((item) => {
      item.length > 0 && (valid = false);
    });
    return valid;
  };

  submitForm = async (event) => {
    this.setState({ submitted: true });
    this.props.dispatch(ActionCreators.formSubmissionStatus(true));
    const user = this.state.user;
    if (user && this.props.name) {
      user.name = this.props.profile.name;
    }
    event.preventDefault();
    if (this.validateForm(this.state.errors) && this.props.profile) {
      console.info("Application Successful");
      this.props.dispatch(ActionCreators.addUser(user));
      this.props.dispatch(ActionCreators.signUpStatus(true));
      this.props.history.push("React-form-registration/confirm");
    } else {
      console.error("Invalid Form");
    }
  };

  // submitForm = async (event) => {
  //   this.setState({ submitted: true });
  //   this.props.dispatch(ActionCreators.formSubmissionStatus(true));
  //   const user = this.state.user;
  //   if (user.email && user.password) {
  //     this.props.dispatch(ActionCreators.addUser(user));
  //   }
  //   event.preventDefault();
  //   if (this.validateForm(this.state.errors)
  //     && this.props.profile
  //     && this.props.confirmPassword === this.props.password){
  //     console.info("Application Successful");
  //     this.props.dispatch(ActionCreators.signUpStatus(true));
  //     this.props.dispatch(ActionCreators.addProfile(user));
  //     this.props.history.push("/confirm");
  //   } else{
  //     console.error("Invalid Form");
  //   }
  // }
  resetErrorMsg = () => {
    var errors = this.state.errors;
    errors.user.name = "";
    errors.user.lastName = "";
    errors.user.email = "";
    errors.user.password = "";
    errors.user.confirmPassword = "";
    errors.user.age = "";
    errors.user.gender = "";
    errors.user.category = "";
    this.setState({ errors });
  };
  render() {
    const {
      name,
      lastName,
      email,
      password,
      confirmPassword,
      age,
      gender,
      category,
    } = this.state.user;
    const { submitted } = this.state;
    // const listState = stateList.listState.map((item, key) => (
    //   <option key={key} value={item.name}>
    //     {item.name}
    //   </option>
    // ));
    return (
      <div className="Right Panel">
        <div className="row">
          <label className="col-sm-2 col-form-label">Your Name:</label>
          <div className="col-sm-3 mb-2">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                this.inputChange(e);
              }}
              className="form-control"
              placeholder="First Name"
            />
            {submitted && this.state.errors.user.name.length > 0 && (
              <span className="error">{this.state.errors.user.name}</span>
            )}
          </div>
          <label className="col-sm-2 col-form-label">Last Name:</label>
          <div className="col-sm-3 mb-2">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                this.inputChange(e);
              }}
              className="form-control"
              placeholder="Last Name"
            />
            {submitted && this.state.errors.lastName.length > 0 && (
              <span className="error">{this.state.errors.user.lastName}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                this.inputChange(e);
              }}
              className="form-control"
              placeholder="Email"
            />
            {submitted && this.state.errors.user.email.length > 0 && (
              <span className="error">{this.state.errors.user.email}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                this.inputChange(e);
              }}
              className="form-control"
              placeholder="Password"
            />
            {submitted && this.state.errors.password.length > 0 && (
              <span className="error">{this.state.errors.user.password}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                this.inputChange(e);
              }}
            />
            {submitted && this.state.errors.confirmPassword.length > 0 && (
              <span className="error">
                {this.state.errors.user.confirmPassword}
              </span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => {
                this.inputChange(e);
              }}
              className="form-control"
              placeholder="Age"
            />
            {submitted && this.state.errors.age.length > 0 && (
              <span className="error">{this.state.errors.user.age}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              name="gender"
              value={gender}
              placeholder="gender"
              onChange={(e) => {
                this.inputChange(e);
              }}
            />
            {submitted && this.state.errors.gender.length > 0 && (
              <span className="error">{this.state.errors.user.gender}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              name="category"
              value={category}
              placeholder="category"
              onChange={(e) => {
                this.inputChange(e);
              }}
            />
            {submitted && this.state.errors.category.length > 0 && (
              <span className="error">{this.state.errors.user.category}</span>
            )}
          </div>
          <div className="col-sm-4 mb-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.submitForm}
            >
              Click to Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};
export default connect(mapStateToProps)(withRouter(RegistrationComponent));
