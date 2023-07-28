import React, { Component } from "react";
import "./ViewTours.css";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

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
      const response = await fetch(`${apiUrl}/view`); // <-- Updated URL here
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

  // ... rest of the component code remains unchanged
}

export default ViewTours;
