import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <button onClick={decrement} style={styles.button}>-</button>
        <span style={styles.counter}>{count}</span>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
   
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    border: '2px solid #333',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    width: 'fit-content'
  },
  counter: {
    fontSize: '2rem',
    margin: '0 20px',
    minWidth: '50px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.5rem',
  },
};

export default Counter;
