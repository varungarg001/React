import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  expense: [
    {
      id: 1,
      description: "this is the expense",
      cost: 12,
    },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { description, cost } = action.payload;

      const newExpense = {
        id: nanoid(),
        description,
        cost,
      };
      state.expense.push(newExpense);
    },

    removeExpense: (state, action) => {
      state.expense = state.expense.filter((exp) => exp.id != action.payload);
    },

    updateExpense: (state, action) => {
      const { id, description, cost } = action.payload;

      const expense = state.expense.find((exp) => exp.id === id);
      if (expense) {
        expense.description = description;
        expense.cost = cost;
      }
    },
  },
});

export const { removeExpense, addExpense, updateExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
