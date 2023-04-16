import { Reducer } from 'redux'
import { Types } from './MetricsActions'
import { IMetricState } from './MetricsInterface'

export const INICIAL_STATE: IMetricState = {
  allMetrics: [],
  message: '',
}

const reducer: Reducer<IMetricState> = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVE_ALL_METRICS:
      return { ...state, allMetrics: action.payload }
    case Types.SAVE_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return { ...state }
  }
}

export default reducer
