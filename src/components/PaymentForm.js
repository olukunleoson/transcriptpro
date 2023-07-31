import React, { useState } from 'react';

const PaymentForm = ({ onSuccess, onFailure }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to process the payment (you can implement this with your chosen payment gateway)
    const isPaymentSuccessful = true; // Replace this with actual payment processing logic
    if (isPaymentSuccessful) {
      onSuccess(); // Call the onSuccess callback if payment is successful
    } else {
      onFailure(); // Call the onFailure callback if payment is not successful
    }
  };

  return (
    <div>
      <h3>Payment Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardHolderName">Card Holder Name:</label>
          <input
            type="text"
            name="cardHolderName"
            id="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            id="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ccv">CCV:</label>
          <input
            type="text"
            name="ccv"
            id="ccv"
            value={paymentDetails.ccv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
