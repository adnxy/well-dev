import React from 'react';
import './PricingPage.css'; // Assuming you have a separate CSS file for styles

const PricingPage = () => {
    return (
        <div className="pricing-container">
            <h1 className="title">Choose Your Plan</h1>
            <div className="card">
                <h2 className="plan-title">Free Account</h2>
                <p className="price">$0</p>
                <button className="button">Get Started</button>
            </div>
            <div className="card">
                <h2 className="plan-title">Premium Monthly</h2>
                <p className="price">$6.99</p>
                <button className="button">Subscribe</button>
            </div>
            <div className="card">
                <h2 className="plan-title">Premium Yearly</h2>
                <p className="price">$50</p>
                <button className="button">Subscribe</button>
            </div>
        </div>
    );
};

export default PricingPage;
