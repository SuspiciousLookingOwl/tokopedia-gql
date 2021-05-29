import { SEARCH_TYPE, CONDITION, ORDER_BY, SHIPPING, FILTER_CITY } from "./constants";

export interface SearchParameters
	extends Record<string, string | string[] | number | number[] | boolean> {
	goldMerchant: boolean;
	official: boolean;
	condition: typeof CONDITION[keyof typeof CONDITION][];
	orderBy: typeof ORDER_BY[keyof typeof ORDER_BY];
	filterCity: typeof FILTER_CITY[keyof typeof FILTER_CITY][];
	/**
	 * Keyword of searching
	 */
	query: string;
	priceMin: number;
	priceMax: number;

	/**
	 * How many data to fetch, similar to `LIMIT` in SQL
	 */
	rows: number;

	/**
	 * Starting point to return the search result, similar to `OFFSET` in SQL
	 */
	start: number;

	/**
	 * Product rating, example: [3, 4, 5] will shows product with higher than 3 ratings
	 */
	rating: number | number[];
	shipping: typeof SHIPPING[keyof typeof SHIPPING][];
	related: boolean;
	safeSearch: boolean;
	device: "desktop";
	scheme: "https";
	source: "search";
	searchType: typeof SEARCH_TYPE[keyof typeof SEARCH_TYPE];
}

export interface Product<T = "Normalized" | "Raw"> {
	id: number;
	name: string;
	badges: {
		title: string;
		imageUrl: string;
		show: boolean;
	}[];
	category: number;
	categoryBreadcrumb: string;
	categoryId: number;
	categoryName: string;
	countReview: number;
	discountPercentage: number;
	imageUrl: string;
	labelGroups: {
		position: string;
		title: string;
		type: string;
	}[];
	originalPrice: T extends "Raw" ? string : number;
	price: T extends "Raw" ? string : number;
	priceRange: string;
	rating: number;
	shop: {
		id: number;
		name: string;
		url: string;
		city: string;
		isOfficial: boolean;
		isPowerBadge: boolean;
	};
	url: string;
}
