import { useState } from 'react'
import Phonebook from './Components/Phonebook.jsx'
import PersonForm from './Components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    const  newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPersons = persons.concat(newPerson)
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange}/>
      </div>
      <h3>Add a new</h3>
      <PersonForm addPerson={handleAddPerson} 
                    newName={newName} 
                    handleNameChange={handleNameChange} 
                    newNumber={newNumber} 
                    handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={search}/>
    </div>
  )

}

export default App