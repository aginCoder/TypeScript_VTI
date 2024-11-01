import './App.css';

function App() {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <div className="App">
      <h1 onClick={handleClick}>Hello World</h1>
      <p>My first paragraph</p>
    </div>
  );
}

export default App;
