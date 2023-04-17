import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { APIMetrics, IMetricsResponse } from '../../infrastructure/apiMetrics'
import { SaveAllMetrics, SaveMessage } from './MetricsActions'

function* getAllMetrics(): SagaIterator {
  try {
    const response: IMetricsResponse = yield call(APIMetrics.getMetrics)
    if (response.status === 200) {
      yield put(SaveAllMetrics(response.data.metricsList))
    }
  } catch (error) {
    yield put(SaveMessage('System unavailable, please try again later.'))
  }
}

export const MetricsSagas = {
  getAllMetrics,
}
