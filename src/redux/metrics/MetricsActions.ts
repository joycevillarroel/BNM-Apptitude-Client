import {
  IGetALLMetrics,
  IMetricsGroups,
  ISaveALLMetrics,
  ISaveMessage,
} from './MetricsInterface'

export enum Types {
  GET_ALL_METRICS = 'GET_ALL_METRICS',
  SAVE_ALL_METRICS = 'SAVE_ALL_METRICS',
  SAVE_MESSAGE = 'SAVE_MESSAGE',
}

export const GetAllMetrics = (): IGetALLMetrics => ({
  type: Types.GET_ALL_METRICS,
})

export const SaveAllMetrics = (
  payload: Array<IMetricsGroups>,
): ISaveALLMetrics => ({
  type: Types.SAVE_ALL_METRICS,
  payload,
})

export const SaveMessage = (payload: string): ISaveMessage => ({
  type: Types.SAVE_MESSAGE,
  payload,
})
