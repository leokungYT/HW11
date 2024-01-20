const { useState, useEffect } = React;

const CounterApp = () => {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const handleAddCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      { id: prevCounters.length + 1, value: 0 },
    ]);
  };

  const handleIncrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, value: Math.max(counter.value - 1, 0) } // Ensure value doesn't go below 0
          : counter
      )
    );
  };

  const handleReset = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: 0 } : counter
      )
    );
  };

  const handleRemove = (id) => {
    setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));
  };

  useEffect(() => {
    const sum = counters.reduce((acc, counter) => acc + counter.value, 0);
    document.querySelector(".show-sum").textContent = `Sum = ${sum}`;
  }, [counters]);

  return (
    <>
      <h1 className="show-sum">Sum = 0</h1>
      <div className="ozxx">
        <button className="btn-add" onClick={handleAddCounter}>
          Add Counter
        </button>
      </div>
      <div className="ozx">
        {counters.map((counter) => (
          <div className="oz" key={counter.id}>
            <button className="btn1" onClick={() => handleIncrement(counter.id)}>
              +
            </button>
            <h3 className="number">{counter.value}</h3>
            <button className="btn2" onClick={() => handleDecrement(counter.id)}>
              -
            </button>
            <button className="btn3" onClick={() => handleReset(counter.id)}>
              C
            </button>
            <button className="btn3" onClick={() => handleRemove(counter.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CounterApp />);
