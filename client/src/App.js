import {Route, Routes} from 'react-router-dom';

// Import pages for application
import Login from './pages/Login.js';
import Home from './pages/Home.js';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;