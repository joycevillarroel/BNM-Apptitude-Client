import { IMetricsGroups } from '../redux/metrics/MetricsInterface'
import api from './api'

export interface IMetricsResponse {
  status: number
  data: {
    metricsList: Array<IMetricsGroups>
  }
}

const APIMetrics = {
  getMetrics: async (): Promise<IMetricsResponse> => {
    return (await api).get('/api/v1/metrics-list')
  },
}

export { APIMetrics }
