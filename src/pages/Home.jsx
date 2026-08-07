import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />

      <section
        style={{
          background: "#4A148C",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1>Find Trusted Astrologers</h1>

        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          Online Chat • Call Consultation • Horoscope Report
        </p>

        <div style={{ marginTop: "30px" }}>
          <button>Talk to Astrologer</button>
          <button>Ask a Question</button>
        </div>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div>
            <h3>Horoscope Reading</h3>
            <p>Personal horoscope consultation.</p>
          </div>

          <div>
            <h3>Marriage Matching</h3>
            <p>Marriage compatibility analysis.</p>
          </div>

          <div>
            <h3>Career Guidance</h3>
            <p>Career and business astrology.</p>
          </div>

          <div>
            <h3>Remedies</h3>
            <p>Astrological remedies and solutions.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
