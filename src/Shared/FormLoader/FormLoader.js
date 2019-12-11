
import React from 'react';
import Reminder from '../../Notes/Forms/Reminder/Reminder';

function FormLoader(props) {

  debugger;
  const { noteTypes } = props.state;
  const noteType = noteTypes.find(type => type.value === props.note.type);
  const FormComponent = noteType.component;
  
  return (
    <React.Fragment>
      <FormComponent {...props} />
    </React.Fragment>
  );
}

export default FormLoader;
