// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, comment } = action.payload;
      state.push({
        id: Date.now(),
        title,
        comment,
        isDone: false,
      });
    },
    doneTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.isDone = !todo.isDone;
    },
    deleteTodo: (state, action) => {
      const todo = state.filter((todo) => todo.id !== action.payload.id);
      return todo;
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
