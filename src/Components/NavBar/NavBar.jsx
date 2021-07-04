import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartIcon, SaveIcon } from '../../assets';

function NavBar() {
	const activeStyles = {
		opacity: '100%',
	};

	return (
		<div className='h-14 w-screen shadow-md bg-blue-600 flex justify-between items-center sticky top-0 z-40'>
			<div className='text-lg font-medium text-white ml-4 md:ml-20'>
				<Link to='/'>
					PVKart <span className='text-xs font-light'>v2.0</span>
				</Link>
			</div>
			<ul className='flex w-20 justify-between items-center text-white md:mr-20'>
				<li className='w-10 cursor-pointer hover:opacity-100 transition-all'>
					<NavLink to='/cart' activestyles={activeStyles}>
						<CartIcon />
					</NavLink>
				</li>
				<li className='w-10 cursor-pointer transition-all'>
					<NavLink to='/savelater' activestyles={activeStyles}>
						<SaveIcon />
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
