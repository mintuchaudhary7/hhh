import React from "react";
import moment from "moment";

const HighestLowestDay = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div>
        <h2>Daily Expense Highlights</h2>
        <p>No expenses recorded yet!</p>
      </div>
    );
  }

  // Group expenses by day
  const groupedByDay = expenses.reduce((group, expense) => {
    const day = moment(expense.date).format("dddd"); // Get day name
    group[day] = (group[day] || 0) + parseFloat(expense.amount);
    return group;
  }, {});

  // Identify highest and lowest days
  const days = Object.keys(groupedByDay);
  const highestDay = days.reduce((a, b) =>
    groupedByDay[a] > groupedByDay[b] ? a : b
  );
  const lowestDay = days.reduce((a, b) =>
    groupedByDay[a] < groupedByDay[b] ? a : b
  );

  return (
    <div>
      <h2>Daily Expense Highlights</h2>
      <p>
        Highest Expense Day: {highestDay} (${groupedByDay[highestDay]?.toFixed(2)})
      </p>
      <p>
        Lowest Expense Day: {lowestDay} (${groupedByDay[lowestDay]?.toFixed(2)})
      </p>
    </div>
  );
};

export default HighestLowestDay;
