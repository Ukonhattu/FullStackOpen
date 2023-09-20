import { useState, useEffect } from 'react'
import Phonebook from './Components/Phonebook.jsx'
import PersonForm from './Components/PersonForm.jsx'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons)
    } )
  }, [])

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
    personService.create(newPerson).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
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

  const handleDeletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id).then(() => {
        const newPersons = persons.filter(p => p.id !== person.id)
        setPersons(newPersons)
      })
    }
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
      <Phonebook persons={persons} 
                  filter={search}
                  handleDeletePerson={handleDeletePerson}
                  />
    </div>
  )

}

export default App