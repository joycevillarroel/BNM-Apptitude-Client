import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../../redux/metrics/MetricsReducers'
import sagas from '../../redux/sagas'

export default () => {
  const devTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()

  const tools = devTools || compose
  const sagaMiddleware = createSagaMiddleware()
  const storeEnhancer = applyMiddleware(sagaMiddleware)
  const enhancedCreateStore = storeEnhancer(createStore)
  const store = enhancedCreateStore(reducer, tools)
  sagaMiddleware.run(sagas)
  return store
}
