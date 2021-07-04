export function isProductInCart(cart, product) {
	if (cart.find((one) => one.id === product.id)) return true;
	return false;
}
