export const ENDPOINT = "https://gql.tokopedia.com/";

export const NORMALIZED_SEARCH_PARAMETER_KEY = {
	orderBy: "ob",
	goldMerchant: "goldmerchant",
	query: "q",
	rating: "rt",
	priceMin: "pmin",
	priceMax: "pmax",
	searchType: "st",
	safeSearch: "safe_search",
	filterCity: "fcity"
} as Record<string, string>;

export const PARAMETER_DELIMITER = {
	condition: "#",
	shipping: "#",
	filterCity: "#",
	rt: ",",
} as Record<string, string>;

export const QUERY = `
query SearchProductQueryV4($params: String!) {
	ace_search_product_v4(params: $params) {
		header {
		totalData
		totalDataText
		processTime
		responseCode
		errorMessage
		additionalParams
		keywordProcess
		__typename
		}
		data {
		isQuerySafe
		ticker {
			text
			query
			typeId
			__typename
		}
		redirection {
			redirectUrl
			departmentId
			__typename
		}
		related {
			relatedKeyword
			otherRelated {
			keyword
			url
			product {
				id
				name
				price
				imageUrl
				rating
				countReview
				url
				priceStr
				wishlist
				shop {
				city
				isOfficial
				isPowerBadge
				__typename
				}
				ads {
				id
				productClickUrl
				productWishlistUrl
				shopClickUrl
				productViewUrl
				__typename
				}
				__typename
			}
			__typename
			}
			__typename
		}
		suggestion {
			currentKeyword
			suggestion
			suggestionCount
			instead
			insteadCount
			query
			text
			__typename
		}
		products {
			id
			name
			ads {
			id
			productClickUrl
			productWishlistUrl
			productViewUrl
			__typename
			}
			badges {
			title
			imageUrl
			show
			__typename
			}
			category: departmentId
			categoryBreadcrumb
			categoryId
			categoryName
			countReview
			discountPercentage
			gaKey
			imageUrl
			labelGroups {
			position
			title
			type
			__typename
			}
			originalPrice
			price
			priceRange
			rating
			shop {
			id
			name
			url
			city
			isOfficial
			isPowerBadge
			__typename
			}
			url
			wishlist
			sourceEngine: source_engine
			__typename
		}
		__typename
		}
		__typename
	}
}`;

export const ORDER_BY = {
	LOWEST_PRICE: 3,
	HIGHEST_PRICE: 4,
	REVIEW: 5,
	NEWEST: 9,
	MOST_RELEVANT: 23,
} as const;

export const FILTER_CITY = {
	BANDUNG: 165,
        BOGOR: 168,
	KAB_BANDUNG: 148,
	KAB_BANDUNG_BARAT: 149,
	CIMAHI: 169
} as const;
export const SEARCH_TYPE = {
	PRODUCT: "product",
	SHOP: "shop",
} as const;

export const CONDITION = {
	NEW: 1,
	USED: 2,
} as const;

export const SHIPPING = {
	JNE: 1,
	TIKI: 2,
	POS_INDONESIA: 4,
	WAHANA: 6,
	GO_SEND: 10,
	SICEPAT: 11,
	NINJA_EXPRESS: 12,
	GRAB_EXPRESS: 13,
	JNT: 14,
	REX: 16,
	ANTERAJA: 23,
	LION_PARCEL: 24,
} as const;
