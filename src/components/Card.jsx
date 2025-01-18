import Circle from "./Circle"

export default function Card () {
    return (
        <>
            <div className="card">
                <h2 className="card-header">Your Result</h2>
                <Circle />
            </div>
        </>
    )
}