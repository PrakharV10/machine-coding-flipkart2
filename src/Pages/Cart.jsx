import React from 'react';
import { CartDisplay, PriceTotal } from '../Components';
import SaveLaterCard from '../Components/SaveLaterCard/SaveLaterCard';
import { useCart } from '../Context/Cart-Context';

function Cart() {
	const {
		cartState: { saveLater },
		cartDispatch,
	} = useCart();
	return (
		<>
			<div className='flex justify-between md:w-9/12 m-auto mt-4'>
				<CartDisplay />
				<PriceTotal />
			</div>

			<div className='md:w-9/12 m-auto mt-4 font-medium'>SAVED FOR LATER</div>

			<div className='flex flex-wrap md:w-9/12 m-auto mt-4'>
				{saveLater.map((one) => {
					return (
						<div>
							<SaveLaterCard product={one} cartDispatch={cartDispatch} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Cart;
