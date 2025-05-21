![ChatGPT Image May 21, 2025, 05_52_50 PM (1)](https://github.com/user-attachments/assets/e181357f-6bfa-4db8-8796-7a4f601f71e3)

(_AI generated image_)

## Test Cases & My Implementation Approach

### 1. Country Search and Selection

* **Test Objective:** To confirm that I can successfully search for a country (specifically "Japan") and select it from a dynamically appearing dropdown list.
* **My Implementation Approach:**
    * I begin by navigating to the main page where the search functionality is.
    * I have located the search input field (e.g., `input[placeholder='Search for a country...']`) and use `await searchInput.fill("Japan")` to type the country name. Playwright's `fill()` method is perfect here as it automatically waits for the input to be ready for typing.
    * Also, to ensure the dynamic dropdown data is loaded, I have implemented `page.waitForResponse()` to explicitly wait for the `GET` request to `https://www.airalo.com/api/v2/store/search/?q=japan` to return a `200 OK` status
    * Once the API response is confirmed, I have located the specific `<span>` element for "Japan" using its `data-testid="Japan-name"`
    * Finally, then I have used `await optionJapan.click()`. Playwright's `click()` method automatically waits for the element to be present in the DOM for interaction.
      

### 2. Package Detail Verification (Pop-up)

* **Test Objective:** To verify that after selecting a package the displayed title and other key details within that pop-up are as expected.
* **My Implementation Approach:**
    * This test assumes that clicking a package card on the main page has already opened the package details pop-up.
    * My first step is to wait for the main pop-up container (`div[data-testid="package-detail"]`) to become visible on the page using `await expect(packageDetailPopup).toBeVisible()`. This ensures the modal has fully loaded.
    * Next, I have located the package title (e.g., "Moshi Moshi") within the pop-up. I have used a precise locator like `packageDetailPopup.locator('div[data-testid="sim-detail-operator-title"] p')` to specifically target the `<p>` tag inside the sim-detail-operator-title `div` within the pop-up's scope
    * I have used `await expect(packageTitleLocator).toHaveText('Moshi Moshi')` to assert that the title is correct. I applied similar the `toHaveText()` assertions for other details like Coverage, Data, Validity, and Price, using their `data-testid` attributes within the `sim-detail-info-list` section.
      

## Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/pritampatil4/test-functional-airalo.git](https://github.com/pritampatil4/test-functional-airalo.git)
    cd test-functional-airalo
    ```

2.  **Install dependencies:**
    (Requires Node.js and npm/yarn installed)
    ```bash
    npm install # Or yarn install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

---

## How to Run Tests

**Note on TypeScript:** These tests are written in TypeScript, and Playwright automatically handles compilation during execution, so no manual `tsc` step is required.

* **Run all tests:**
    ```bash
    npx playwright test
    ```

* **Run tests in a specific browser (e.g., Chrome):**
    ```bash
    npx playwright test --project=chromium
    ```

* **Show the browser window while running:**
    ```bash
    npx playwright test --headed
    ```

* **Run tests with the Playwright Inspector (for debugging):**
    ```bash
    npx playwright test --debug
    ```

---
