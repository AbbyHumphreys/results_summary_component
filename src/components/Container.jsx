import Card from "./Card"
import Rating from "./Rating"
import data from "../data/data.json"

export default function Container () {
    return (
        <>
            <div className="container">
                <Card />
                <div className="small-container">
                {data.map((item) => (
                    <Rating
                        key={item.category}
                        ratingType={item.category}
                        score={item.score}
                        icon={item.icon}
                    />
                ))}
                </div>
            </div>
        </>
    )
}