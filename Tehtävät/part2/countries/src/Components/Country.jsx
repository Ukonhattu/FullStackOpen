import Weather from "../Services/weather"

const Country = ({ country, wheaterPromise }) => {
    return (
        <div>
            <h2>{country.name.official}</h2>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
                population {country.population}
            </div>
            <h3>languages</h3>
            <ul>
                {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={`${country.name.official} flag`} width="200" />
            <Weather country={country} wheaterPromise={wheaterPromise} />
        </div>
    )
}

export default Country  