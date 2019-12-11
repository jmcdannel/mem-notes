
import React, { useState, useEffect } from 'react';

function FormLoader(props) {

  const { noteTypes } = props.state;
  const { type } = props.note;

  const [noteType, setNoteType] = useState();

  useEffect(() => {
    if (!noteType || noteType.id !== type) {
      setNoteType(noteTypes.find(ntype => ntype.id === type))
    }
  }, [type, noteType, setNoteType, noteTypes]);

  
  const renderComponent = () => {
    const FormComponent = noteType.form;
    return ( <FormComponent className="note-form" {...props} />);
  }

  return (
    <React.Fragment>
      {noteType && renderComponent()}
    </React.Fragment>
  );
}

export default FormLoader;
