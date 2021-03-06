import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Osa1 = (props) => {
  return (
    <div>
      <p>{props.osa1} {props.tehtavia1}</p>
    </div>
  )
}

const Osa2 = (props) => {
  return (
    <div>
      <p>{props.osa2} {props.tehtavia2}</p>
    </div>
  )
}

const Osa3 = (props) => {
  return (
    <div>
      <p>{props.osa3} {props.tehtavia3}</p>
    </div>
  )
}

const Sisalto = (props) => {

  return(
    <div>
      <Osa1 osa1 = {props.osa1} tehtavia1 = {props.tehtavia1} />
      <Osa2 osa2 = {props.osa2} tehtavia2 = {props.tehtavia1} />
      <Osa3 osa3 = {props.osa3} tehtavia3 = {props.tehtavia3} />
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
    </div>
  )
}

const App = (props) => {
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  const kurssi = 'Half Stack -sovelluskehitys'


  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1 = {osa1} osa2={osa2} osa3={osa3} tehtavia1={tehtavia1} tehtavia2= {tehtavia2} tehtavia3 = {tehtavia3} />
      <Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
