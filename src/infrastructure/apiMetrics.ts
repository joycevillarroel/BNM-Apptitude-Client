import { IMetrics } from '../constans/interfaces'
import api from './api'

export interface IMetricsResponse {
  status: number
  data: {
    metricsList: {
      data: Array<IMetrics>
    }
  }
}

const APIMetrics = {
  getMetrics: async (): Promise<IMetricsResponse> => {
    return (await api).get('/api/v1/metrics-list')
  },
}

export { APIMetrics }
