import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing/routing';
import Registration from './components/Registartion';
import { useSelector } from 'react-redux';
import Users from './components/Users';

function App() {
    
  return (
    <div>
   <Routing/>
    </div>
  );
}

export default App;
