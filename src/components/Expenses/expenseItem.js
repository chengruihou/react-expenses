import React, { useState } from "react";
import "./expenseItem.css";
import ExpenseDate from "./expenseDate";
import Card from "../UI/card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //always return an array with 2 elem
  //first is the value, second is a function that updates it

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
