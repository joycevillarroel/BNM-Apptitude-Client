import { GetAllMetrics, SaveAllMetrics, SaveMessage, Types } from '../MetricsActions'
import { IMetricsGroups } from '../MetricsInterface'

describe('MetricsActions', () => {
  let metrics: Array<IMetricsGroups>
  let messageMock = 'Message mock'

  test('should return GetAllMetrics', () => {
    const action = GetAllMetrics()
    expect(action).toEqual({
      type: Types.GET_ALL_METRICS,
    })
  })

  test('should return SaveAllMetrics', () => {
    const action = SaveAllMetrics(metrics)
    expect(action).toEqual({
      type: Types.SAVE_ALL_METRICS,
      payload: metrics
    })
  })

  test('should return SaveMessage', () => {
    const action = SaveMessage(messageMock)
    expect(action).toEqual({
      type: Types.SAVE_MESSAGE,
      payload: messageMock
    })
  })
})
