import React from 'react';
import { ProductContent, Sidebar } from '../Components';

function ProductList() {
	return (
		<div className='flex'>
			<Sidebar />
			<ProductContent />
		</div>
	);
}

export default ProductList;
