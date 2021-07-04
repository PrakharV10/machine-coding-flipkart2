import React from 'react';
import { useCart } from '../../Context/Cart-Context';

function PriceTotal() {
	const {
		cartState: { cart },
	} = useCart();

	function calculateActualPrice() {
		return cart.reduce((accum, curr) => {
			return accum + curr.actualPrice;
		}, 0);
	}

	function calculatePrice() {
		return cart.reduce((accum, curr) => {
			return accum + curr.price;
		}, 0);
	}

	return (
		<div className='w-72 shadow p-2 bg-white h-full'>
			<div className='text-md font-medium text-gray-400 border-b-2 border-gray-100'>
				PRICE DETAILS
			</div>
			<div className='flex mt-4 justify-between items-center'>
				<span>Actual Price</span>
				<span>Rs. {cart.length !== 0 ? calculateActualPrice() : 0}</span>
			</div>
			<div className='flex mt-4 justify-between items-center'>
				<span>Price</span>
				<span>Rs. {cart.length !== 0 ? calculatePrice() : 0}</span>
			</div>
			<button className='bg-blue-600 text-white px-3 py-2 text-xs mt-4 w-full rounded-sm font-medium transition-colors hover:bg-blue-700'>
				CHECKOUT
			</button>
		</div>
	);
}

export default PriceTotal;
