import './App.css';

function App() {
  const user = {
    avtUrl : 'https://i.pinimg.com/736x/3f/56/31/3f56319511721b6f32a252aed7e613f5.jpg',
    title: 'Phạm Gia Ân',
    content: 'My name is An, I am 20, I am from DakLak, I am study in VTI Academy'
  };
  return (
    <div className="App">
      <img src={user.avtUrl} alt="Avatar"></img>
      <h2>{user.title}</h2>
      <p>{user.content}</p>
    </div>
  );
}

export default App;
