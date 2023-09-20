import Person from './Person'

const Phonebook = ({ persons, filter }) => {
    if (filter) {
        persons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return (
        <ul>
        {persons.map(person => <Person key={person.name} person={person} />)}
        </ul>
    )
}

export default Phonebook