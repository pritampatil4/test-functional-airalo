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
