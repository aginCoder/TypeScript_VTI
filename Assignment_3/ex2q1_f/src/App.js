import './App.css';
import Table from './components/Table';

const App = () => {
  const columns = ['No', 'Language', 'Framework'];
  const data = [
    { No: '1', Language: 'PHP', Framework: 'Laravel' },
    { No: '2', Language: 'Java', Framework: 'Meteor' },
    { No: '3', Language: 'Android', Framework: 'Webkit' },
  ];

  return (
    <div>
      <h1>Table Example</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
