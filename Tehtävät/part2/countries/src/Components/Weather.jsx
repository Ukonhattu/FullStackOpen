const Weather = async ({ country, weather }) =>  {

    const weather = await weatherPromise
    return (
        <div>
        <h3>Weather in {country.name.official}</h3>
        <p>
            <strong>temperature:</strong> {} Celsius
        </p>
        <img src={
            weather.current.weather_icons[0]
        } alt="weather icon" />
        <p>
            <strong>wind:</strong> {
                weather.current.wind_speed
            } mph direction{" "}
            {
                weather.current.wind_dir
            }
        </p>
        </div>
    );
}

export default Weather;