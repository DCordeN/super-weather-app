import { VK } from "./globals"

// VK 
const VK_API_ID = 7539562
const VK_API_VERSION = "5.73"

export function vkInit () {
  VK.init({
    apiId: VK_API_ID
  })
  VK.Auth.getLoginStatus((res) => {
    if (res.status === "unknown" || res.status === "not_authorized") {          
      VK.Auth.login((res) => {})
    }
  })
}

export function fetchCities (query, callback) {
  VK.Api.call('database.getCities', { q: query, country_id: 1, lang: "en", v: VK_API_VERSION }, res => {
    res.response && callback(res.response.items)
  })
}

// OPENWEATHER
const OPENWEATHER_APP_ID = 'c21ade6fc6b984bd071ec1a894707b75'

export function fetchWeatherByCityName (query, daysCount) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&cnt=${daysCount*9}&APPID=${OPENWEATHER_APP_ID}`)
}

export function fetchWeatherByCoords (lat, lon) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${OPENWEATHER_APP_ID}`)
}