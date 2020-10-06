import { Product, SearchParameters } from "./types";
import * as c from "./constants";


export const parameterToSearchQuery = async (obj: Partial<SearchParameters>): Promise<string> => {
	const query = [];
	for (let [key, value] of Object.entries(obj)) {
		key = key in c.NORMALIZED_SEARCH_PARAMETER_KEY ? c.NORMALIZED_SEARCH_PARAMETER_KEY[key] : key;
		if (value && value.constructor === Array) {
			if (key in c.PARAMETER_DELIMITER) value = value.join(c.PARAMETER_DELIMITER[key]);
			else value = value.join(",");
		}
		query.push(`${key}=${encodeURIComponent(value as string)}`);
	}
	return query.join("&");
};


export const normalizeProductResult = (product: Product<"Raw">): Product<"Normalized"> => {
	const keyToRemove = ["__typename", "ads", "gaKey", "wishlist", "sourceEngine"];
	let newProduct: Product = product;
	newProduct = JSON.parse(JSON.stringify(product, (k,v) => (keyToRemove.includes(k) )? undefined : v));
	newProduct.originalPrice = +product.originalPrice.replace(/\D/g,"");
	newProduct.price = +product.price;
	return newProduct;
};



