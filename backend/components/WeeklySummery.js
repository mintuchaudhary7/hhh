import React from "react";
import moment from "moment";

const WeeklySummary = ({ expenses }) => {
  // Filter expenses by current week
  const startOfWeek = moment().startOf("week").format("YYYY-MM-DD");
  const endOfWeek = moment().endOf("week").format("YYYY-MM-DD");
  
  const weeklyExpenses = expenses.filter((expense) => {
    return expense.date >= startOfWeek && expense.date <= endOfWeek;
  });

  // Calculate weekly total
  const weeklyTotal = weeklyExpenses.reduce((sum, expense) => {
    return sum + parseFloat(expense.amount);
  }, 0);

  return (
    <div>
      <h2>Weekly Summary</h2>
      <p>Total Weekly Expenses: ${weeklyTotal.toFixed(2)}</p>
    </div>
  );
};

export default WeeklySummary;
