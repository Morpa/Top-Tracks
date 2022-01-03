import userEvent from '@testing-library/user-event'
import { Search } from '@styled-icons/material-outlined'
import { TextField } from '.'
import { render, screen, waitFor } from '~/utils/test-utils'

describe('<TextField />', () => {
  it('Renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    render(<TextField icon={<Search data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    render(
      <TextField icon={<Search data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    render(<TextField onInputChange={onInput} name="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Renders with error', () => {
    render(
      <TextField icon={<Search data-testid="icon" />} error="Error message" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
