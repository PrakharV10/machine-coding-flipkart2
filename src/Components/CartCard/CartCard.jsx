import React from 'react';
import { useCart } from '../../Context/Cart-Context';

function CartCard({ product }) {
	const { cartDispatch } = useCart();

	function saveLaterHander() {
		cartDispatch({ type: 'REMOVE_FROM_CART', payload: { product } });
		cartDispatch({ type: 'ADD_TO_LATER', payload: { product } });
	}

	function decreaseHandler() {
		if (product.quantity !== 1)
			cartDispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: { id: product.id } });
		else {
			cartDispatch({ type: 'REMOVE_FROM_CART', payload: { product } });
		}
	}

	return (
		<div className='w-40 h-80 mt-0 ml-0 cursor-pointer shadow-sm transition-shadow duration-300 ease-in-out rounded-sm hover:shadow-lg md:w-64 md:h-96 md:m-4 md:ml-0 md:mt-0'>
			<div className='h-40 md:h-60 w-full overflow-hidden object-contain'>
				<img src={product.image} alt='product-display' />
			</div>
			<div className='font-light text-sm mt-2 mx-2'>{product.name}</div>
			<div className='flex text-sm mt-2 mx-2'>
				<span className='mr-2 font-medium'>Rs.{product.price}</span>
				<span className='mr-2 font-light line-through'>Rs.{product.actualPrice}</span>
				<span className='mr-2 font-medium text-green-600'>{product.discount}% Off</span>
			</div>
			<div className='flex items-center mx-2 mt-2 max-w-max border-2 border-blue-500 rounded-sm'>
				<button
					onClick={decreaseHandler}
					className='w-5 h-5 flex justify-center items-center '
				>
					-
				</button>
				<span className='mx-1'>{product.quantity}</span>
				<button
					onClick={() =>
						cartDispatch({
							type: 'INCREASE_ITEM_QUANTITY',
							payload: { id: product.id },
						})
					}
					className='w-5 h-5 flex justify-center items-center'
				>
					+
				</button>
			</div>
			<button
				onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: { product } })}
				className='bg-blue-600 border-2 border-blue-600 text-white px-3 py-2 text-xs mt-2 mx-2 rounded-md font-medium transition-colors hover:bg-blue-700'
			>
				REMOVE
			</button>
			<button
				onClick={saveLaterHander}
				className='bg-white text-blue-500 border-2 border-blue-500 px-3 py-2 text-xs mt-2 mx-2 rounded-md font-medium'
			>
				SAVE FOR LATER
			</button>
		</div>
	);
}

export default CartCard;
