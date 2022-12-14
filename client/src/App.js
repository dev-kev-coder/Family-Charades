import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Import pages for application
// import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';

const App = () => {
	return (
		<Container fluid>
			<Routes>
				{/* <Route path="/" element={<Login />} /> */}
				{/* <Route path="/Home" element={<Home />} /> */}
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Container>
	);
};

export default App;
