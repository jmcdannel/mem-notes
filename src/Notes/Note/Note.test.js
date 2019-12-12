import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Note from './Note';
import { notesConfig } from '../config';

const note = { id: 99, text: 'test', type: 'reminder' };
const selectedNoteType = notesConfig.types.find(t => t.id === note.type);
const initProps = {
  note,
  dispatch: jest.fn(),
  state: {
    noteTypes: notesConfig.types
  },
};

describe('<Note />', () => {

  it('renders <Note /> header', () => {
    const { getByText } = render(<Note {...initProps} />);
    expect(getByText(selectedNoteType.header)).toBeInTheDocument();
  });

  it('renders <Note /> text', () => {
    const { getByText } = render(<Note {...initProps} />);
    expect(getByText(note.text)).toBeInTheDocument();
  });

  it('renders the <Avatar /> indicating note type', () => {
    const { getByLabelText } = render(<Note {...initProps} />);
    expect(getByLabelText('note-type-identifier')).toHaveTextContent('R')
  });

  it('delete button dispatches delete action', () => {
    const { getByLabelText } = render(<Note {...initProps} />);
    fireEvent.click(getByLabelText('delete'));
    expect(initProps.dispatch).toHaveBeenCalled();
    expect(initProps.dispatch).toHaveBeenCalledTimes(1);
    expect(initProps.dispatch).toHaveBeenCalledWith(
      { type: 'remove', payload: note }
    );
  });

  // TODO: test notes with dueDates and different text output (ie List)

});
