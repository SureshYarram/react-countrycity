import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavbarIs } from './Components/Navbar';

 
function App() {
  return (
    <div className="App">
      <NavbarIs/>
      <AllRoutes/>
    </div>
  );
}

export default App;
