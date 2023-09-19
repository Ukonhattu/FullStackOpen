import Part from "./Part"

const Parts = ({ parts }) => {
    return (
        <div>
            {parts.map(part => {
                return (
                    <Part part={part} key={part.id} />
                )
            })}
        </div>
    )
}

export default Parts