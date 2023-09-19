import Parts from "./Parts"

const Course = ({ course }) => {
  return (
    <div>
        <h2>{course.name}</h2>
        <Parts parts={course.parts} />
        <p><b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
    </div>
  )
}

export default Course