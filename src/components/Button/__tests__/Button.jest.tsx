import { fireEvent, render } from "@testing-library/react"
import { Button } from '../Button'

describe('Button', () => {
  const mockFn = jest.fn()
  test('should render', () => {
    const { getByText } = render(<Button onClick={mockFn}>test</Button>)

    expect(getByText('test')).toBeTruthy()
    expect(getByText('test')).toMatchSnapshot()
  })

  test('should call onClick function', () => {
    const { getByText } = render(<Button onClick={mockFn}>test</Button>)
    const button = getByText('test')
    fireEvent.click(button)
    expect(mockFn).toBeCalledTimes(1)
  })
})
