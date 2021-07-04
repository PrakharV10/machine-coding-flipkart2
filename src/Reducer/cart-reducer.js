import products from '../data/products.json';

const initialCartState = {
	cart: [],
	products: products,
	saveLater: [],
};

function cartReducer(state, { type, payload }) {
	switch (type) {
		case 'ADD_TO_CART':
			return { ...state, cart: [...state.cart, payload.product] };
		case 'REMOVE_FROM_CART':
			return { ...state, cart: state.cart.filter((one) => one.id !== payload.product.id) };
		case 'ADD_TO_LATER':
			return { ...state, saveLater: [...state.saveLater, payload.product] };
		case 'REMOVE_FROM_LATER':
			return {
				...state,
				saveLater: state.saveLater.filter((one) => one.id !== payload.product.id),
			};
		default:
			return state;
	}
}

export { initialCartState, cartReducer };
