import { test } from "@playwright/test";

test("Api Testing", async ({ request }) => {
  const response = await request.get("https://fakestoreapi.com/carts");
  const body = await response.json();
  console.log(body);
  console.log(response.status());
});
