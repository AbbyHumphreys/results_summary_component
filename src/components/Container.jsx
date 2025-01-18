import Card from "./Card"
import Rating from "./Rating"
import data from "../data/data.json"
import Button from "./Button"
import Heading from "./Heading"

export default function Container () {
    return (
        <>
            <div className="container">
                <Card />
                <div className="small-container">
                <Heading 
                    headingText="Summary"
                />
                {data.map((item) => (
                        <Rating
                            key={item.category}
                            ratingType={item.category}
                            score={item.score}
                            icon={item.icon}
                        />
                ))}
                <Button
                    buttonText="Continue"
                />
                </div>
            </div>
        </>
    )
}