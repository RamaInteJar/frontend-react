import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="text-red-500 text-3xl bg-yellow-500 h-32 text-center">
    <Header/>
    <Outlet/>
    </div>
  );
}

export default App;
