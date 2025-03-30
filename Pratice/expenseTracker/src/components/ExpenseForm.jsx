import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../feature/expenseslice/expenseSlice";

function ExpenseForm() {
  const dispatcher = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addToHandler = (e) => {
    e.preventDefault();
    if (description.trim() && amount) {
      dispatcher(addExpense({ description, cost: amount }));
    }
    setAmount("");
    setDescription("");
  };
  return (
    <>
      <div className=" bg-gray-700 flex justify-between p-5">
        <div className="w-full">
          <h1 className=" text-white  font-bold text-4xl w-full h-[50px] text-center ">
            Expense Tracker
          </h1>
          <div className="mt-5 ">
            <form onSubmit={addToHandler}>
              <input
                type="text"
                placeholder="Description..."
                className=" placeholder:font-medium placeholder:text-black p-1 text-black m-2 w-[15rem] border-none "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount..."
                className=" placeholder:font-medium placeholder:text-black p-1 text-black w-[15rem] border-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button type="submit" className="text-white bg-red-400 p-1 ml-2">
                Add Expense
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseForm;
