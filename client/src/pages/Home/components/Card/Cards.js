import Col from 'react-bootstrap/Col';

const Cards = ({ categories, selectCategory }) => {
	const categoryNames = Object.keys(categories);
	const categoryCards = categoryNames.map((category, index) => {
		return (
			<Col key={index} lg="3">
				<div onClick={selectCategory} className="category-card">
					<h1>{category}</h1>
				</div>
			</Col>
		);
	});
	return categoryCards;
};

export default Cards;
