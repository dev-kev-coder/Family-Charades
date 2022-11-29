import { Route, Routes } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';

// Import pages for application
import Login from './pages/Login/Login.js';
import Home from './pages/Home.js';

const App = () => {
    return (
        <div>
            <Routes>
                {/* <Container fluid> */}
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                {/* </Container> */}
            </Routes>
        </div>
    );
};

export default App;
