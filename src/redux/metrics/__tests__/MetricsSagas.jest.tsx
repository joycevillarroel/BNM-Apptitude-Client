import { call, put } from "redux-saga/effects"
import { SaveAllMetrics, SaveMessage } from "../MetricsActions"
import { MetricsSagas } from "../MetricsSagas"
import { APIMetrics } from "../../../infrastructure/apiMetrics"
import { metricsGroupsMock, metricsResponseMock } from "./MetricsMock"

describe('Metrics Sagas', () => {
  describe('metric sagas with sucess', () => {
    const iterator = MetricsSagas.getAllMetrics()

    test('should effect call with APISMetrics.getMetrics', () => {
      expect(iterator.next().value).toEqual(
        call(APIMetrics.getMetrics)
      )
    })

    test('should effect put with SaveAllMetrics', () => {
      expect(iterator.next({
        status: 200,
        data: metricsGroupsMock
      }).value).toEqual(
        put(SaveAllMetrics(metricsGroupsMock.metricsList))
      )
    })
  })

  describe('metric sagas with error', () => {
    const iterator = MetricsSagas.getAllMetrics()

    test('2should effect call with APISMetrics.getMetrics', () => {
      expect(iterator.next().value).toEqual(
        call(APIMetrics.getMetrics)
      )
    })

    test('should effect put with SaveMessage', () => {
      expect(iterator.throw &&
        iterator.throw({
        status: 500,
      }).value).toEqual(
        put(SaveMessage('System unavailable, please try again later.'))
      )
    })
  })
})
