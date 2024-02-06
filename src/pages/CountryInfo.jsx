import React, { useState } from 'react';

const CountryInfo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <header>
        <h1>Country Info Page</h1>
        {/* You can add navigation links or other header content here */}
      </header>
      <main>
        <section>
          <h2>Counter</h2>
          <p>Current Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </section>
        <section>
          <h2>Info</h2>
          <p>
            This is a simple counter info page built using React.js. It
            demonstrates how to use state to manage a counter and update it
            through user interactions.
          </p>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <p>This is the footer of the counter info page</p>
        </div>
      </footer>
    </div>
  );
};

export default CountryInfo;
