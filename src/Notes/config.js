import DueDate from './Forms/DueDate/DueDate';
import List from './Forms/List/List';
import Reminder from './Forms/Reminder/Reminder';
import GenericNote from './Note/GenericNote/GenericNote';

export const notesConfig = {
  types: [
    {
      id: 'reminder',
      label: 'Reminder',
      header: 'Reminder',
      form: Reminder,
      renderer: GenericNote
    },
    {
      id: 'dueDate',
      label: 'Note w/Due Date',
      header: 'Due By',
      form: DueDate,
      renderer: GenericNote,
      fields: [
        { label: 'Due Date', id: 'dueDate', type: 'date' }
      ]
    },
    {
      id: 'list',
      label: 'List',
      header: 'List',
      form: List,
      renderer: GenericNote
    }
  ]
}