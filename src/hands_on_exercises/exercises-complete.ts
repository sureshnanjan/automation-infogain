/**
 * ============================================================================
 * TypeScript Exercises: Variables, Functions & Arrow Functions
 * ============================================================================
 *
 * Focus: Variables, Functions, Parameter Types, Arrow Functions with Array/String Methods
 * Total Exercises: 45 (10 + 15 + 10 + 10)
 *
 * Instructions:
 * - Complete each exercise in order
 * - Write your code below each TODO comment
 * - Test your solutions by running: npx ts-node exercises.ts
 * - Solutions are provided in SOLUTIONS.md
 * - Do not look at solutions until you've attempted the exercise!
 *
 * Tips:
 * - Use const by default, let when reassignment needed
 * - Add type annotations to all parameters and return types
 * - Use arrow functions for callbacks
 * - Use implicit returns when possible
 * - Chain array methods for clean code
 * - Test incrementally as you complete each exercise
 *
 * ============================================================================
 */

// ============================================================================
// SECTION 1: VARIABLES & BASIC FUNCTIONS (10 exercises)
// ============================================================================

console.log("\n=== SECTION 1: VARIABLES & BASIC FUNCTIONS ===\n");

/**
 * Exercise 1.1: Variable Declarations
 * ------------------------------------
 * Declare the following variables with appropriate types:
 * - A testName variable containing "Login Test"
 * - A timeout variable containing 5000
 * - A isPassed variable containing true
 * - A testData variable that can be null or an object with username and password
 */

// TODO: Declare variables here
let testname: string = "Login Test";
let timeout: number = 5000;
let isPassed: boolean = true;
let testdata: { userName: string | null; password: string | null };

/**
 * Exercise 1.2: Const vs Let
 * ---------------------------
 * Fix the following code by using appropriate variable declarations:
 * The browser variable should remain 'chrome' after the if block.
 *
 * Current code (BROKEN):
 * var browser = 'chrome';
 * var retries = 0;
 * if (true) {
 *     var browser = 'firefox';
 *     retries = retries + 1;
 * }
 * console.log(browser); // Should print 'chrome', not 'firefox'
 */

// TODO: Fix the code using const and let
const browser = "chrome";
let retries = 0;
if (true) {
  const browser = "firefox";
  retries = retries + 1;
}
console.log(browser);

/**
 * Exercise 1.3: Function with Type Annotations
 * ---------------------------------------------
 * Create a function calculateTestDuration that:
 * - Takes two parameters: startTime (number) and endTime (number)
 * - Returns the duration in milliseconds (number)
 * - Add proper type annotations to all parameters and return type
 *
 * Example:
 * calculateTestDuration(1000, 6000) // should return 5000
 */

/**
 * Create calculateTestDuration function
 * @param {number} startTime - Timeout in milliseconds
 * @param {number} endTime - Timeout in milliseconds
 * @returns {number} totalTime -Timeout in milliseconds
 */
function calculateTestDuration(startTime: number, endTime: number): number {
  let totalTime = endTime - startTime;
  return totalTime;
}
console.log(`Test duration is:${calculateTestDuration(1000, 6000)}`);

/**
 * Exercise 1.4: Optional Parameters
 * ----------------------------------
 * Create a function runTest that:
 * - Takes testName (string) as required parameter
 * - Takes retries (number) as optional parameter (default to 0)
 * - Takes timeout (number) as optional parameter (default to 5000)
 * - Returns a string: "Running [testName] with [retries] retries and [timeout]ms timeout"
 *
 * Example:
 * runTest('Login Test')
 * // returns "Running Login Test with 0 retries and 5000ms timeout"
 *
 * runTest('Signup Test', 3, 10000)
 * // returns "Running Signup Test with 3 retries and 10000ms timeout"
 */

/**
 * Create runTest function
 * @param {string} testName
 * @param {number} retries
 * @param {number} timeout - Timeout in milliseconds
 * @returns {string}
 */
function runTest(
  testName: string,
  retries: number = 0,
  timeout: number = 5000,
): string {
  return `${testName} ${retries} ${timeout}ms`;
}
console.log(runTest("Login Test"));
console.log(runTest("Signup Test", 3, 10000));

/**
 * Exercise 1.5: Rest Parameters
 * ------------------------------
 * Create a function executeTests that:
 * - Takes a suiteName (string) as first parameter
 * - Takes any number of test names as rest parameters (string[])
 * - Logs: "Suite: [suiteName]" and then each test name on a new line
 * - Returns the total number of tests
 *
 * Example:
 * executeTests('Login Suite', 'Test 1', 'Test 2', 'Test 3')
 * // Logs:
 * // Suite: Login Suite
 * // Test 1
 * // Test 2
 * // Test 3
 * // Returns: 3
 */

/**
 * Create executeTests
 * @param {string} suiteName
 * @param {string[]} testNames
 * @returns {number} test
 */
function executeTests(suiteName: string, testNames: string[]): number {
  for (const test of testNames) {
    console.log(test);
  }
  return testNames.length;
}

console.log(executeTests("Login Suite", ["Test 1", "Test 2", "Test 3"]));

/**
 * Exercise 1.6: Function Return Types
 * ------------------------------------
 * Create a function getTestResult that:
 * - Takes score (number) as parameter
 * - Returns "Excellent" if score >= 90
 * - Returns "Good" if score >= 70
 * - Returns "Needs Improvement" if score < 70
 * - Explicitly declare the return type as string
 *
 * Example:
 * getTestResult(95) // returns "Excellent"
 * getTestResult(75) // returns "Good"
 * getTestResult(60) // returns "Needs Improvement"
 */

/**
 * Create getTestResult function
 * @param {number} score
 * @returns {string} result
 */
function getTestResult(score: number): string {
  let result = "";
  if (score >= 90) {
    result = "Excellent";
  } else if (score >= 70) {
    result = "Good";
  } else if (score < 70) {
    result = "Needs Improvement";
  }
  return result;
}
console.log("Result is:");
console.log(getTestResult(95));
console.log(getTestResult(75));
console.log(getTestResult(60));

/**
 * Exercise 1.7: Arrow Function Basics
 * ------------------------------------
 * Convert this regular function to an arrow function:
 *
 * function multiply(a: number, b: number): number {
 *     return a * b;
 * }
 *
 * Example:
 * multiply(5, 3) // should return 15
 */

/**
 * Convert to arrow function
 * @param {number} a
 * @param {number} b
 * @returns
 */
const multiply = (a: number, b: number) => a * b;
console.log(multiply(5, 3));

/**
 * Exercise 1.8: Implicit Return
 * ------------------------------
 * Create an arrow function square that:
 * - Takes a number as parameter
 * - Returns the square of the number
 * - Uses implicit return (no curly braces)
 *
 * Example:
 * square(5) // returns 25
 * square(10) // returns 100
 */

/**
 * Create square arrow function
 * @param {number} param
 * @returns {number}
 */
const square = (param: number): number => param * param;
console.log(square(5));
console.log(square(10));

/**
 * Exercise 1.9: Arrow Function with No Parameters
 * ------------------------------------------------
 * Create an arrow function getTimestamp that:
 * - Takes no parameters
 * - Returns the current timestamp using Date.now()
 * - Uses implicit return
 *
 * Example:
 * getTimestamp() // returns current timestamp (e.g., 1703251200000)
 */

/**
 * Create getTimestamp arrow function
 * @returns
 */
const getTimestamp = (): number => {
  let current_Timestamp = Date.now();
  return current_Timestamp;
};
console.log(getTimestamp());
/**
 * Exercise 1.10: Arrow Function Returning Object
 * -----------------------------------------------
 * Create an arrow function createUser that:
 * - Takes name (string) and email (string) as parameters
 * - Returns an object with properties: name, email, and createdAt (current timestamp)
 * - Use implicit return with proper syntax for returning objects
 *
 * Example:
 * createUser('John', 'john@test.com')
 * // returns { name: 'John', email: 'john@test.com', createdAt: 1703251200000 }
 *
 * Hint: Wrap object in parentheses for implicit return: (name, email) => ({ ... })
 */

/**
 *  Create createUser arrow function
 * @param name
 * @param email
 */
const createUser = (name: string, email: string) => {
  name;
  email;
  createdAt: Date.now();
};
console.log(createUser("John", "john@test.com"));
// ============================================================================
// SECTION 2: ARRAY METHODS WITH ARROW FUNCTIONS (15 exercises)
// ============================================================================

console.log("\n=== SECTION 2: ARRAY METHODS WITH ARROW FUNCTIONS ===\n");

/**
 * Exercise 2.1: Array.map() - Transform to Uppercase
 * ---------------------------------------------------
 * Given:
 * const testNames = ['login test', 'signup test', 'checkout test'];
 *
 * Use .map() with an arrow function to create a new array with all test names in UPPERCASE.
 *
 * Expected output: ['LOGIN TEST', 'SIGNUP TEST', 'CHECKOUT TEST']
 */

const testNames = ["login test", "signup test", "checkout test"];
// TODO: Use .map() to convert to uppercase

/**
 * Exercise 2.2: Array.map() - Extract Property
 * ---------------------------------------------
 * Given:
 * const tests = [
 *     { id: 'TC-001', name: 'Login Test', passed: true },
 *     { id: 'TC-002', name: 'Signup Test', passed: false },
 *     { id: 'TC-003', name: 'Checkout Test', passed: true }
 * ];
 *
 * Use .map() to create an array containing only the test IDs.
 *
 * Expected output: ['TC-001', 'TC-002', 'TC-003']
 */

const tests = [
  { id: "TC-001", name: "Login Test", passed: true },
  { id: "TC-002", name: "Signup Test", passed: false },
  { id: "TC-003", name: "Checkout Test", passed: true },
];

/**
 * Extract only the IDs
 */
const testIDs = tests.map((test) => test.id);
console.log(testIDs);
/**
 * Exercise 2.3: Array.filter() - Get Passing Tests
 * -------------------------------------------------
 * Using the same tests array from 2.2, use .filter() to get only the tests that passed.
 *
 * Expected output: Array with TC-001 and TC-003 objects
 */

/**
 *Filter to get only passing
 */
const result = tests.filter((test) => test.passed);
console.log(result);

/**
 * Exercise 2.4: Array.filter() - Filter by Condition
 * ---------------------------------------------------
 * Given:
 * const scores = [95, 67, 88, 45, 92, 78, 53, 81];
 *
 * Use .filter() to get only scores that are 70 or above.
 *
 * Expected output: [95, 88, 92, 78, 81]
 */

const scores = [95, 67, 88, 45, 92, 78, 53, 81];

/**
 * Filter scores >= 70
 */
const filteredscore = scores.filter((scores) => scores >= 70);
console.log(filteredscore);

/**
 * Exercise 2.5: Array.reduce() - Sum
 * -----------------------------------
 * Using the scores array from 2.4, use .reduce() to calculate the total sum of all scores.
 *
 * Expected output: 599
 *
 * Hint: reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
 */

/**
 * Calculate total sum using reduce
 */
const reduce = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log("Total is:" + reduce);

/**
 * Exercise 2.6: Array.reduce() - Count Occurrences
 * -------------------------------------------------
 * Given:
 * const browsers = ['chrome', 'firefox', 'chrome', 'safari', 'chrome', 'firefox'];
 *
 * Use .reduce() to create an object that counts how many times each browser appears.
 *
 * Expected output: { chrome: 3, firefox: 2, safari: 1 }
 *
 * Hint: Start with empty object {}, for each browser: acc[browser] = (acc[browser] || 0) + 1
 */

const browsers = ["chrome", "firefox", "chrome", "safari", "chrome", "firefox"];

/**
 * Count occurrences of each browser
 */
const count = browsers.reduce((acc, browser) => {
  acc[browser] = (acc[browser] || 0) + 1;
  return acc;
}, {});
console.log("Browsers count:" + count);

/**
 * Exercise 2.7: Array.forEach() - Log with Index
 * -----------------------------------------------
 * Given:
 * const testCases = ['TC-001', 'TC-002', 'TC-003'];
 *
 * Use .forEach() to log each test case with its index: "1. TC-001", "2. TC-002", etc.
 *
 * Expected output:
 * 1. TC-001
 * 2. TC-002
 * 3. TC-003
 *
 * Hint: forEach provides (element, index) as parameters
 */

const testCases = ["TC-001", "TC-002", "TC-003"];
/**
 * Log each test case with index
 */
testCases.forEach((element, index) => {
  console.log(`${index + 1}. ${element}`);
});

/**
 * Exercise 2.8: Array.find() - Find First Match
 * ----------------------------------------------
 * Given:
 * const users = [
 *     { username: 'user1', role: 'user' },
 *     { username: 'admin1', role: 'admin' },
 *     { username: 'user2', role: 'user' }
 * ];
 *
 * Use .find() to get the first user with role 'admin'.
 *
 * Expected output: { username: 'admin1', role: 'admin' }
 */

const users = [
  { username: "user1", role: "user" },
  { username: "admin1", role: "admin" },
  { username: "user2", role: "user" },
];

/**
 * Find first admin user
 */
const role = users.find((user) => user.role === "admin");
console.log(role);
/**
 * Exercise 2.9: Array.some() - Check if Any
 * ------------------------------------------
 * Using the scores array from 2.4, use .some() to check if any score is below 50.
 *
 * Expected output: true (because 45 is below 50)
 *
 * Hint: .some() returns true if at least one element matches the condition
 */

/**
 * Check if any score is below 50
 */
const checkedScore = scores.some((score) => score < 50);
console.log(checkedScore);

/**
 * Exercise 2.10: Array.every() - Check if All
 * --------------------------------------------
 * Using the scores array from 2.4, use .every() to check if all scores are above 40.
 *
 * Expected output: true (all scores are above 40)
 *
 * Hint: .every() returns true only if ALL elements match the condition
 */

/**
 * Check if all scores are above 40
 */
const hasabove40 = scores.every((scores) => scores > 40);
console.log(hasabove40);

/**
 * Exercise 2.11: Chain Multiple Methods
 * --------------------------------------
 * Given:
 * const testResults = [
 *     { name: 'Test 1', score: 95, passed: true },
 *     { name: 'Test 2', score: 45, passed: false },
 *     { name: 'Test 3', score: 87, passed: true },
 *     { name: 'Test 4', score: 62, passed: false }
 * ];
 *
 * Chain methods to:
 * 1. Filter only passing tests
 * 2. Map to get their scores
 * 3. Calculate the average score using reduce
 *
 * Expected output: 91 (average of 95 and 87)
 *
 * Hint: array.filter(...).map(...).reduce(...) / filteredLength
 */

const testResults = [
  { name: "Test 1", score: 95, passed: true },
  { name: "Test 2", score: 45, passed: false },
  { name: "Test 3", score: 87, passed: true },
  { name: "Test 4", score: 62, passed: false },
];

/**
 * Calculate average score of passing tests
 */
const averageScore =
  testResults
    .filter((t) => t.passed)
    .map((t) => t.score)
    .reduce((sum, s) => sum + s, 0) /
  testResults.filter((t) => t.passed).length;
console.log(averageScore);
/**
 * Exercise 2.12: Array.sort() - Sort Numbers
 * -------------------------------------------
 * Given:
 * const durations = [1500, 3000, 800, 2200, 1000];
 *
 * Use .sort() with an arrow function to sort in ascending order.
 *
 * Expected output: [800, 1000, 1500, 2200, 3000]
 *
 * Important: .sort() modifies original array, so create a copy first using [...array]
 * Hint: For ascending order use: (a, b) => a - b
 */

const durations = [1500, 3000, 800, 2200, 1000];
/**
 * Sort in ascending order (create copy first)
 */
const sortedDuration = durations.sort((a, b) => a - b);
console.log(sortedDuration);

/**
 * Exercise 2.13: Array.sort() - Sort Objects
 * -------------------------------------------
 * Using the tests array from 2.2, sort the tests alphabetically by name.
 *
 * Expected output: Tests sorted as Checkout, Login, Signup
 *
 * Hint: Use .localeCompare() for string comparison in sort
 * Example: (a, b) => a.name.localeCompare(b.name)
 */

/**
 * Sort tests alphabetically by name (create copy first)
 */
const sortedTests = tests.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedTests);

/**
 * Exercise 2.14: Array.reduce() - Group By
 * -----------------------------------------
 * Given:
 * const testData = [
 *     { test: 'Test 1', status: 'passed' },
 *     { test: 'Test 2', status: 'failed' },
 *     { test: 'Test 3', status: 'passed' },
 *     { test: 'Test 4', status: 'failed' }
 * ];
 *
 * Use .reduce() to group tests by status.
 *
 * Expected output:
 * {
 *   passed: ['Test 1', 'Test 3'],
 *   failed: ['Test 2', 'Test 4']
 * }
 *
 * Hint: Initialize empty object, create array for each status if not exists, push test name
 */

const testData = [
  { test: "Test 1", status: "passed" },
  { test: "Test 2", status: "failed" },
  { test: "Test 3", status: "passed" },
  { test: "Test 4", status: "failed" },
];
// TODO: Group tests by status
// testData.reduce(testCases, status);
/**
 * Exercise 2.15: Complex Chain
 * -----------------------------
 * Given:
 * const testExecutions = [
 *     { name: 'Login', duration: 1500, browser: 'chrome', passed: true },
 *     { name: 'Signup', duration: 2000, browser: 'firefox', passed: false },
 *     { name: 'Checkout', duration: 3000, browser: 'chrome', passed: true },
 *     { name: 'Profile', duration: 1200, browser: 'safari', passed: true }
 * ];
 *
 * Find the total duration of all passing tests in Chrome browser.
 *
 * Expected output: 4500 (1500 + 3000)
 *
 * Hint: Filter by multiple conditions (browser AND passed), then reduce to sum durations
 */
/**
 * Total duration of passing Chrome tests
 */
const testExecutions = [
  { name: "Login", duration: 1500, browser: "chrome", passed: true },
  { name: "Signup", duration: 2000, browser: "firefox", passed: false },
  { name: "Checkout", duration: 3000, browser: "chrome", passed: true },
  { name: "Profile", duration: 1200, browser: "safari", passed: true },
];
const totalDuration = testExecutions
  .filter((t) => t.browser === "chrome" && t.passed)
  .reduce((sum, t) => sum + t.duration, 0);
console.log(totalDuration);

// ============================================================================
// SECTION 3: STRING METHODS WITH ARROW FUNCTIONS (10 exercises)
// ============================================================================

console.log("\n=== SECTION 3: STRING METHODS WITH ARROW FUNCTIONS ===\n");

/**
 * Exercise 3.1: String.split() and Array.map()
 * ---------------------------------------------
 * Given:
 * const csv = 'TC-001,Login Test,Passed,1500';
 *
 * Split the CSV string and create an object with properties: id, name, status, duration.
 *
 * Expected output:
 * { id: 'TC-001', name: 'Login Test', status: 'Passed', duration: 1500 }
 *
 * Hint: Use .split(',') to create array, then destructure or access by index
 * Don't forget to convert duration to number using parseInt()
 */

const csv = "TC-001,Login Test,Passed,1500";
// TODO: Parse CSV into object

/**
 * Exercise 3.2: String Manipulation Chain
 * ----------------------------------------
 * Given:
 * const testName = '  login_test_01  ';
 *
 * Create a function that transforms this to: "Login Test 01"
 * Steps:
 * 1. Trim whitespace
 * 2. Replace underscores with spaces
 * 3. Convert to title case (first letter of each word uppercase)
 *
 * Hint:
 * - .trim() removes whitespace
 * - .replace(/_/g, ' ') replaces all underscores
 * - .split(' ').map(...).join(' ') for title case
 * - word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() for each word
 */

const testName = "  login_test_01  ";
// TODO: Transform to "Login Test 01"

/**
 * Exercise 3.3: Array.filter() with String.includes()
 * ----------------------------------------------------
 * Given:
 * const logs = [
 *     'INFO: Test started',
 *     'ERROR: Connection failed',
 *     'INFO: Retrying...',
 *     'ERROR: Timeout',
 *     'INFO: Test completed'
 * ];
 *
 * Filter to get only ERROR logs.
 *
 * Expected output: ['ERROR: Connection failed', 'ERROR: Timeout']
 *
 * Hint: Use .includes() to check if string contains 'ERROR'
 */

const logs = [
  "INFO: Test started",
  "ERROR: Connection failed",
  "INFO: Retrying...",
  "ERROR: Timeout",
  "INFO: Test completed",
];
// TODO: Filter to get only ERROR logs

/**
 * Exercise 3.4: String.match() with Regular Expression
 * -----------------------------------------------------
 * Given:
 * const url = 'https://example.com/users/12345/profile';
 *
 * Extract the user ID (12345) using string methods or regex.
 *
 * Expected output: '12345'
 *
 * Method 1: Using regex: url.match(/\/users\/(\d+)\//)[1]
 * Method 2: Using split: url.split('/')[4]
 * Try both methods!
 */

const url = "https://example.com/users/12345/profile";
// TODO: Extract user ID

/**
 * Exercise 3.5: Array.map() with String Template
 * -----------------------------------------------
 * Given:
 * const usernames = ['john', 'jane', 'bob'];
 *
 * Create email addresses by mapping to: 'john@test.com', 'jane@test.com', etc.
 *
 * Expected output: ['john@test.com', 'jane@test.com', 'bob@test.com']
 *
 * Hint: Use template literals: `${username}@test.com`
 */

const usernames = ["john", "jane", "bob"];
// TODO: Create email addresses

/**
 * Exercise 3.6: String.substring() and Array Methods
 * ---------------------------------------------------
 * Given:
 * const testIds = ['TC-001', 'TC-002', 'TC-003', 'BUG-001', 'TC-004'];
 *
 * Filter to get only test cases (starting with 'TC-') and extract just the numbers.
 *
 * Expected output: ['001', '002', '003', '004']
 *
 * Hint:
 * 1. Filter using .startsWith('TC-')
 * 2. Map using .substring(3) or .split('-')[1]
 */

const testIds = ["TC-001", "TC-002", "TC-003", "BUG-001", "TC-004"];
// TODO: Get TC numbers only

/**
 * Exercise 3.7: Case Conversion
 * ------------------------------
 * Given:
 * const statuses = ['PASSED', 'failed', 'SKIPPED', 'passed'];
 *
 * Normalize all statuses to lowercase and remove duplicates.
 *
 * Expected output: ['passed', 'failed', 'skipped']
 *
 * Hint:
 * 1. Map to lowercase
 * 2. Use Set to remove duplicates: [...new Set(array)]
 */

const statuses = ["PASSED", "failed", "SKIPPED", "passed"];
// TODO: Normalize to lowercase and remove duplicates

/**
 * Exercise 3.8: String Validation
 * --------------------------------
 * Create a function isValidEmail that:
 * - Takes an email string as parameter
 * - Returns true if it contains '@' and '.'
 * - Returns false otherwise
 * - Use arrow function
 *
 * Example:
 * isValidEmail('test@example.com') // returns true
 * isValidEmail('invalid.email')    // returns false
 *
 * Hint: Use .includes() to check for both characters
 */

// TODO: Create isValidEmail arrow function

/**
 * Exercise 3.9: Parse Test Data
 * ------------------------------
 * Given:
 * const queryString = 'username=john@test.com&password=secret123&role=admin';
 *
 * Parse this query string into an object:
 * { username: 'john@test.com', password: 'secret123', role: 'admin' }
 *
 * Hint:
 * 1. Split by '&' to get pairs: ['username=john@test.com', ...]
 * 2. Map each pair by splitting on '=': ['username', 'john@test.com']
 * 3. Reduce into object: { username: 'john@test.com', ... }
 *
 * Alternative: Use Object.fromEntries()
 */

const queryString = "username=john@test.com&password=secret123&role=admin";
// TODO: Parse query string into object

/**
 * Exercise 3.10: Format Duration
 * -------------------------------
 * Create an arrow function formatDuration that:
 * - Takes duration in milliseconds (number)
 * - Returns formatted string: "1.5s", "2.0s", "0.5s"
 * - Use template literals
 *
 * Example:
 * formatDuration(1500) // returns '1.5s'
 * formatDuration(2000) // returns '2.0s'
 * formatDuration(500)  // returns '0.5s'
 *
 * Hint: Divide by 1000, use .toFixed(1) for one decimal place
 */

// TODO: Create formatDuration arrow function

// ============================================================================
// SECTION 4: COMBINED CHALLENGES (10 exercises)
// ============================================================================

console.log("\n=== SECTION 4: COMBINED CHALLENGES ===\n");

/**
 * Exercise 4.1: Test Report Generator
 * ------------------------------------
 * Create a function that takes an array of test results and generates a summary:
 *
 * const results = [
 *     { name: 'Test 1', passed: true, duration: 1500 },
 *     { name: 'Test 2', passed: false, duration: 2000 },
 *     { name: 'Test 3', passed: true, duration: 1200 }
 * ];
 *
 * Return an object with:
 * - total: number of tests
 * - passed: number of passed tests
 * - failed: number of failed tests
 * - totalDuration: sum of all durations
 * - passRate: percentage of passed tests
 *
 * Expected output:
 * { total: 3, passed: 2, failed: 1, totalDuration: 4700, passRate: 66.67 }
 */

const results4_1 = [
  { name: "Test 1", passed: true, duration: 1500 },
  { name: "Test 2", passed: false, duration: 2000 },
  { name: "Test 3", passed: true, duration: 1200 },
];
// TODO: Create generateReport function and use it

/**
 * Exercise 4.2: Filter and Transform
 * -----------------------------------
 * Given:
 * const testCases4_2 = [
 *     { id: 'TC-001', priority: 'high', automated: true },
 *     { id: 'TC-002', priority: 'low', automated: false },
 *     { id: 'TC-003', priority: 'high', automated: true },
 *     { id: 'TC-004', priority: 'medium', automated: false }
 * ];
 *
 * Get IDs of all high priority automated tests, and return as a comma-separated string.
 *
 * Expected output: 'TC-001, TC-003'
 */

const testCases4_2 = [
  { id: "TC-001", priority: "high", automated: true },
  { id: "TC-002", priority: "low", automated: false },
  { id: "TC-003", priority: "high", automated: true },
  { id: "TC-004", priority: "medium", automated: false },
];
// TODO: Get IDs of high priority automated tests as comma-separated string

/**
 * Exercise 4.3: Data Transformation Pipeline
 * -------------------------------------------
 * Given:
 * const rawData = ['  test1  ', '  TEST2  ', '  Test3  '];
 *
 * Transform to: ['Test1', 'Test2', 'Test3'] (trimmed, title case)
 *
 * Hint: Map with transformation - trim, then capitalize first letter, lowercase rest
 */

const rawData = ["  test1  ", "  TEST2  ", "  Test3  "];
// TODO: Transform to trimmed title case

/**
 * Exercise 4.4: Group and Count
 * ------------------------------
 * Given:
 * const executions = [
 *     { browser: 'chrome', status: 'passed' },
 *     { browser: 'firefox', status: 'failed' },
 *     { browser: 'chrome', status: 'passed' },
 *     { browser: 'firefox', status: 'passed' },
 *     { browser: 'chrome', status: 'failed' }
 * ];
 *
 * Create a summary object:
 * {
 *     chrome: { passed: 2, failed: 1 },
 *     firefox: { passed: 1, failed: 1 }
 * }
 */

const executions = [
  { browser: "chrome", status: "passed" },
  { browser: "firefox", status: "failed" },
  { browser: "chrome", status: "passed" },
  { browser: "firefox", status: "passed" },
  { browser: "chrome", status: "failed" },
];
// TODO: Create browser/status summary

/**
 * Exercise 4.5: Search and Replace
 * ---------------------------------
 * Create a function that:
 * - Takes an array of test names
 * - Takes a search string and replace string
 * - Returns new array with replacements (case insensitive)
 *
 * Example:
 * const tests = ['Login Test', 'Signup Test', 'Login Validation'];
 * searchAndReplace(tests, 'login', 'authentication')
 * Returns: ['Authentication Test', 'Signup Test', 'Authentication Validation']
 *
 * Hint: Use RegExp with 'gi' flags for case-insensitive global replace
 */

// TODO: Create searchAndReplace function

/**
 * Exercise 4.6: Sort by Multiple Criteria
 * ----------------------------------------
 * Given:
 * const tests4_6 = [
 *     { name: 'Test A', priority: 'low', duration: 1000 },
 *     { name: 'Test B', priority: 'high', duration: 2000 },
 *     { name: 'Test C', priority: 'high', duration: 1500 },
 *     { name: 'Test D', priority: 'medium', duration: 1200 }
 * ];
 *
 * Sort by priority (high > medium > low), then by duration (ascending).
 *
 * Expected order: Test C (high, 1500), Test B (high, 2000), Test D (medium, 1200), Test A (low, 1000)
 *
 * Hint: Create priorityOrder object: { high: 3, medium: 2, low: 1 }
 * In sort: compare priority first, if equal then compare duration
 */

const tests4_6 = [
  { name: "Test A", priority: "low", duration: 1000 },
  { name: "Test B", priority: "high", duration: 2000 },
  { name: "Test C", priority: "high", duration: 1500 },
  { name: "Test D", priority: "medium", duration: 1200 },
];
// TODO: Sort by priority then duration

/**
 * Exercise 4.7: Calculate Statistics
 * -----------------------------------
 * Create a function that takes an array of durations and returns:
 * {
 *     min: number,
 *     max: number,
 *     avg: number,
 *     median: number
 * }
 *
 * Example:
 * calculateStats([1000, 1500, 2000, 1200, 1800])
 * Returns: { min: 1000, max: 2000, avg: 1500, median: 1500 }
 *
 * Hint for median:
 * - Sort array first
 * - If odd length: middle element
 * - If even length: average of two middle elements
 */

// TODO: Create calculateStats function

/**
 * Exercise 4.8: Validate Test Data
 * ---------------------------------
 * Create a function that validates an array of user objects:
 *
 * const users = [
 *     { username: 'john@test.com', password: 'pass123' },
 *     { username: 'invalid', password: 'p' },
 *     { username: 'jane@test.com', password: 'pass456' }
 * ];
 *
 * Return an array of validation errors (if any):
 * - Username must contain '@'
 * - Password must be at least 6 characters
 *
 * Expected output:
 * [
 *   'User 2: Username must contain @',
 *   'User 2: Password must be at least 6 characters'
 * ]
 */

// TODO: Create validateUsers function

/**
 * Exercise 4.9: Test Execution Queue
 * -----------------------------------
 * Create a function that processes a queue of tests:
 *
 * const queue = [
 *     { name: 'Test 1', priority: 1, estimated: 1000 },
 *     { name: 'Test 2', priority: 3, estimated: 2000 },
 *     { name: 'Test 3', priority: 2, estimated: 1500 }
 * ];
 *
 * Return tests sorted by priority (higher first), with cumulative time calculated.
 *
 * Expected output:
 * [
 *   { name: 'Test 2', priority: 3, estimated: 2000, startTime: 0, endTime: 2000 },
 *   { name: 'Test 3', priority: 2, estimated: 1500, startTime: 2000, endTime: 3500 },
 *   { name: 'Test 1', priority: 1, estimated: 1000, startTime: 3500, endTime: 4500 }
 * ]
 */

// TODO: Create processQueue function

/**
 * Exercise 4.10: Parse and Format Log Entries
 * --------------------------------------------
 * Given:
 * const logs4_10 = [
 *     '[2024-01-01 10:30:00] INFO: Test started',
 *     '[2024-01-01 10:31:00] ERROR: Connection failed',
 *     '[2024-01-01 10:32:00] INFO: Retrying...'
 * ];
 *
 * Parse logs into objects with: timestamp, level, message.
 * Then filter and format only ERROR logs.
 *
 * Expected output:
 * ['2024-01-01 10:31:00 - Connection failed']
 *
 * Hint: Use regex to extract parts: /\[(.*?)\] (\w+): (.*)/
 */

const logs4_10 = [
  "[2024-01-01 10:30:00] INFO: Test started",
  "[2024-01-01 10:31:00] ERROR: Connection failed",
  "[2024-01-01 10:32:00] INFO: Retrying...",
];
// TODO: Parse logs and filter errors

// ============================================================================
// BONUS CHALLENGES (Optional - Advanced)
// ============================================================================

console.log("\n=== BONUS CHALLENGES ===\n");

/**
 * Bonus 1: Custom Array Methods
 * ------------------------------
 * Create higher-order functions that work like array methods:
 * - customMap(array, transformFn) - implements map logic
 * - customFilter(array, predicateFn) - implements filter logic
 * - customReduce(array, reducerFn, initialValue) - implements reduce logic
 *
 * These should work exactly like the built-in methods but implemented from scratch using loops.
 *
 * Example:
 * customMap([1, 2, 3], x => x * 2) // returns [2, 4, 6]
 * customFilter([1, 2, 3, 4], x => x > 2) // returns [3, 4]
 * customReduce([1, 2, 3], (sum, x) => sum + x, 0) // returns 6
 */

// TODO: Implement customMap

// TODO: Implement customFilter

// TODO: Implement customReduce

/**
 * Bonus 2: Fluent API
 * --------------------
 * Create a TestBuilder class with a fluent API:
 *
 * const test = new TestBuilder()
 *     .withName('Login Test')
 *     .withTimeout(5000)
 *     .withRetries(3)
 *     .withTags(['smoke', 'critical'])
 *     .build();
 *
 * Each method should return 'this' to enable chaining.
 * The build() method returns the final object.
 */

// TODO: Create TestBuilder class

/**
 * Bonus 3: Pipeline Function
 * ---------------------------
 * Create a pipeline function that composes multiple functions:
 *
 * const process = pipeline(
 *     (s: string) => s.trim(),
 *     (s: string) => s.toLowerCase(),
 *     (s: string) => s.split(' '),
 *     (arr: string[]) => arr.join('-')
 * );
 *
 * console.log(process('  Hello World  ')); // 'hello-world'
 *
 * Hint: Use reduce to chain function calls
 * return (input) => fns.reduce((result, fn) => fn(result), input)
 */

// TODO: Create pipeline function

// ============================================================================
// TEST YOUR SOLUTIONS
// ============================================================================

console.log("\n=== TESTING YOUR SOLUTIONS ===\n");

// Uncomment the tests below as you complete each exercise

// Section 1 Tests
// console.log('1.1 Variables:', testName, timeout, isPassed, testData);
// console.log('1.3 Calculate Duration:', calculateTestDuration(1000, 6000));
// console.log('1.4 Run Test:', runTest('Login Test'));
// console.log('1.6 Test Result:', getTestResult(95));
// console.log('1.7 Multiply:', multiply(5, 3));
// console.log('1.8 Square:', square(5));
// console.log('1.9 Timestamp:', getTimestamp());
// console.log('1.10 Create User:', createUser('John', 'john@test.com'));

// Section 2 Tests
// console.log('2.1 Uppercase:', upperCaseTests);
// console.log('2.2 Test IDs:', testIds);
// console.log('2.3 Passing Tests:', passingTests);
// console.log('2.4 Passing Scores:', passingScores);
// console.log('2.5 Total Score:', totalScore);
// console.log('2.6 Browser Counts:', browserCounts);

// Section 3 Tests
// console.log('3.1 Parsed CSV:', parsedCsv);
// console.log('3.2 Formatted Name:', formattedName);
// console.log('3.3 Error Logs:', errorLogs);
// console.log('3.5 Emails:', emails);
// console.log('3.7 Normalized:', normalizedStatuses);

// Section 4 Tests
// console.log('4.1 Report:', generateReport(results4_1));
// console.log('4.2 High Priority:', highPriorityIds);

console.log("\n=== ALL DONE! ===\n");
console.log("Great job completing the exercises!");
console.log("Remember: Practice makes perfect! 🚀");
