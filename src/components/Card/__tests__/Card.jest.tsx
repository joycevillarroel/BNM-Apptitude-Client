import { render } from "@testing-library/react"
import { Card } from '../Card'
import { metricsGroupsMock } from "../../../redux/metrics/__tests__/MetricsMock"

describe('Card', () => {
  const metrickMock = metricsGroupsMock.metricsList[0].data[0]

  test('should render', () => {
    const { getByTestId } = render(<Card metrics={metrickMock} />)

    const component = getByTestId('card')
    expect(component).toBeTruthy()
    expect(component).toMatchSnapshot()
  })
})
