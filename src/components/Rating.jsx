export default function Rating ({ratingType, score, icon}) {
    const ratingClass = `rating-container ${ratingType.toLowerCase()}`
    return (
        <>
            <div className={ratingClass}>
                <img className="rating-icon" src={icon} alt="icon"/>
                <p className="rating-text">{ratingType}</p>
                <p className="rating">{score}/ 100</p>
            </div>
        </>
    )
}
