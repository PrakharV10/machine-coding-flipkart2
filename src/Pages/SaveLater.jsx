import React from 'react';
import { Card } from '../Components';
import { useCart } from '../Context/Cart-Context';

function SaveLater() {
	const {
		cartState: { saveLater },
	} = useCart();

	return (
		<div className='w-9/12 md:mt-4 m-auto flex'>
			{saveLater.map((one) => {
				return (
					<div>
						<Card product={one} />
					</div>
				);
			})}
		</div>
	);
}

export default SaveLater;
