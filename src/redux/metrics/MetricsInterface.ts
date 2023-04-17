import { Types } from './MetricsActions'

export interface IMetrics {
  metric_name: string
  metric_count: number
  week_over_week_change: number
  percentile: number
}

export interface IMetricsGroups {
  metrics_group: string
  data: Array<IMetrics>
}

export interface IMetricState {
  allMetrics?: Array<IMetricsGroups>
  message?: string
}

export interface IGetALLMetrics {
  type: Types.GET_ALL_METRICS
}

export interface ISaveALLMetrics {
  type: Types.SAVE_ALL_METRICS
  payload: Array<IMetricsGroups>
}

export interface ISaveMessage {
  type: Types.SAVE_MESSAGE
  payload: string
}
