import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';

test('renders given text, author and date', () => {
  render(<Tweet text="test" author="test author" date="2020.01.01"/>);
  const linkElement = screen.getByText(/test by test author on 2020.01.01/i);
  expect(linkElement).toBeInTheDocument();
});
