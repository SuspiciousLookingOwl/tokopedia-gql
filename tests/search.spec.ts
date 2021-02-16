import { search } from "../src/api/search/search";

test("search", async () => {
	const products = await search({
		query: "RTX 3080",
	});
	expect(products.length).toBeGreaterThanOrEqual(1);
});
