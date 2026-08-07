import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>Find Trusted Astrologers</h1>

        <p>
          Chat Consultation • Call Consultation • Horoscope Report
        </p>

        <div className="hero-buttons">
          <Link to="/ask-question">
            <button>Ask Question</button>
          </Link>

          <Link to="/register-astrologer">
            <button>Become Astrologer</button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
