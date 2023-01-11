// Bootstrap Components
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// Custom Components
import Cards from './components/Card/Cards.js';
import CreateCategoryCard from './components/Card/CreateCategoryCard.js';

// Data for application
import data from '../../utils/db.json';

import './styles/Cards.css';

const onClickHandlers = {
	createNewCategory: () => {
		// Will need to route is to a form which will create at category card for the game
		console.log('Taking you to create page');
	},
	selectCategory: () => {
		console.log('Selecting Category');
	},
};

const Home = () => {
	return (
		<>
			<main>
				<h1 className="main-heading">Family Charades!</h1>
				<section className="main-homepage">
					<Row>
						<CreateCategoryCard
							createNewCategory={
								onClickHandlers.createNewCategory
							}
						/>
						<Cards
							selectCategory={onClickHandlers.selectCategory}
							categories={data}
						/>
					</Row>
				</section>
			</main>
		</>
	);
};

export default Home;
