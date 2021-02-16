# Tokopedia GQL

Simple Wrapper for Tokopedia GQL Api. Intended for usage in Node environment.

---

## Installation

```
npm i tokopedia-gql
```

---

## Example

```js
const toped = require("tokopedia-gql");

const run = async () => {
	const products = await toped.search({
		query: "Laptop",
		shipping: [toped.SHIPPING.JNE, toped.SHIPPING.TIKI, toped.SHIPPING.SICEPAT],
		rating: [4, 5],
		orderBy: toped.ORDER_BY.REVIEW,
		condition: toped.CONDITION.NEW,
		priceMax: 20000000,
	});

	console.log(products[0]);
};

run();
```

Output example:

```js
{
  id: 509988891,
  name: 'ACER SWIFT 3 SF314-i5 8265U|NVIDIA MX250 2GB|4GB|1TB|14" FHD|WIN10|',
  badges: [
    {
      title: 'Official Store',
      imageUrl: 'https://ecs7-p.tokopedia.net/img/official_store_badge.png',
      show: true
    }
  ],
  category: 3982,
  categoryBreadcrumb: 'komputer-laptop/laptop/laptop-consumer',
  categoryId: 297,
  categoryName: 'Komputer & Laptop',
  countReview: 45,
  discountPercentage: 7,
  imageUrl: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/5/12/69830966/69830966_82cf6f04-8212-4d85-adb7-2b999fac792c_758_758',
  labelGroups: [ { position: 'promo', title: 'Cashback', type: 'lightGreen' } ],
  originalPrice: 9999000,
  price: 9299000,
  priceRange: '',
  rating: 5,
  shop: {
    id: 6309604,
    name: 'Collins Official',
    url: 'https://www.tokopedia.com/collinsofficial',
    city: 'Jakarta Pusat',
    isOfficial: true,
    isPowerBadge: true
  },
  url: 'https://www.tokopedia.com/collinsofficial/acer-swift-3-sf314-i5-8265u-nvidia-mx250-2gb-4gb-1tb-14-fhd-win10?whid=0'
}
```

---

### Todo

-   [ ] More test coverage
-   [ ] Improve documentation
-   [ ] Implement more API endpoint (such as: get product information, get shop information, etc.)
