import React from 'react';
import { useCart } from '../../Context/Cart-Context';
import CartCard from '../CartCard/CartCard';

function CartDisplay() {
	const {
		cartState: { cart },
	} = useCart();

	return (
		<div className='flex-1'>
			<div className='font-medium mb-4'>CART ITEMS ({cart.length} Items)</div>
			<div className='flex flex-wrap'>
				{cart.map((one) => {
					return (
						<div key={one.id}>
							<CartCard product={one} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CartDisplay;
