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
			<div className='flex'>
				{cart.map((one) => {
					return (
						<div>
							<CartCard product={one} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CartDisplay;
