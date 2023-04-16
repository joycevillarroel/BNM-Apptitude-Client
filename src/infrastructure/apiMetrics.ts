import api from './api'
import { AxiosResponse } from 'axios'

const APIMetrics = {
  getMetrics: async (): Promise<AxiosResponse> => {
    return (await api).get('/api/v1/metrics-list')
  },
}

export { APIMetrics }
