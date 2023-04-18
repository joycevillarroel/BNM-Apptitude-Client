import { useSelector, useDispatch } from 'react-redux'
import { IMetricState } from '../../redux/metrics/MetricsInterface'
import { useEffect } from 'react'
import { GetAllMetrics } from '../../redux/metrics/MetricsActions'
import {
  HomeContainer,
  MessageText,
} from './Home.styles'
import { MetricTable } from './MetricTable/MetricTable'

export function Home() {
  const dispatch = useDispatch()
  const allMetrics = useSelector((state: IMetricState) => state.allMetrics)
  const errorMessage = useSelector((state: IMetricState) => state.message)

  useEffect(() => {
    if (allMetrics?.length === 0) dispatch(GetAllMetrics())
  }, [allMetrics?.length, dispatch])

  return (
    <HomeContainer>
        {!!allMetrics?.length && <MetricTable metricsList={allMetrics} />}
        <MessageText>{errorMessage}</MessageText>
    </HomeContainer>
  )
}
