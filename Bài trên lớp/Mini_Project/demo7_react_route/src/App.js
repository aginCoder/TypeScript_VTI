import "./App.css";
import Menu from "./Components/Menu";
import { route } from "./Routes/Route";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="container">
      {/* Menu */}
      <Menu />
      {/* Content */}
      {route}
    </div>
  );
}

export default App;