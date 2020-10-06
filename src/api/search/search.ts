import { Product, SearchParameters } from "./types";
import axios from "../../common/axios";
import * as c from "./constants";
import { normalizeProductResult, parameterToSearchQuery } from "./helper";

export const search = async (parameters: Partial<SearchParameters> = {}): Promise<Product<"Normalized">[]> => {
	parameters = {
		device: "desktop",
		scheme: "https",
		source: "search",
		safeSearch: false,
		related: true,
		goldMerchant: false,
		official: false,
		orderBy: c.ORDER_BY.MOST_RELEVANT,
		query: "",
		priceMin: 0,
		priceMax: 0,
		rows: 10,
		searchType: c.SEARCH_TYPE.PRODUCT,
		start: 0,
		rating: [],
		shipping: [],
		condition: [],
		...parameters
	};

	const response = await axios(c.ENDPOINT, {
		method: "POST",
		data: JSON.stringify({
			query: c.QUERY,
			variables: { 
				params: await parameterToSearchQuery(parameters)
			},
		}),
	});

	return await Promise.all(response.data.data.ace_search_product_v4.data.products.map(normalizeProductResult));
};