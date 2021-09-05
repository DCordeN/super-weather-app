import { applyMiddleware, compose, createStore } from "redux"
import { reducer } from "./reducers"
import createSagaMiddleware from 'redux-saga'
// Store
import { watchFetchWeather } from "./saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(watchFetchWeather)

export default store 