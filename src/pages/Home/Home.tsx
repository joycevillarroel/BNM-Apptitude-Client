import { useSelector, useDispatch } from 'react-redux'
import {
  IMetricState,
  IMetricsGroups,
} from '../../redux/metrics/MetricsInterface'
import { useEffect, useState } from 'react'
import { GetAllMetrics } from '../../redux/metrics/MetricsActions'
import {
  HomeContainer,
  SessionButtons,
  SessionButton,
  SessionCards,
  MessageText,
} from './Home.styles'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'

export function Home() {
  const allMetrics = useSelector((state: IMetricState) => state.allMetrics)
  const [metricNames, setMetricNames] = useState<Array<string>>([''])
  const [selectedMetricName, setSelectedMetricName] = useState<string>('')
  const [selectedMetric, setSelectedMetric] = useState<IMetricsGroups>({
    metrics_group: '',
    data: [
      {
        metric_count: 0,
        metric_name: '',
        percentile: 0,
        week_over_week_change: 0,
      },
    ],
  })
  const dispatch = useDispatch()
  const errorMessage = useSelector((state: IMetricState) => state.message)

  useEffect(() => {
    if (allMetrics?.length === 0) dispatch(GetAllMetrics())
  }, [allMetrics?.length, dispatch])

  const getSelectMetrics = (name: string) => {
    const metric = allMetrics?.filter((obj) => obj.metrics_group === name)
    setSelectedMetricName(name)
    setSelectedMetric(metric[0])
  }

  const getNames = () => {
    const names = allMetrics?.map((obj) => obj.metrics_group)
    setSelectedMetricName(allMetrics[0]?.metrics_group)
    return setMetricNames(names)
  }
  useEffect(() => {
    if (allMetrics) {
      getNames()
      getSelectMetrics(allMetrics[0]?.metrics_group)
    }
  }, [allMetrics])

  return (
    <HomeContainer>
      <SessionButtons>
        {metricNames?.map((name, index) => (
          <SessionButton key={index}>
            <Button
              selected={selectedMetricName === name}
              onClick={() => getSelectMetrics(name)}
            >
              {name}
            </Button>
          </SessionButton>
        ))}
      </SessionButtons>
      <SessionCards>
        <MessageText>{errorMessage}</MessageText>
        {!!allMetrics &&
          selectedMetric?.data?.map((obj, index) => (
            <Card key={index} metrics={obj} />
          ))}
      </SessionCards>
    </HomeContainer>
  )
}
