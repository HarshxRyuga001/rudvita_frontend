import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Building <br /> Reliable Websites. <br /> Maintaining Digital Growth.
        </h1>

        <p>
          Rudvita Technologies is a technology-driven company specializing in
          website development, maintenance, and digital solutions that help
          businesses grow online with confidence.
        </p>

        <Link to="/contact">
          <button>
            Get Started
          </button>
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team working"
        />
      </div>
    </section>
  );
};

export default Hero;
