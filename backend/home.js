import React, { useState } from 'react';
import moment from 'moment';

const Home = () => {
    const [formData, setFormData] = useState({
        expense: '',
        category: '',
        amount: '',
    });

    const [submittedTime, setSubmittedTime] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the current time using moment.js
        const timeOfSubmission = moment().format('MMMM ');
        const week = moment().week();
        const startWeek =  moment().startOf('week').format('MMMM Do YYYY');
        const endWeek = moment().endOf('week').format('MMMM Do YYYY');
 
        console.log('Form submitted:', formData);
        console.log('Submission Time:', timeOfSubmission);
        console.log(week)
        console.log(startWeek);
        console.log(endWeek);

        // Update state with the time of submission
        setSubmittedTime(timeOfSubmission);

        // Reset the form fields
        setFormData({ expense: '', category: '', amount: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Add Expense</h2>

                {/* Expense Name Input */}
                <div className="mb-4">
                    <label
                        htmlFor="expense"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Expense
                    </label>
                    <input
                        type="text"
                        id="expense"
                        name="expense"
                        value={formData.expense}
                        onChange={handleChange}
                        placeholder="Enter expense name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Category Input */}
                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Enter category"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                    <label
                        htmlFor="amount"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Add Expense
                    </button>
                </div>
            </form>

            {/* Display Submitted Time */}
            {submittedTime && (
                <div className="mt-4 text-gray-700">
                    <p>
                        <strong>Form Submitted On:</strong> {submittedTime}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Home;
