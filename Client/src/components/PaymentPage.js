import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log('Payment submitted:', {
      cardNumber,
      cardName,
      expiryDate,
      cvc,
    });

    // Redirect to the payment success page
    navigate('/payment-success');
  };


  // Define inline styles
  const paymentPageStyle = {
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const paymentFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  };

  const inputDivStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    marginTop: '20px',
  };
  return (
    <div style={paymentPageStyle}>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} style={paymentFormStyle}>
        <div style={inputDivStyle}>
          <label htmlFor="card-number" style={labelStyle}>
            Card Number:
          </label>
          <input
            id="card-number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputDivStyle}>
          <label htmlFor="card-name" style={labelStyle}>
            Cardholder Name:
          </label>
          <input
            id="card-name"
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputDivStyle}>
          <label htmlFor="expiry-date" style={labelStyle}>
            Expiry Date:
          </label>
          <input
            id="expiry-date"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputDivStyle}>
          <label htmlFor="cvc" style={labelStyle}>
            CVC:
          </label>
          <input
            id="cvc"
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Submit Payment
        </button>
      </form>
    </div>
  );
  
};

export default PaymentPage;
