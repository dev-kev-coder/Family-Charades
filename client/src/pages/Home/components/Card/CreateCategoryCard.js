import Col from 'react-bootstrap/Col';

const iconStyle = {
	fontSize: '3em',
};

const CreateCategoryCard = ({ createNewCategory }) => {
	return (
		<Col lg="3">
			<div onClick={createNewCategory} className="initial-create-card">
				<i className="bi bi-plus-circle-fill" style={iconStyle}></i>
			</div>
		</Col>
	);
};

export default CreateCategoryCard;
