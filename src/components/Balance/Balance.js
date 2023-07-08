const Balance = ({ totalAmount }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h2 id='balance'>{totalAmount}</h2>
    </>
  );
};

export default Balance;
