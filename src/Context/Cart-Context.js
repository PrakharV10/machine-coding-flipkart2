import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialCartState } from '../Reducer/cart-reducer';

const CartContext = createContext();

export default function CartProvider({ children }) {
	const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
