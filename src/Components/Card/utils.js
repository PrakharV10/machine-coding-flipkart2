export function isProductInCart(cart, product) {
	if (cart.find((one) => one === product)) return true;
	return false;
}
