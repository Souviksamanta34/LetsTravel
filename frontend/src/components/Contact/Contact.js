import React, { Component } from 'react'
import contactus from './contactus.jpg'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            users: [],
        }
    }

    render() {
        return (
            <div className="contact-container">
                <div className="container">
                    <div className="contact-content">
                        <h1 className="contact-title">
                            <img src={contactus} alt="Customer" />
                        </h1>

                        <div className="contact-details">
                            <div className="contact-info">
                                <h2 className="code-section">Contact Our Office</h2>
                                <div className="contact-item">
                                    <i className="fa fa-phone code-icon" aria-hidden="true"></i>
                                    <span className="code-label">Phone Number:</span>
                                    <br />
                                    <span className="code-value">
                    +94 972 426916 / +94 962 596907
                                    </span>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-envelope code-icon" aria-hidden="true"></i>
                                    <span className="code-label">Email:</span>
                                    <br />
                                    <span className="code-value">letstravel77@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
