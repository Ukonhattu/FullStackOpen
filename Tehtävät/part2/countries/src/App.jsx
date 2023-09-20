import { useState, useEffect } from 'react'
import Countries from './Components/Countries'
import countriesService from './Services/countries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        countriesService.getAll().then(countries => {
            setCountries(countries)
        })
    }, [])

    const handleSearch = (event) => {
        setFilter(event.target.value)
    }

    const handleSetFilter = (name) => {
        setFilter(name)
    }

    return (
        <div>
            <div>
                find countries <input value={filter} onChange={handleSearch} />
            </div>
            <Countries countries={countries} filter={filter} setFilter={handleSetFilter} />
        </div>
    )
}

export default App
