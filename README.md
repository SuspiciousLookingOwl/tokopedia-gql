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
        shipping: [
            toped.SHIPPING.JNE,
            toped.SHIPPING.TIKI,
            toped.SHIPPING.SICEPAT,
        ],
        rating: [4,5],
        orderBy: toped.ORDER_BY.REVIEW,
        condition: toped.CONDITION.NEW,
        priceMax: 20000000
    });

    console.log(products[0]);
}

run();
```
Output example:
```js
{
  id: 384418061,
  name: 'LAPTOP ASUS X441BA - AMD A4 9125 4GB 1TB VGA AMD R3 14" WIN10 RESMI',
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
  countReview: 766,
  discountPercentage: 6,
  imageUrl: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/4/2/5109002/5109002_af3c07d2-463f-47c0-9152-153c5a4543f8_1000_1000',
  labelGroups: [],
  originalPrice: 3999000,
  price: NaN,
  priceRange: '',
  rating: 5,
  shop: {
    id: 607744,
    name: 'Protech Computer',
    url: 'https://www.tokopedia.com/protechcom',
    city: 'Jakarta Pusat',
    isOfficial: true,
    isPowerBadge: true
  },
  url: 'https://www.tokopedia.com/protechcom/laptop-asus-x441ba-amd-a4-9125-4gb-1tb-vga-amd-r3-14-win10-resmi?whid=0'
}
```

---
### Todo
- [ ] More test coverage
- [ ] Improve documentation
- [ ] Implement more API endpoint (such as: get product information, get shop information, etc.)