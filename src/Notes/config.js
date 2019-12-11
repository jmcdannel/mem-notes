import DueDate from './Forms/DueDate/DueDate';
import Reminder from './Forms/Reminder/Reminder';

export const notesConfig = {
  types: [
    {
      id: 'dueDate',
      label: 'Note w/Due Date',
      component: DueDate,
      fields: [
        { label: 'Due Date', id: 'dueDate', type: 'date' }
      ]
    },
    {
      id: 'reminder',
      label: 'Reminder',
      component: Reminder,
      fields: [
        { label: 'Due Date', id: 'dueDate', type: 'date' }
      ]
    }
  ]
}