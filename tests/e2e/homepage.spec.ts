import { expect, test } from "@playwright/test";

test("homepage minigame defaults to v3 and supports the main answer flow", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  const answers = (await page.request.get("/api/v1").then((response) => response.json())) as Record<
    string,
    string[]
  >;

  await expect(page.getByRole("button", { name: "v3" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "v4" })).toHaveAttribute("aria-pressed", "false");

  const prompt = page.getByTestId("css-prompt");
  const input = page.getByLabel("Tailwind class answer");
  await expect(prompt).not.toHaveText("...");

  const firstCss = (await prompt.textContent())?.trim() ?? "";
  await input.fill(answers[firstCss][0]);
  await input.press("Enter");
  await expect(page.getByText("Your score: 1/8")).toBeVisible();
  await page.waitForTimeout(950);

  const secondCss = (await prompt.textContent())?.trim() ?? "";
  await input.fill("__wrong__");
  await input.press("Enter");
  await expect(page.getByLabel("Correct answer")).toHaveValue(
    new RegExp(answers[secondCss][0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
  );
  await page.waitForTimeout(3100);

  await page.getByRole("button", { name: "v4" }).click();
  await expect(page.getByRole("button", { name: "v4" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("Your score: 0/8")).toBeVisible();

  for (let index = 0; index < 8; index += 1) {
    const css = (await prompt.textContent())?.trim() ?? "";
    await input.fill(answers[css][0]);
    await input.press("Enter");
    await expect(page.getByText(`Your score: ${index + 1}/8`)).toBeVisible();
    await page.waitForTimeout(950);
  }

  await expect(page.getByRole("button", { name: "Play Again" })).toBeVisible();
  await page.getByRole("button", { name: "Show answers" }).click();
  await expect(page.locator("[data-show-answer-modal='true']").getByText("Answers", { exact: true })).toBeVisible();
  await expect(page.locator("[data-show-answer-modal='true'] [class*='text-sky-300']").first()).toBeVisible();

  await page.getByRole("button", { name: "Close answers" }).click();
  await page.getByRole("button", { name: "Play Again" }).click();
  await expect(page.getByText("Your score: 0/8")).toBeVisible();
});
