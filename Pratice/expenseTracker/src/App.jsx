import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseAction from "./components/ExpenseAction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ExpenseForm />
      <ExpenseAction />
      
    </>
  );
}

export default App;
