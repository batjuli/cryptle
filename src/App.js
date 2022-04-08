import './App.css';

import Main from './pages/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='root'>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
