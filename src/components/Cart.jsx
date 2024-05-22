import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cart = ({ cart, setCart }) => {
	const handleClearCart = () => {
		setCart([]);
	};

	return (
		<>
			<div className="container my-5" style={{ width: "54%" }}>
				{cart.length === 0 ? (
					<div className="text-center">
						<h1>Your Cart is Empty</h1>
						<Link to="/" className="btn btn-warning">Continue Shopping...</Link>
					</div>
				) : (
					cart.map((product) => (
						<div key={product.id} className="card mb-3 my-5" style={{ width: '700px' }}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title} />
								</div>
								<div className="col-md-8">
									<div className="card-body text-center">
										<h5 className="card-title">{product.title}</h5>
										<p className="card-text">{product.description}</p>
										<button className="btn btn-primary mx-3">{product.price} ₹</button>
										<button className="btn btn-warning">Buy Now</button>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>

			{cart.length !== 0 && (
				<div className="container text-center my-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<button className="btn btn-warning mx-5">CheckOut</button>
					<button onClick={handleClearCart} className="btn btn-danger">Clear Cart</button>
				</div>
			)}
		</>
	);
};

Cart.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
	})).isRequired,
	setCart: PropTypes.func.isRequired,
};

export default Cart;
