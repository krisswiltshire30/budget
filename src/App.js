import React, { useRef, useEffect } from 'react';
import BudgetPie from './piechart';
import ExpensesTable from './ExpensesTable';
import './App.css';

const data = [10, 20, 30, 40];

function App() {
  const svgRef = useRef();
  return (
    <div className="App">
      <div className="Piechart"><BudgetPie /></div>
      <hr className="Line1" />
      <div className="Line2"></div>
      <div className="expensesTable"></div>
    </div>
  );
}

export default App;;
