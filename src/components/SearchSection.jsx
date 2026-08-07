function SearchSection() {
  return (
    <section className="search-section">
      <h2>Find Your Astrologer</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Name, Language or Specialization"
        />

        <button>Search</button>
      </div>
    </section>
  );
}

export default SearchSection;
