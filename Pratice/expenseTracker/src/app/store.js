import { configureStore } from "@reduxjs/toolkit";
import expensereducer from "../feature/expenseslice/expenseSlice";

const store = configureStore({
  reducer: expensereducer,
});

export default store;
