import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-yellow-500 min-h-screen text-center">
    <Header/>
    <Outlet/>
    </div>
  );
}

export default App;
