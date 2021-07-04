import products from '../data/products.json';

const initialCartState = {
	cart: [],
	products: products,
	saveLater: [],
};

function cartReducer(state, { type, payload }) {
	switch (type) {
		case 'ADD_TO_CART':
			return { ...state, cart: [...state.cart, { ...payload.product, quantity: 1 }] };
		case 'REMOVE_FROM_CART':
			return { ...state, cart: state.cart.filter((one) => one.id !== payload.product.id) };
		case 'ADD_TO_LATER':
			return { ...state, saveLater: [...state.saveLater, payload.product] };
		case 'REMOVE_FROM_LATER':
			return {
				...state,
				saveLater: state.saveLater.filter((one) => one.id !== payload.product.id),
			};
		case 'INCREASE_ITEM_QUANTITY':
			return {
				...state,
				cart: state.cart.map((one) => {
					if (one.id === payload.id) return { ...one, quantity: one.quantity + 1 };
					return one;
				}),
			};
		case 'DECREASE_ITEM_QUANTITY':
			return {
				...state,
				cart: state.cart.map((one) => {
					if (one.id === payload.id) return { ...one, quantity: one.quantity - 1 };
					return one;
				}),
			};
		case 'INCREASE_SAVE_ITEM_QUANTITY':
			return {
				...state,
				saveLater: state.saveLater.map((one) => {
					if (one.id === payload.id) return { ...one, quantity: one.quantity + 1 };
					return one;
				}),
			};
		case 'DECREASE_SAVE_ITEM_QUANTITY':
			return {
				...state,
				saveLater: state.saveLater.map((one) => {
					if (one.id === payload.id) return { ...one, quantity: one.quantity - 1 };
					return one;
				}),
			};
		default:
			return state;
	}
}

export { initialCartState, cartReducer };
