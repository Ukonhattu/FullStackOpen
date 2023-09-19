import { useState } from 'react'


const Button = ({buttonSetState, buttonStateValue, buttonText}) => {
  const handleClick = () => {
    buttonSetState(buttonStateValue + 1)
  }

  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
    <th>{text} </th>
    <th>{value}</th>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total || 0
  const positive = good / total * 100 || 0

  if (total == 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={total} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button buttonSetState={setGood} buttonStateValue={good} buttonText='good' />
      <Button buttonSetState={setNeutral} buttonStateValue={neutral} buttonText='neutral' />
      <Button buttonSetState={setBad} buttonStateValue={bad} buttonText='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App