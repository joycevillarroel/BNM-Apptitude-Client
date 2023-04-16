import { takeLatest } from 'redux-saga/effects'
import { Types } from './metrics/MetricsActions'
import { SagaIterator } from 'redux-saga'
import { MetricsSagas } from './metrics/MetricsSagas'

export default function* (): SagaIterator {
  yield takeLatest(Types.GET_ALL_METRICS, MetricsSagas.getAllMetrics)
}
