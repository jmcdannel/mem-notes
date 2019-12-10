import React from 'react';
import { render } from '@testing-library/react';
import Note from './Note';

const note = { text: 'test', type: 'simple' };

test('renders learn react link', () => {
  const { getByText } = render(<Note note={note} />);
  const element = getByText(/test/i);
  expect(element).toBeInTheDocument();
});
