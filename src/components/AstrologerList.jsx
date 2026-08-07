import AstrologerCard from "./AstrologerCard";

const astrologers = [
  {
    id: 1,
    name: "Astrologer Arun",
    experience: "12 Years",
    language: "Tamil",
    speciality: "Horoscope",
    fee: 299,
  },
  {
    id: 2,
    name: "Astrologer Priya",
    experience: "8 Years",
    language: "Tamil, English",
    speciality: "Marriage Matching",
    fee: 399,
  },
  {
    id: 3,
    name: "Astrologer Kumar",
    experience: "15 Years",
    language: "Tamil",
    speciality: "Career Guidance",
    fee: 499,
  },
];

function AstrologerList() {
  return (
    <section className="astrologer-list">
      <h2>Featured Astrologers</h2>

      <div className="card-grid">
        {astrologers.map((astrologer) => (
          <AstrologerCard
            key={astrologer.id}
            name={astrologer.name}
            experience={astrologer.experience}
            language={astrologer.language}
            speciality={astrologer.speciality}
            fee={astrologer.fee}
          />
        ))}
      </div>
    </section>
  );
}

export default AstrologerList;
