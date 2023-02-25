import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItem";

function App() {
  const expense = [
    { id: 1, title: "pot", amount: 12, date: new Date(2022, 5, 14) },
    { id: 2, title: "glass", amount: 10, date: new Date(2022, 7, 20) },
    { id: 3, title: "fake jewlery", amount: 8, date: new Date(2022, 9, 5) },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Mehrdad
        </a>
        <ExpenseItems
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        />
        <ExpenseItems
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        />
        <ExpenseItems
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        />
      </header>
    </div>
  );
}

export default App;
