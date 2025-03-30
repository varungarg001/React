import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeExpense,
  updateExpense,
} from "../feature/expenseslice/expenseSlice";
function ExpenseAction() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense);
  const [edittingId, setEditedId] = useState(null);
  const [newDescription, setNewDescription] = useState("null");
  const [newExpense, setNewExpense] = useState("");
  const [totalAmountSpend, setTotalAmountSpend] = useState(0.0);
  const filteredExpenses = expenses.filter((expense) => expense.id != 1);
  const handleSaveEdit = () => {
    if (newDescription.trim() && newExpense) {
      dispatch(
        updateExpense({
          description: newDescription,
          cost: newExpense,
          id: edittingId,
        })
      );
      setEditedId(null);
    }
  };
  const startSaveEdit = (id, description, cost) => {
    setEditedId(id);
    setNewDescription(description);
    setNewExpense(cost);
  };
  useEffect(() => {
    const total = filteredExpenses.reduce(
      (acc, cum) => acc + Number(Number(cum.cost).toFixed(3)),
      0
    );
    setTotalAmountSpend(total);
  }, [filteredExpenses]);
  return (
    <>
      <div className=" bg-gray-700 w-full h-[100vh]">
        <h1 className="text-white text-3xl font-medium text-center p-5">
          Expenses List
        </h1>
        <ul className="list-none">
          {filteredExpenses.map((expense) => {
            return (
              <li
                key={expense.id}
                className="
                mt-4
                flex
                justify-between
                items-center
                bg-zinc-800
                px-4
                py-2
                rounded"
              >
                {edittingId === expense.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      className="flex-1"
                      autoFocus
                    />
                    <input
                      type="text"
                      value={newExpense}
                      onChange={(e) => setNewExpense(e.target.value)}
                      className="flex-1"
                      autoFocus
                    />
                    <button
                      className="text-white bg-yellow-500 p-1 w-[70px] font-bold text-center hover:bg-yellow-600"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-white inline">{`${expense.description} - ${expense.cost}`}</div>
                    <button
                      className="text-white relative left-[15rem] bg-blue-500 p-1 w-[70px] hover:bg-blue-800"
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        startSaveEdit(
                          expense.id,
                          expense.description,
                          expense.cost
                        )
                      }
                    >
                      Edit
                    </button>
                  </div>
                )}

                <button
                  onClick={() => dispatch(removeExpense(expense.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="text-white mt-5 text-center text-2xl font-semibold">
          Total Expenses: {totalAmountSpend}
        </div>
      </div>
    </>
  );
}

export default ExpenseAction;
