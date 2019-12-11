import { notesConfig } from '../Notes/config';

export const storageKey = 'memNotes';

export const initialState = {
  noteTypes: notesConfig.types,
  notes:
    window.localStorage.getItem(storageKey) !== null
      ? JSON.parse(window.localStorage.getItem(storageKey))
      : []
};

export const notesReducer = (state, action) => {
  switch (action.type) {
    case 'setNotes':
      return { ...state, notes: action.payload };
    case 'add':
      state.notes.unshift(action.payload);
      return { ...state };
    case 'remove':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default notesReducer;
