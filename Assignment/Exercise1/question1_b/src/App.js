import './App.css';

function App() {
  const firstName = "Phạm Gia";
  const lastName = "Ân";
  const age = 20;

  const getFullName = () => {
    return `${firstName} ${lastName}`;
  };
  const getAge = () => {
    return `${age}`;
  };

  return (
    <div className="App">
      <h1>FullName: {getFullName()}</h1> 
      <h1>Age: {getAge()}</h1> 
    </div>
  );
}

export default App;
