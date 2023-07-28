import React, { Component } from "react";
import "./AddStyles.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import himachal from "./himachal.jpg";
const apiUrl = "https://lets-travel-backend.vercel.app" || "http://localhost:5000";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  gender: "",

  nameerror: "",
  emailerror: "",
  phoneerror: "",
  addresserror: "",
  countryerror: "",
  gendererror: "",
};

class Add extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let emailerror = "";
    let phoneerror = "";
    let addresserror = "";
    let countryerror = "";
    let gendererror = "";

    if (!this.state.name) {
      nameerror = "Enter User Name";
    }

    if (!this.state.email) {
      emailerror = "Enter User Email";
    }
    if (!this.state.phone) {
      phoneerror = "Enter Phone Number";
    }
    if (!this.state.address) {
      addresserror = "Enter User Address";
    }
    if (!this.state.country) {
      countryerror = "Enter Country Name";
    }
    if (!this.state.gender) {
      gendererror = "Enter Gender";
    }

    if (
      nameerror ||
      emailerror ||
      phoneerror ||
      addresserror ||
      countryerror ||
      gendererror
    ) {
      this.setState({
        nameerror,
        emailerror,
        phoneerror,
        addresserror,
        countryerror,
        gendererror,
      });
      return false;
    }
    swal("Guest Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.phone);
      console.log(this.state.address);
      console.log(this.state.country);
      console.log(this.state.gender);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.address == null &&
      this.state.country == null &&
      this.state.gender == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        country: this.state.country,
        gender: this.state.gender
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      gender: "",
    });
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