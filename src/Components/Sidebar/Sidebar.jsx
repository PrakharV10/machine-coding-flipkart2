import React from 'react';

function Sidebar() {
	return (
		<div className='w-72 hidden md:block bg-white shadow h-full'>
			<div className='font-regular mt-2 p-4 flex justify-between items-center'>
				<span>Filters</span>
				<span className='text-red-500 text-xs font-medium cursor-pointer'>CLEAR ALL</span>
			</div>
		</div>
	);
}

export default Sidebar;
