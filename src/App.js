import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './pages/Main';
import Help from './pages/Help';

const App = () => {
  return (
    <div className='root'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </div>
  );
};

export default App;
