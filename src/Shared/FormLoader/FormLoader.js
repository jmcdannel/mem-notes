
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FormLoader({ state, ...props }) {

  const { noteTypes } = state;
  const { type } = props.note;
  const [noteType, setNoteType] = useState();

  useEffect(() => {
    if (!noteType || noteType.id !== type) {
      setNoteType(noteTypes.find(ntype => ntype.id === type))
    }
  }, [type, noteType, noteTypes]);

  const renderComponent = () => {
    const FormComponent = noteType.form; // important: use Capital letter for this `const` to enable React to render as a component
    return (<FormComponent className="note-form" {...props} />);
  }

  return (
    <React.Fragment>
      {noteType && renderComponent()}
    </React.Fragment>
  );
};

FormLoader.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  setNote: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setIsValid: PropTypes.func.isRequired
};

export default FormLoader;
