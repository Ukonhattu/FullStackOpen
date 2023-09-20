import Country from "./Country"
import weatherService from "../Services/weather"

const Countries = ({ countries, filter, setFilter }) => {
    if (filter === '') {
        return (
            <div>
                Please enter a country name
            </div>
        )
    }
    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(filter.toLowerCase()) || 
        country.name.official.toLowerCase().includes(filter.toLowerCase() 
        ))
    if (filteredCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (filteredCountries.length === 1) {
        const weather = weatherService.getWeather(filteredCountries[0].latlng[0], filteredCountries[0].latlng[1])
        console.log(weather)
        return (
            <Country country={filteredCountries[0]}  weatherPromise={weather} />
        )
    } else {
        return (
            <div>
                {filteredCountries.map(country =>
                    <div key={country.name.official}>
                        {country.name.official}
                        <button onClick={() => setFilter(country.name.official)}>show</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Countries