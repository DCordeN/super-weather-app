import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchWeatherByCityName } from '../../utils/api'

export function* watchFetchWeather () {
  yield takeEvery('FETCH_WEATHER', fetchWeatherAsync)
}

function* fetchWeatherAsync (action) {
  try {
    const data = yield call(() => {
      return fetchWeatherByCityName(action.query, action.daysCount)
        .then(res => res.json())
    })
    yield put({ type: "FETCH_WEATHER_SUCCEEDED", payload: data })
  } catch (error) {
    yield put({ type: "FETCH_WEATHER_FAILED", message: error.message })
  }
}
