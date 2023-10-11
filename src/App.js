
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="bg-bgViolet min-h-screen flex justify-center items-center">
      <div className='flex flex-col w-5/6 gap-16'>
      <Navbar/>
      <Login/>
      </div>
    </div>
  );
}

export default App;
