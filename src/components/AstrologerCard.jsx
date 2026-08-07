function AstrologerCard({
  name,
  experience,
  language,
  speciality,
  fee,
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "#ddd",
          margin: "auto",
        }}
      />

      <h3 style={{ textAlign: "center", marginTop: "15px" }}>
        {name}
      </h3>

      <p><b>Experience:</b> {experience}</p>
      <p><b>Language:</b> {language}</p>
      <p><b>Speciality:</b> {speciality}</p>

      <h3 style={{ color: "#4A148C" }}>
        ₹ {fee}
      </h3>

      <button style={{ width: "100%" }}>
        Consult Now
      </button>
    </div>
  );
}

export default AstrologerCard;
