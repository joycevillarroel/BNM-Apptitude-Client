import { Types } from './MetricsActions'

export interface IMetrics {
  metric_name: string
  metric_count: number
  week_over_week_change: number
  percentile: number
}

export interface IMetricState {
  allMetrics?: Array<IMetrics>
  message?: string
}

export interface IGetALLMetrics {
  type: Types.GET_ALL_METRICS
}

export interface ISaveALLMetrics {
  type: Types.SAVE_ALL_METRICS
  payload: Array<IMetrics>
}

export interface ISaveMessage {
  type: Types.SAVE_MESSAGE
  payload: string
}
