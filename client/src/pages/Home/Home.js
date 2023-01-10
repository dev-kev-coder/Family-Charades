import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './components/Card/Cards.js';
import data from '../../utils/db.json';

import './styles/Cards.css';

const Home = () => {
	return (
		// To-do: We will need to generate a series of cards.
		// We will map through a data set that is retrive by and API call
		// Default value is an empty array

		// We will constantly have a default "Create New Deck Card" that will be
		<>
			<main>
				<h1 className="main-heading">Family Charades!</h1>
				<section className="main-homepage">
					<Row>
						<Col lg="3">
							<div className="initial-create-card">
								<h1>Testds</h1>
							</div>
						</Col>
						<Cards categories={data} />
					</Row>
				</section>
			</main>
		</>
	);
};

export default Home;
