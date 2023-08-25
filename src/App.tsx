import "./App.css";
import ExpenseList from "./expense-tracker/expenseComponents/Expenselist";
import Form from "./components/Form";
import { useState } from "react";
import Filter from "./expense-tracker/expenseComponents/Filter";
import { categories } from "./expense-tracker/Category";

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
      <div className="m-5">
        <Form
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="m-5">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <div className="m-5">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
