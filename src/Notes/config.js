import DueDate from './Forms/DueDate/DueDate';
import List from './Forms/List/List';
import Reminder from './Forms/Reminder/Reminder';

export const notesConfig = {
  types: [
    {
      id: 'reminder',
      label: 'Reminder',
      header: 'Reminder',
      component: Reminder
    },
    {
      id: 'dueDate',
      label: 'Note w/Due Date',
      header: 'Due By',
      component: DueDate,
      fields: [
        { label: 'Due Date', id: 'dueDate', type: 'date' }
      ]
    },
    {
      id: 'list',
      label: 'List',
      header: 'List',
      component: List
    }
  ]
}