import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  return (
    <div>
      <ExpenseDate date={props.date} />
      <p>{props.title}</p>
      <p>{props.amount}</p>
    </div>
  );
}

export default ExpenseItems;
