import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./action-types.js";

export const addButton = value => ({
  type: ADD_TODO,
  newToDo: value
});

export const completeButton = value => ({
  type: COMPLETE_TODO,
  editedToDo: value
});

export const removeButton = value => ({
  type: REMOVE_TODO,
  removeToDo: value
});
