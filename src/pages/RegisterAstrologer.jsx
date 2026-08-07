function RegisterAstrologer() {
  return (
    <div className="container">
      <h1>Register as Astrologer</h1>

      <form className="astro-form">
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
        />

        <input
          type="number"
          placeholder="Experience (Years)"
          required
        />

        <input
          type="text"
          placeholder="Specialization"
          required
        />

        <input
          type="text"
          placeholder="Languages"
          required
        />

        <input
          type="number"
          placeholder="Consultation Fee"
          required
        />

        <textarea
          rows="5"
          placeholder="About Yourself"
        ></textarea>

        <button type="submit">
          Submit for Approval
        </button>
      </form>
    </div>
  );
}

export default RegisterAstrologer;
