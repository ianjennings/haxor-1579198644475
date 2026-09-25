import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Haxor Production Tests", () => {
  it("should load the Haxor homepage and verify page content", async (context) => {
    const testdriver = TestDriver(context);

    // Launch Chrome navigating to the Haxor production homepage
    await testdriver.provision.chrome({ url: "https://haxor.sh" });

    // Verify the page loads successfully with expected content
    const result = await testdriver.assert("the Haxor website loaded successfully with header and navigation");
    expect(result).toBeTruthy();
  });

  it("should check the About page", async (context) => {
    const testdriver = TestDriver(context);

    // Launch Chrome navigating to the About page
    await testdriver.provision.chrome({ url: "https://haxor.sh/about/" });

    // Verify About page loaded
    const result = await testdriver.assert("the About Haxor page loaded and displays information about Haxor");
    expect(result).toBeTruthy();
  });
});
