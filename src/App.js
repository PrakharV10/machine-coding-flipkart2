import React from 'react';
import { Route, Routes } from 'react-router';
import { NavBar } from './Components';
import { Cart, ProductList, SaveLater } from './Pages';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<ProductList />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/savelater' element={<SaveLater />} />
			</Routes>
		</div>
	);
}

export default App;
