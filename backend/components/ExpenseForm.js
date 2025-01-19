import React, { useState } from "react";
import moment from "moment";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: "",
    date: moment().format("YYYY-MM-DD"), // Defaults to today's date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData); // Pass data to parent component
    setFormData({
      category: "",
      description: "",
      amount: "",
      date: moment().format("YYYY-MM-DD"),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
