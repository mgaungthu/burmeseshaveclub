import { test, expect } from "@playwright/test";

for (const path of ["/", "/about", "/privacy.html", "/terms.html", "/cancel-account"]) {
  test(`${path} renders with canonical metadata and no horizontal overflow`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(new URL(canonical!).href).toBe(
      `https://burmeseshaveclub.com${path}`,
    );
    await expect(
      page
        .getByRole("navigation", { name: "Footer navigation" })
        .getByRole("link", { name: "Delete Account" }),
    ).toHaveAttribute("href", "/cancel-account");
    for (const width of [1440, 375, 320]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
    }
    await page.screenshot({
      path: `test-results/${path === "/" ? "home" : path.slice(1)}-mobile.png`,
      fullPage: true,
    });
    expect(errors).toEqual([]);
  });
}

test("mobile navigation opens, closes with Escape, and navigates", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About Us" })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("contact form handles success and service failures without losing a failed message", async ({
  page,
}) => {
  let status = 200;
  await page.route("**/api/v1/contact", async (route) => {
    const payload = route.request().postDataJSON();
    expect(payload.email).toBe("test@example.com");
    await route.fulfill({
      status,
      contentType: status === 200 ? "application/json" : "text/html",
      body:
        status === 200
          ? JSON.stringify({
              message: "Thank you. Your message has been sent.",
            })
          : "<html>Service unavailable</html>",
    });
  });
  await page.goto("/#contact");
  const fill = async () => {
    await page.getByLabel("Your name", { exact: true }).fill("Test Customer");
    await page
      .getByLabel("Your email", { exact: true })
      .fill("test@example.com");
    await page
      .getByLabel("Message", { exact: true })
      .fill("Test message, intercepted in the browser.");
  };
  await fill();
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Your message has been sent",
  );
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue("");
  status = 503;
  await fill();
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText("Unable to send");
  await expect(page.getByLabel("Message", { exact: true })).not.toHaveValue("");
});

test("legacy links redirect and unknown pages return 404", async ({
  request,
}) => {
  const redirect = await request.get("/about.html", { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe("/about");
  for (const path of ["/privacy", "/terms"]) {
    const policy = await request.get(`${path}?from=legacy`, { maxRedirects: 0 });
    expect(policy.status()).toBe(301);
    expect(policy.headers().location).toBe(`${path}.html?from=legacy`);
  }
  expect((await request.get("/does-not-exist")).status()).toBe(404);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
});
