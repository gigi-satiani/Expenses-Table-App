import "./App.css";
import ExpenseList from "./expense-tracker/expenseComponents/Expenselist";
import Form from "./components/Form";
import { useState } from "react";
import Filter from "./expense-tracker/expenseComponents/Filter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "example",
      amount: 0,
      category: "",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <div className="parentDiv">
        <Form
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="parentDiv">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <div className="parentDiv">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
