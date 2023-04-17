import reducer from '../MetricsReducers'
import { SaveAllMetrics, SaveMessage } from '../MetricsActions'
import { metricsGroupsMock } from './MetricsMock'

describe('Metricis reducer', () => {
  const initialState = {
    allMetrics: [],
    message: '',
  }
  const metrickMock = metricsGroupsMock.metricsList
  const message = 'message test mock'
  describe('default', () => {
    test('should return the inicial state data action', () => {
      expect(reducer(undefined, { type: '' })).toEqual(initialState)
    })

    test('should have allMetrics', () => {
      reducer(undefined, SaveAllMetrics(metrickMock))
      expect(reducer(undefined, SaveAllMetrics(metrickMock))).toHaveProperty('allMetrics', metrickMock)
    })

    test('should have message', () => {
      reducer(undefined, SaveMessage(message))
      expect(reducer(undefined, SaveMessage(message))).toHaveProperty('message', message)
    })
  })
})
