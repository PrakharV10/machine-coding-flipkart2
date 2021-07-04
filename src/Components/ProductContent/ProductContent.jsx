import React from 'react';
import { useCart } from '../../Context/Cart-Context';
import Card from '../Card/Card';

function ProductContent() {
	const {
		cartState: { products },
	} = useCart();

	return (
		<div className='w-screen flex-1 mx-2 md:ml-2 md:mr-0'>
			<div className='h-16 mt-1 p-2 flex items-center font-normal'>Jackets and Tshirts</div>
			<div className='flex flex-wrap justify-between md:justify-start'>
				{products.map((product) => {
					return (
						<div key={product.id}>
							<Card product={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductContent;
