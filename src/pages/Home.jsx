function Home() {
  return (
    <div>
      <header style={{ background: "#4A148C", color: "#fff", padding: "15px" }}>
        <h1>SMV ASTRO SERVICE</h1>
        <p>Online Astrology Consultation</p>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome</h2>
        <p>
          தமிழ் ஜோதிட ஆலோசனை, ஜாதக அறிக்கை, Chat & Call Consultation.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button>Find Astrologer</button>{" "}
          <button>Register as Astrologer</button>{" "}
          <button>Ask Question</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
