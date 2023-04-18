import React from 'react'
import {
  CardContainer,
  Count,
  CountContainer,
  NameContainer,
  NameText,
  Percentile,
  Icon,
  IconContainer,
  IconText,
  SubContainer,
  Performance,
  PerformanceNumber,
  PerformaceBox,
} from './Card.styles'
import { IMetrics } from '../../redux/metrics/MetricsInterface'
import DownIcon from '../../assets/images/BNM_Metric_Down.svg'
import UpIcon from '../../assets/images/BNM_Metric_Up.svg'

interface ICard {
  metrics: IMetrics
}

export function Card({ metrics }: ICard) {
  const isPositiveVariation = metrics.week_over_week_change > 0
  const variationChange = isPositiveVariation ? 'primary' : 'secondary'
  return (
    <CardContainer data-testid='card'>
      <NameContainer>
        <NameText>{metrics.metric_name.toUpperCase()}</NameText>
      </NameContainer>
      <SubContainer>
        <CountContainer>
          <Count>
            {new Intl.NumberFormat('en-IN', {
              maximumSignificantDigits: 4,
            }).format(metrics.metric_count)}
          </Count>
        </CountContainer>
        <Percentile data-testid='icon' variation={variationChange}>
          {metrics.percentile}%
        </Percentile>
        <IconContainer>
          <Icon src={isPositiveVariation ? UpIcon : DownIcon} />
          <IconText>pctl</IconText>
        </IconContainer>
      </SubContainer>
      <PerformaceBox>
        <Performance>
          Your performace from last week{' '}
          <PerformanceNumber variation={variationChange}>
            {isPositiveVariation && '+'}{metrics.week_over_week_change}%
          </PerformanceNumber>
        </Performance>
      </PerformaceBox>
    </CardContainer>
  )
}
