import { IMetricsGroups } from '../../../redux/metrics/MetricsInterface'
import { useState } from 'react'
import {
  MetricTableContainer,
  SessionButtons,
  SessionButton,
  SessionCards,
} from './MetricTable.styles'
import { Button } from '../../../components/Button/Button'
import { Card } from '../../../components/Card/Card'

interface IMetricTable{
  metricsList: Array<IMetricsGroups>
}

export function MetricTable({ metricsList }: IMetricTable): JSX.Element {
  const metricNames = metricsList.map((obj) => obj.metrics_group)

  const [selectedMetricName, setSelectedMetricName] = useState<string>('')
  const [selectedMetric, setSelectedMetric] = useState<IMetricsGroups>(metricsList[0])

  const getSelectMetrics = (name: string) => {
    const metric = metricsList?.filter((obj) => obj.metrics_group === name)
    setSelectedMetricName(name)
    setSelectedMetric(metric[0])
  }

  return (
    <MetricTableContainer>
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
        {
          selectedMetric?.data?.map((obj, index) => (
            <Card key={index} metrics={obj} />
          ))
        }
      </SessionCards>
    </MetricTableContainer>
  )
}
