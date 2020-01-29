import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO
} from "../actions/action-types.js";
import { combineReducers } from "redux";

const initialState = {
  todos: [
    {
      todoname: "Redux no React",
      isComplete: true
    }
  ]
};

export const handleToDo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const updatedToDos = state.todos;
      updatedToDos.unshift(action.newToDo);
      return {
        ...state,
        todos: updatedToDos
      };

    case COMPLETE_TODO:
      return "";

    case REMOVE_TODO:
      const removedToDos = state.todos;
      removedToDos.splice(action.removeToDo, 1);
      return {
        ...state,
        todos: removedToDos
      };

    default:
      return state;
  }
};

export const Reducers = combineReducers({
  toDoState: handleToDo
});
