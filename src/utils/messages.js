export const appTitleMessage = 'Simple todo list using React Hooks';
export const newTodoPlaceholderMessage = 'New list item';
export const newTodoActionMessage = 'Add item';
export const completedItemsMessage = (completedItems) => (
  `${completedItems} ${completedItems === 1 ? 'item' : 'items'} completed`
);
export const expandCompletedItemsAriaLabel = (expanded) => (
  expanded ? 'Collapse completed items' : 'Expand completed items'
);
export const todoCheckboxAriaLabel = (todo) => (
  `Mark  "${todo.todo}" as ${todo.completed ? 'pending' : 'completed'}`
);
export const deleteTodoAriaLabel = (todo) => `Delete "${todo.todo}"`;
