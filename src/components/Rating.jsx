export default function Rating({ ratingType, score, icon }) {
  const ratingClass = `rating-container ${ratingType.toLowerCase()}`;

  const iconUrl = `${process.env.PUBLIC_URL}${icon}`; 
  // PUBLIC_URL will be "/results_summary_component" in production

  return (
    <div className={ratingClass}>
      <img className="rating-icon" src={iconUrl} alt={`${ratingType} icon`} />
      <p className="rating-text">{ratingType}</p>
      <p className="rating">{score} / 100</p>
    </div>
  );
}
