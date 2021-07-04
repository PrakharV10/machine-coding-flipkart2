import React from 'react';
import { CartDisplay, PriceTotal } from '../Components';

function Cart() {
	return (
		<div className='flex w-10/12 md:9/12 m-auto mt-4'>
			<CartDisplay />
			<PriceTotal />
		</div>
	);
}

export default Cart;
