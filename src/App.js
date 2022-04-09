import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './pages/Main';
import Help from './pages/Help';
import PlayfairCipher from './pages/PlayfairCipher';
import CaesarCipher from './pages/CaesarCipher';
import ModernCiphers from './pages/ModernCiphers';

const App = () => {
  return (
    <div className='root'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/help' element={<Help />} />
        <Route path='/playfair' element={<PlayfairCipher />} />
        <Route path='/caesar' element={<CaesarCipher />} />
        <Route path='/modern' element={<ModernCiphers />} />
      </Routes>
    </div>
  );
};

export default App;
