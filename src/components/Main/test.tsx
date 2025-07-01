import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('render correctly', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
