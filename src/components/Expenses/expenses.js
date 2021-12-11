import ExpenseItem from "./expenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./expenses.css";
import Card from "../UI/card";
import { useState } from "react/cjs/react.development";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const newFilterHandler = (result) => {
    setFilteredYear(result);
    console.log(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onNewFilter={newFilterHandler}
      ></ExpensesFilter>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
