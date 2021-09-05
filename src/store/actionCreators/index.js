export const changeShowWeatherDays = (daysCount) => {
  return {
    type: 'CHANGE_SHOW_WEATHER_DAYS',
    daysCount
  }
} 

export const changeQuery = (query) => {
  return {
    type: 'CHANGE_QUERY',
    query
  }
} 

export const fetchWeather = (query, daysCount) => {
  return {
    type: 'FETCH_WEATHER',
    query: query,
    daysCount: daysCount
  }
}

export const fetchWeatherSucceeded = (data) => {
  return {
    type: 'FETCH_WEATHER_SUCCEEDED',
    payload: data
  }
}