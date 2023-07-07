import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import himachal from "./himachal.jpg";
import "./AddStyles.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  gender: "",

  nameError: "",
  emailError: "",
  phoneError: "",
  addressError: "",
  countryError: "",
  genderError: "",
};

class Add extends Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let addressError = "";
    let countryError = "";
    let genderError = "";

    if (!this.state.name) {
      nameError = "Please enter a name";
    }

    if (!this.state.email) {
      emailError = "Please enter an email";
    }

    if (!this.state.phone) {
      phoneError = "Please enter a phone number";
    }

    if (!this.state.address) {
      addressError = "Please enter an address";
    }

    if (!this.state.country) {
      countryError = "Please enter a country";
    }

    if (!this.state.gender) {
      genderError = "Please enter a gender";
    }

    if (
      nameError ||
      emailError ||
      phoneError ||
      addressError ||
      countryError ||
      genderError
    ) {
      this.setState({
        nameError,
        emailError,
        phoneError,
        addressError,
        countryError,
        genderError,
      });
      return false;
    }

    swal("Guest Details Added Successfully!", "No warnings!", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.phone);
      console.log(this.state.address);
      console.log(this.state.country);
      console.log(this.state.gender);

      // Clear form
      this.setState(initialState);
    } else {
      swal("Error", "Please fill in all the required fields", "error");
    }
  };

  render() {
    const {
      name,
      email,
      phone,
      address,
      country,
      gender,
      nameError,
      emailError,
      phoneError,
      addressError,
      countryError,
      genderError,
    } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
        <div className="text-center">
  <div className="o">
    <div className="d-flex align-items-center justify-content-end">
      <div>
        <img src={himachal} alt="Additional Icon" className="contact-image" />
      </div>
      <div className="ml-3">
        <div>Book Your Dream</div>
        <div>Tour Now</div>
      </div>
    </div>
  </div>
</div>

          <div className="container mt-3">
            <div className="form-group">
              <label className="text-left">
                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;Name
              </label>
              <input
                name="name"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="User Name"
                className="form-control"
                value={name}
                required
              />
              {nameError && <div className="error-msg">{nameError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
              </label>
              <input
                name="email"
                onChange={this.onChangeHandler}
                type="email"
                placeholder="User Email"
                className="form-control"
                value={email}
                required
              />
              {emailError && <div className="error-msg">{emailError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone
                Number
              </label>
              <input
                name="phone"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="With the country code (Eg: 9477711188)"
                className="form-control"
                value={phone}
                required
              />
              {phoneError && <div className="error-msg">{phoneError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                &nbsp;Address
              </label>
              <input
                name="address"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Address"
                className="form-control"
                value={address}
                required
              />
              {addressError && <div className="error-msg">{addressError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-globe" aria-hidden="true"></i>&nbsp;Country
              </label>
              <input
                name="country"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Country"
                className="form-control"
                value={country}
                required
              />
              {countryError && <div className="error-msg">{countryError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-male" aria-hidden="true"></i>&nbsp;Gender
              </label>
              <input
                name="gender"
                onChange={this.onChangeHandler}
                type="text"
                placeholder="Female / Male"
                className="form-control"
                value={gender}
                required
              />
              {genderError && <div className="error-msg">{genderError}</div>}
            </div>

            <div className="form-group mt-4">
              <button className="btn btn-danger" type="submit">
                <i className="fa fa-send"></i>&nbsp;Submit
              </button>
              <Link to="/home">
                <button className="btn btn-info ml-2">
                  <i className="fa fa-arrow-left"></i>&nbsp;Back to Home Page
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
