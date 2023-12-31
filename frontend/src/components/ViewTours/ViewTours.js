import React, { Component } from "react";
import "./ViewTours.css";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

class ViewTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${apiUrl}/view`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseJson = await response.json();
      this.setState({
        tours: responseJson,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({
        error: "Failed to fetch tour data. Please try again later.",
        isLoading: false,
      });
    }
  }

  render() {
    const { tours, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="container">
        <br />
        <div className="justify-content-center">
          <h1 className="rr">Tour Packages</h1>
        </div>
        <br />
        <br />

        <div className="row">
          {tours.map((value, key) => (
            <div className="col-md-4" key={key}>
              <div className="card">
                <img
                  src="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
                  className="card-img-top"
                  alt="Tour Package"
                />
                <div className="card-body">
                  <h5 className="card-title">{value.tname}</h5>
                  <p className="card-text justify">{value.tdescription}</p>
                  <br />
                  <p className="card-text mb-0 p-8">
                    <b>Price: </b>
                    {value.price}
                  </p>
                  <p className="card-text">
                    <b>Package No: </b>
                    {value.tnumber}
                  </p>
                  <div className="text-center">
                    <Link to="/add" className="btn btn-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ViewTours;


//lp