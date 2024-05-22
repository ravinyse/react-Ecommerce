import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import PropTypes from 'prop-types';

const SearchItem = ({ cart, setCart }) => {
	const { term } = useParams();
	const [filterData, setFilterData] = useState([]);

	useEffect(() => {
		const filteredData = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
		setFilterData(filteredData);
	}, [term]);

	return <Product cart={cart} setCart={setCart} items={filterData} />;
};

SearchItem.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
	})).isRequired,
	setCart: PropTypes.func.isRequired,
};

export default SearchItem;
