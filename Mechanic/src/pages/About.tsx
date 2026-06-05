import React from "react";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <section className="Background">
      <div className="screen">
        <Navbar />

        <div className="about-content">
          <div className="about-header-container">
            <h1 className="about-title">About Us</h1>
          </div>

          {/* Top Section: Split Grid for Story and Image */}
          <div className="about-grid">
            {/* Left: Image Placeholder */}
            <div className="about-card image-placeholder-card">
              <div className="placeholder-graphic">
                {/* A simple CSS geometric placeholder, replace with an actual <img /> later */}
                <div className="geo-circle"></div>
                <div className="geo-square"></div>
                <div className="geo-triangle"></div>
              </div>
            </div>

            {/* Right: Our Story */}
            <div className="about-card text-card">
              <h2>Our Story</h2>
              <p>
                Ottawa Mechanics started with a simple goal: provide
                transparent, reliable auto care while actively minimizing our
                environmental footprint. We know that the automotive industry
                can be heavy on waste, which is why we’ve built our shop around
                sustainable practices.
              </p>
              <p>
                From ensuring every drop of used oil and old battery is properly
                recycled, to sourcing durable parts that keep your car on the
                road longer, we believe in a circular approach to vehicle
                maintenance.
              </p>
              <p>
                Whether it's a routine oil change or a complex engine repair,
                our team is dedicated to giving you premium service when you
                need it most—without compromising on quality or our commitment
                to the community.
              </p>
            </div>
          </div>

          {/* Bottom Section: Contact & Info */}
          <div className="about-card contact-card box-gray">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Location</strong>
                <span>123 Mechanic Way, Ottawa, ON K1A 0B1</span>
              </div>
              <div className="contact-item">
                <strong>Phone</strong>
                <span>(613) 123-4567</span>
              </div>
              <div className="contact-item">
                <strong>Email</strong>
                <span>service@ottawamechanics.ca</span>
              </div>
              <div className="contact-item">
                <strong>Hours</strong>
                <span>8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
