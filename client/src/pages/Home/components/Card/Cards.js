import Col from 'react-bootstrap/Col';

const Cards = ({ categories }) => {
	const categoryKeys = Object.keys(categories);
	const categoryCards = categoryKeys.map((category, index) => {
		return (
			<Col key={index} lg="3">
				<div className="category-card">
					<h1>{category}</h1>
				</div>
			</Col>
		);
	});

	// return (
	// 	<>
	// 		<Col lg="3">
	// 			<div className="initial-create-card">
	// 				<h1>Testds</h1>
	// 			</div>
	// 		</Col>
	// 	</>
	// );
	return categoryCards;
};

export default Cards;
