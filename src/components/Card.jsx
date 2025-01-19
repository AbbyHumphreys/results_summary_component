import Circle from "./Circle"

export default function Card () {
    return (
        <>
            <div className="card">
                <h2 className="card-header">Your Result</h2>
                <Circle />
                <h1>Great</h1>
                <p className="score-paragraph">You scored higher than 65% of the people who have taken these test.</p>
            </div>
        </>
    )
}