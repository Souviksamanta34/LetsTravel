import React, { Component } from "react";
import dubai from "./dubai.jpg";
import paris from "./paris.jpg";
import singapore from "./singapore.jpg";
import "./HomePageStyles.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        
        <main>
          <section className="hero">
            <div className="container">
              <h1>Discover the World with Us</h1>
              <p className="hero-description">
                Explore the most amazing travel destinations and create
                unforgettable memories.
              </p>
              <a href="/view" className="cta-button">
                Get Started
              </a>
            </div>
          </section>

          <section className="destinations">
            <div className="container">
              <h2>Popular Destinations</h2>
              <div className="destination-card">
                <img src={dubai} alt="Dubai" />
                <h3>Dubai</h3>
                <p>
                  Experience the luxury and opulence of Dubai, a city known for
                  its modern architecture, vibrant nightlife, and extravagant
                  shopping malls. Explore iconic landmarks like the Burj
                  Khalifa, indulge in thrilling desert safaris, or relax on
                  beautiful sandy beaches. Dubai offers a unique blend of
                  traditional Arabian culture and futuristic marvels.
                </p>
                <a href="/view" className="btn">
                  View Details
                </a>
              </div>
              <div className="destination-card">
                <img src={paris} alt="Paris" />
                <h3>Paris</h3>
                <p>
                  Discover the romantic charm of Paris, the capital city of
                  France. Immerse yourself in the rich history and culture as
                  you visit iconic landmarks like the Eiffel Tower, Louvre
                  Museum, and Notre-Dame Cathedral. Take a leisurely stroll
                  along the Seine River, savor delicious French cuisine at
                  charming cafes, and explore the artistic Montmartre
                  neighborhood. Paris offers a perfect blend of art, history,
                  and romance.
                </p>
                <a href="/view" className="btn">
                  View Details
                </a>
              </div>
              <div className="destination-card">
                <img src={singapore} alt="Singapore" />
                <h3>Singapore</h3>
                <p>
                  Experience the vibrant city-state of Singapore, known for its
                  modern architecture, diverse culture, and lush greenery.
                  Explore the iconic Gardens by the Bay, visit the historic
                  neighborhoods of Chinatown and Little India, and enjoy the
                  world-class shopping on Orchard Road. Indulge in the
                  delectable local cuisine, experience thrilling rides at
                  Sentosa Island, and take in breathtaking views from the
                  Marina Bay Sands SkyPark. Singapore offers a harmonious blend
                  of tradition and innovation.
                </p>
                <a href="/view" className="btn">
                  View Details
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <p>&copy; 2023 Let's travel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
