const initialState = {
  weather: {},
  daysCount: 3,
  query: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_QUERY':
      return {
        weather: state.weather,
        daysCount: state.daysCount,
        query: action.query
      }
    case 'CHANGE_SHOW_WEATHER_DAYS':
      return {
        weather: state.weather,
        daysCount: action.daysCount,
        query: state.query
      }
    case 'FETCH_WEATHER': 
      return {
        weather: action.payload,
        daysCount: state.daysCount,
        query: state.query
      }
    case 'FETCH_WEATHER_SUCCEEDED':
      return {
        weather: action.payload,
        daysCount: state.daysCount,
        query: state.query
      }
    default:
      return state
  }
}

