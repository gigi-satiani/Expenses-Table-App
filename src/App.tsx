import "./App.css";
import ExpenseList from "./expense-tracker/expenseComponents/Expenselist";
import Form from "./components/Form";
import { useState } from "react";
import Filter from "./expense-tracker/expenseComponents/Filter";
import { any } from "zod";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      discription: "abc",
      amount: 10,
      category: "utilities",
    },
    {
      id: 2,
      discription: "asd",
      amount: 10,
      category: "utilities",
    },
    {
      id: 3,
      discription: "dsa",
      amount: 10,
      category: "utilities",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <Form />
      <div className="m-5">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
