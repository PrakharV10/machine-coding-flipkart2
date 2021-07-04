import React from 'react';
import { Route, Routes } from 'react-router';
import { NavBar } from './Components';
import { Cart, ProductList } from './Pages';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<ProductList />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
