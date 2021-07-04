import React from 'react';

function SaveLaterCard({ product, cartDispatch }) {
	function moveCartHandler() {
		cartDispatch({ type: 'REMOVE_FROM_LATER', payload: { product } });
		cartDispatch({ type: 'ADD_TO_CART', payload: { product } });
	}

	return (
		<div className='w-48 h-80 mt-0 ml-0 cursor-pointer shadow-sm transition-shadow duration-300 ease-in-out rounded-sm hover:shadow-lg md:w-64 md:h-96 md:m-4 md:ml-0 md:mt-0'>
			<div className='h-40 md:h-60 w-full overflow-hidden object-contain'>
				<img src={product.image} alt='product-display' />
			</div>
			<div className='font-medium text-sm mt-2 mx-2 opacity-50'>{product.brand}</div>
			<div className='font-light text-sm mt-2 mx-2'>{product.name}</div>
			<div className='flex text-sm mt-2 mx-2'>
				<span className='mr-2 font-medium'>Rs.{product.price}</span>
				<span className='mr-2 font-light line-through'>Rs.{product.actualPrice}</span>
				<span className='mr-2 font-medium text-green-600'>{product.discount}% Off</span>
			</div>
			<button
				onClick={() => cartDispatch({ type: 'REMOVE_FROM_LATER', payload: { product } })}
				className='bg-blue-600 text-white px-3 py-2 text-xs mt-4 mx-2 rounded-md font-medium transition-colors hover:bg-blue-700'
			>
				REMOVE
			</button>
			<button
				onClick={moveCartHandler}
				className='bg-white text-blue-500 border-2 border-blue-500 px-3 py-2 text-xs mt-4 mx-2 rounded-md font-medium'
			>
				MOVE TO CART
			</button>
		</div>
	);
}

export default SaveLaterCard;
