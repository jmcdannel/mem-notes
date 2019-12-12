import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteType from './NoteType';
import { notesConfig } from '../../config';

const initProps = {
  noteTypes: notesConfig.types,
  selectedType: null,
  setSelectedType: jest.fn()
};

const selectedNoteType = notesConfig.types[0];

describe('<NoteType />', () => {

  it('renders <NoteType />', () => {
    const { getByText } = render(<NoteType {...initProps} />);
    expect(getByText('Please select which', { exact: false })).toBeInTheDocument();
  });

  it('renders each note type', () => {
      const { getByText } = render(<NoteType {...initProps} />);
    
      notesConfig.types.forEach(noteType => {
        expect(getByText(noteType.label)).toBeTruthy();
      });
  });

  it('selects a note type', () => {
    const { getAllByRole } = render(<NoteType {...initProps} />);
    const itemBtn = getAllByRole('button');
    fireEvent.click(itemBtn[0]);
    expect(initProps.setSelectedType).toHaveBeenCalledTimes(1);
    expect(initProps.setSelectedType).toHaveBeenCalledWith(selectedNoteType);
  });

  it('deselects a note type', () => {
    const myProps = {
      noteTypes: notesConfig.types,
      selectedType: selectedNoteType,
      setSelectedType: jest.fn()
    };
    const { getAllByRole } = render(<NoteType {...myProps} />);
    const itemBtn = getAllByRole('button');
    fireEvent.click(itemBtn[0]);
    expect(myProps.setSelectedType).toHaveBeenCalledTimes(1);
    expect(myProps.setSelectedType).toHaveBeenCalledWith(undefined);
  });

});