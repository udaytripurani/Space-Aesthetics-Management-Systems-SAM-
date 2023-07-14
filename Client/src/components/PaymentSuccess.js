import React from 'react';

const PaymentSuccess = () => {
  // Define inline styles
  const purchaseSuccessCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const circleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    marginBottom: '20px',
  };

  const checkmarkStyle = {
    fontSize: '48px',
    color: 'white',
  };

  return (
    <div style={purchaseSuccessCardStyle}>
      <div style={circleStyle}>
        <i style={checkmarkStyle}>✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
};

export default PaymentSuccess;
