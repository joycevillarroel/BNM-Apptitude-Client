import { render } from "@testing-library/react"
import { Header } from '../Header'

jest.mock("../../../assets/images/BNM_Logo_White.png", () => {
  return {
    default: "BNM_Logo_White.png",
  };
});

describe('Card', () => {

  test('should render', () => {
    const { getByTestId } = render(<Header />)

    const component = getByTestId('header')
    expect(component).toBeTruthy()
    expect(component).toMatchSnapshot()
  })
})
