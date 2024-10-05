import React, { useState } from 'react';

 // Import the CSS file for styling

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        const heightInMeters = height / 100; // Convert height from cm to meters
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
        categorizeBMI(bmiValue);
    };

    const categorizeBMI = (bmiValue) => {
        if (bmiValue < 18.5) {
            setCategory('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setCategory('Normal weight');
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obesity');
        }
    };

    return (
        <div   className="calculator-container bg-info text-dark">
            <h1>BMI Calculator</h1>
            <form className="calculator-form" onSubmit={calculateBMI}>
                <div className="form-group">
                    <label>
                        Weight (kg):
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group ">
                    <label>
                        Height (cm):
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <button type="submit" className="calculate-button bg-info" >Calculate BMI</button>
            </form>
            {bmi && (
                <div className="result">
                    <h2>Your BMI: {bmi}</h2>
                    <p>Category: {category}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
