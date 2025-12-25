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

console.log('\n=== SECTION 1: VARIABLES & BASIC FUNCTIONS ===\n');

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
let testName1: string = "Login Test";
let timeout: number = 5000;
let isPassed: boolean = true;
let testData1: { username: string; password: string } | null = {
  username: "admin",
  password: "admin123"
};

// Example: assigning null
testData1 = null;


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
const browser: string = "chrome";
let retries: number = 0;

if (true) {
  let browser: string = "firefox"; // block-scoped
  retries = retries + 1;
}

console.log(browser); // chrome




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

// TODO: Create calculateTestDuration function

function calculateTestDuration(startTime: number, endTime: number): number {
  return endTime - startTime;
}

console.log(calculateTestDuration(1000, 6000));



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

// TODO: Create runTest function
function runTest(
  testName: string,
  retries: number = 0,
  timeout: number = 5000
): string {
  return `Running ${testName} with ${retries} retries and ${timeout}ms timeout`;
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

// TODO: Create executeTests function
function executeTests(suiteName: string, ...tests: string[]): number {
  console.log(`Suite: ${suiteName}`);

  for (const test of tests) {
    console.log(test);
  }

  return tests.length;
}
const totalTests = executeTests(
  "Login Suite",
  "Test 1",
  "Test 2",
  "Test 3"
);

console.log("Total Tests:", totalTests);

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

// TODO: Create getTestResult function
function getTestResult(score: number): string {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 70) {
    return "Good";
  } else {
    return "Needs Improvement";
  }
}

console.log(getTestResult(95)); // Excellent
console.log(getTestResult(75)); // Good
console.log(getTestResult(60)); // Needs Improvement

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

// TODO: Convert to arrow function

const multiply = (a: number, b: number): number => {
  return a * b;
};



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

// TODO: Create square arrow function

const square = (num: number): number => num * num;

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

// TODO: Create getTimestamp arrow function
const getTimestamp = (): number => Date.now();

console.log(getTimestamp()); // e.g., 1703251200000

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

// TODO: Create createUser arrow function
const createUser = (
  name: string,
  email: string
): { name: string; email: string; createdAt: number } => ({
  name,
  email,
  createdAt: Date.now()
});
console.log(createUser("John", "john@test.com"));


// ============================================================================
// SECTION 2: ARRAY METHODS WITH ARROW FUNCTIONS (15 exercises)
// ============================================================================

console.log('\n=== SECTION 2: ARRAY METHODS WITH ARROW FUNCTIONS ===\n');

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

const testNames = ['login test', 'signup test', 'checkout test'];
// TODO: Use .map() to convert to uppercase


const upperCaseTestNames = testNames.map(
  (testName: string) => testName.toUpperCase()
);

console.log(upperCaseTestNames);

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
  { id: 'TC-001', name: 'Login Test', passed: true },
  { id: 'TC-002', name: 'Signup Test', passed: false },
  { id: 'TC-003', name: 'Checkout Test', passed: true }
];
// TODO: Extract only the IDs

const testIds1 = tests.map(test => test.id);

console.log(testIds1);

/**
 * Exercise 2.3: Array.filter() - Get Passing Tests
 * -------------------------------------------------
 * Using the same tests array from 2.2, use .filter() to get only the tests that passed.
 * 
 * Expected output: Array with TC-001 and TC-003 objects
 */

// TODO: Filter to get only passing tests
const tests2 = [
  { id: "TC-001", name: "Login Test", passed: true },
  { id: "TC-002", name: "Signup Test", passed: false },
  { id: "TC-003", name: "Checkout Test", passed: true }
];

const passedTests = tests.filter(test => test.passed === true);

console.log(passedTests);


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
// TODO: Filter scores >= 70

//const scores = [95, 67, 88, 45, 92, 78, 53, 81];

const passingScores = scores.filter(score => score >= 70);

console.log(passingScores);



/**
 * Exercise 2.5: Array.reduce() - Sum
 * -----------------------------------
 * Using the scores array from 2.4, use .reduce() to calculate the total sum of all scores.
 * 
 * Expected output: 599
 * 
 * Hint: reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
 */

// TODO: Calculate total sum using reduce

const scores2 = [95, 67, 88, 45, 92, 78, 53, 81];

const totalScore = scores2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(totalScore);


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

const browsers = ['chrome', 'firefox', 'chrome', 'safari', 'chrome', 'firefox'];
// TODO: Count occurrences of each browser

//const browsers = ['chrome', 'firefox', 'chrome', 'safari', 'chrome', 'firefox'];

const browserCounts = browsers.reduce((acc: Record<string, number>, browser) => {
  acc[browser] = (acc[browser] || 0) + 1;
  return acc;
}, {});

console.log(browserCounts);



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

const testCases = ['TC-001', 'TC-002', 'TC-003'];
// TODO: Log each test case with index

testCases.forEach((testCase, index) => {
  console.log(`${index + 1}. ${testCase}`);
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
  { username: 'user1', role: 'user' },
  { username: 'admin1', role: 'admin' },
  { username: 'user2', role: 'user' }
];
// TODO: Find first admin user

const adminUser = users.find(user => user.role === 'admin');

console.log(adminUser);


/**
 * Exercise 2.9: Array.some() - Check if Any
 * ------------------------------------------
 * Using the scores array from 2.4, use .some() to check if any score is below 50.
 * 
 * Expected output: true (because 45 is below 50)
 * 
 * Hint: .some() returns true if at least one element matches the condition
 */

// TODO: Check if any score is below 50
const scores29 = [95, 67, 88, 45, 92, 78, 53, 81];

const hasLowScore = scores29.some(score => score < 50);

console.log(hasLowScore);




/**
 * Exercise 2.10: Array.every() - Check if All
 * --------------------------------------------
 * Using the scores array from 2.4, use .every() to check if all scores are above 40.
 * 
 * Expected output: true (all scores are above 40)
 * 
 * Hint: .every() returns true only if ALL elements match the condition
 */

// TODO: Check if all scores are above 40
const areAllAbove40 = scores.every(score => score > 40);

console.log(areAllAbove40);



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
  { name: 'Test 1', score: 95, passed: true },
  { name: 'Test 2', score: 45, passed: false },
  { name: 'Test 3', score: 87, passed: true },
  { name: 'Test 4', score: 62, passed: false }
];
// TODO: Calculate average score of passing tests

const passingTests = testResults.filter(test => test.passed);

const averageScore =
  passingTests
    .map(test => test.score)
    .reduce((sum, score) => sum + score, 0) / passingTests.length;

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
// TODO: Sort in ascending order (create copy first)


const sortedDurations = [...durations].sort((a, b) => a - b);

console.log(sortedDurations);


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

// TODO: Sort tests alphabetically by name (create copy first)

const tests1 = [
  { id: 'TC-001', name: 'Login Test', passed: true },
  { id: 'TC-002', name: 'Signup Test', passed: false },
  { id: 'TC-003', name: 'Checkout Test', passed: true }
];

const sortedTests = [...tests1].sort((a, b) =>
  a.name.localeCompare(b.name)
);

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
  { test: 'Test 1', status: 'passed' },
  { test: 'Test 2', status: 'failed' },
  { test: 'Test 3', status: 'passed' },
  { test: 'Test 4', status: 'failed' }
];
// TODO: Group tests by status

const groupedTests = testData.reduce(
  (acc: Record<string, string[]>, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item.test);
    return acc;
  },
  {}
);

console.log(groupedTests);



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

const testExecutions = [
  { name: 'Login', duration: 1500, browser: 'chrome', passed: true },
  { name: 'Signup', duration: 2000, browser: 'firefox', passed: false },
  { name: 'Checkout', duration: 3000, browser: 'chrome', passed: true },
  { name: 'Profile', duration: 1200, browser: 'safari', passed: true }
];
// TODO: Total duration of passing Chrome tests

const totalDuration = testExecutions
  .filter(test => test.browser === 'chrome' && test.passed)
  .reduce((sum, test) => sum + test.duration, 0);

console.log(totalDuration);


// ============================================================================
// SECTION 3: STRING METHODS WITH ARROW FUNCTIONS (10 exercises)
// ============================================================================

console.log('\n=== SECTION 3: STRING METHODS WITH ARROW FUNCTIONS ===\n');

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

const csv = 'TC-001,Login Test,Passed,1500';
// TODO: Parse CSV into object
const [id, name, status, durationStr] = csv.split(',');

const result = {
  id,
  name,
  status,
  duration: parseInt(durationStr, 10)
};

console.log(result);


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

const testName = '  login_test_01  ';
// TODO: Transform to "Login Test 01"


function formatTestName(name: string): string {
  return name
    .trim()
    .replace(/_/g, ' ')
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

console.log(formatTestName(testName));

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
  'INFO: Test started',
  'ERROR: Connection failed',
  'INFO: Retrying...',
  'ERROR: Timeout',
  'INFO: Test completed'
];
// TODO: Filter to get only ERROR logs


const errorLogs = logs.filter(log => log.includes('ERROR'));

console.log(errorLogs);



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

const url = 'https://example.com/users/12345/profile';
// TODO: Extract user ID
const userId = url.match(/\/users\/(\d+)\//)?.[1];

console.log(userId);




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

const usernames = ['john', 'jane', 'bob'];
// TODO: Create email addresses
const emails = usernames.map(username => `${username}@test.com`);

console.log(emails);


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

const testIds = ['TC-001', 'TC-002', 'TC-003', 'BUG-001', 'TC-004'];
// TODO: Get TC numbers only

const testNumbers = testIds
  .filter(id => id.startsWith('TC-'))
  .map(id => id.substring(3)); // or: id.split('-')[1]

console.log(testNumbers);


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

const statuses = ['PASSED', 'failed', 'SKIPPED', 'passed'];
// TODO: Normalize to lowercase and remove duplicates

const normalizedStatuses = [
  ...new Set(statuses.map(status => status.toLowerCase()))
];

console.log(normalizedStatuses);


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

const isValidEmail = (email: string): boolean =>
  email.includes('@') && email.includes('.');

// Examples
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalid.email'));    // false


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

const queryString = 'username=john@test.com&password=secret123&role=admin';
// TODO: Parse query string into object

const parsedData = queryString
  .split('&')
  .map(pair => pair.split('='))
  .reduce((acc: Record<string, string>, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

console.log(parsedData);




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
const formatDuration = (duration: number): string =>
  `${(duration / 1000).toFixed(1)}s`;

// ============================================================================
// SECTION 4: COMBINED CHALLENGES (10 exercises)
// ============================================================================

console.log('\n=== SECTION 4: COMBINED CHALLENGES ===\n');

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
  { name: 'Test 1', passed: true, duration: 1500 },
  { name: 'Test 2', passed: false, duration: 2000 },
  { name: 'Test 3', passed: true, duration: 1200 }
];
// TODO: Create generateReport function and use it
type TestResult = {
  name: string;
  passed: boolean;
  duration: number;
};

function generateTestReport(results: TestResult[]) {
  const total = results.length;

  const passed = results.filter(r => r.passed).length;
  const failed = total - passed;

  const totalDuration = results.reduce(
    (sum, r) => sum + r.duration,
    0
  );

  const passRate = Number(((passed / total) * 100).toFixed(2));

  return {
    total,
    passed,
    failed,
    totalDuration,
    passRate
  };
}
const report = generateTestReport(results4_1);
console.log(report);


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
  { id: 'TC-001', priority: 'high', automated: true },
  { id: 'TC-002', priority: 'low', automated: false },
  { id: 'TC-003', priority: 'high', automated: true },
  { id: 'TC-004', priority: 'medium', automated: false }
];
// TODO: Get IDs of high priority automated tests as comma-separated string

const result4_2 = testCases4_2
  .filter(test => test.priority === 'high' && test.automated)
  .map(test => test.id)
  .join(', ');

console.log(result4_2);


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

const rawData = ['  test1  ', '  TEST2  ', '  Test3  '];
// TODO: Transform to trimmed title case
const transformedData = rawData.map(value => {
  const trimmed = value.trim().toLowerCase();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
});

console.log(transformedData);




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
  { browser: 'chrome', status: 'passed' },
  { browser: 'firefox', status: 'failed' },
  { browser: 'chrome', status: 'passed' },
  { browser: 'firefox', status: 'passed' },
  { browser: 'chrome', status: 'failed' }
];
// TODO: Create browser/status summary
const summary = executions.reduce((acc, { browser, status }) => {
  // Initialize browser object if not exists
  if (!acc[browser]) {
    acc[browser] = { passed: 0, failed: 0 };
  }

  // Increment status count
  acc[browser][status]++;

  return acc;
}, {} as Record<string, { passed: number; failed: number }>);

console.log(summary);


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

const searchAndReplace = (
  testNames: string[],
  search: string,
  replace: string
): string[] => {
  const regex = new RegExp(search, 'gi');

  return testNames.map(test =>
    test.replace(regex, replace)
  );
};

// Example usage
const tests11 = ['Login Test', 'Signup Test', 'Login Validation'];

const result11 = searchAndReplace(tests11, 'login', 'Authentication');
console.log(result11);

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
  { name: 'Test A', priority: 'low', duration: 1000 },
  { name: 'Test B', priority: 'high', duration: 2000 },
  { name: 'Test C', priority: 'high', duration: 1500 },
  { name: 'Test D', priority: 'medium', duration: 1200 }
];
// TODO: Sort by priority then duration
const priorityOrder: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1
};

const sortedTests1 = [...tests4_6].sort((a, b) => {
  // 1️⃣ Sort by priority (high > medium > low)
  const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
  if (priorityDiff !== 0) {
    return priorityDiff;
  }

  // 2️⃣ If priority is same, sort by duration (ascending)
  return a.duration - b.duration;
});

console.log(sortedTests1);

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
type Stats = {
  min: number;
  max: number;
  avg: number;
  median: number;
};

const calculateStats = (durations: number[]): Stats => {
  const sorted = [...durations].sort((a, b) => a - b);

  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  const sum = sorted.reduce((acc, val) => acc + val, 0);
  const avg = sum / sorted.length;

  const middle = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 !== 0
      ? sorted[middle]
      : (sorted[middle - 1] + sorted[middle]) / 2;

  return { min, max, avg, median };
};

// Example
console.log(calculateStats([1000, 1500, 2000, 1200, 1800]));


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
type User = {
  username: string;
  password: string;
};

const validateUsers = (users: User[]): string[] => {
  const errors: string[] = [];

  users.forEach((user, index) => {
    const userNumber = index + 1;

    if (!user.username.includes('@')) {
      errors.push(`User ${userNumber}: Username must contain @`);
    }

    if (user.password.length < 6) {
      errors.push(`User ${userNumber}: Password must be at least 6 characters`);
    }
  });

  return errors;
};

// Example
const users11 = [
  { username: 'john@test.com', password: 'pass123' },
  { username: 'invalid', password: 'p' },
  { username: 'jane@test.com', password: 'pass456' }
];

console.log(validateUsers(users11));

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
type TestQueueItem = {
  name: string;
  priority: number;
  estimated: number;
};

type ScheduledTest = TestQueueItem & {
  startTime: number;
  endTime: number;
};

const processTestQueue = (queue: TestQueueItem[]): ScheduledTest[] => {
  // 1️⃣ Sort by priority (higher first)
  const sortedQueue = [...queue].sort(
    (a, b) => b.priority - a.priority
  );

  let currentTime = 0;

  // 2️⃣ Calculate cumulative start and end times
  return sortedQueue.map(test => {
    const startTime = currentTime;
    const endTime = startTime + test.estimated;
    currentTime = endTime;

    return {
      ...test,
      startTime,
      endTime
    };
  });
};

// Example
const queue = [
  { name: 'Test 1', priority: 1, estimated: 1000 },
  { name: 'Test 2', priority: 3, estimated: 2000 },
  { name: 'Test 3', priority: 2, estimated: 1500 }
];

console.log(processTestQueue(queue));


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
  '[2024-01-01 10:30:00] INFO: Test started',
  '[2024-01-01 10:31:00] ERROR: Connection failed',
  '[2024-01-01 10:32:00] INFO: Retrying...'
];
// TODO: Parse logs and filter errors

type LogEntry = {
  timestamp: string;
  level: string;
  message: string;
};

const parseAndFormatErrorLogs = (logs: string[]): string[] => {
  return logs
    .map(log => {
      const match = log.match(/\[(.*?)\] (\w+): (.*)/);
      if (!match) return null;
      const [, timestamp, level, message] = match;
      return { timestamp, level, message } as LogEntry;
    })
    .filter((entry): entry is LogEntry => entry !== null && entry.level === 'ERROR')
    .map(entry => `${entry.timestamp} - ${entry.message}`);
};



console.log(parseAndFormatErrorLogs(logs4_10));

// ============================================================================
// BONUS CHALLENGES (Optional - Advanced)
// ============================================================================

console.log('\n=== BONUS CHALLENGES ===\n');

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
function customMap<T, U>(array: T[], transformFn: (item: T, index: number, arr: T[]) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transformFn(array[i], i, array));
  }
  return result;
}

// TODO: Implement customFilter
function customFilter<T>(array: T[], predicateFn: (item: T, index: number, arr: T[]) => boolean): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicateFn(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// TODO: Implement customReduce
function customReduce<T, U>(array: T[], reducerFn: (acc: U, item: T, index: number, arr: T[]) => U, initialValue: U): U {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = reducerFn(acc, array[i], i, array);
  }
  return acc;
}

// Examples
const numbers = [1, 2, 3, 4];

const mapped = customMap(numbers, x => x * 2);
console.log('Mapped:', mapped); // [2, 4, 6, 8]

const filtered = customFilter(numbers, x => x > 2);
console.log('Filtered:', filtered); // [3, 4]

const reduced = customReduce(numbers, (sum, x) => sum + x, 0);
console.log('Reduced:', reduced); // 10

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
type TestConfig = {
    name?: string;
    timeout?: number;
    retries?: number;
    tags?: string[];
};

class TestBuilder {
    private config: TestConfig = {};

    withName(name: string): this {
        this.config.name = name;
        return this;
    }

    withTimeout(timeout: number): this {
        this.config.timeout = timeout;
        return this;
    }

    withRetries(retries: number): this {
        this.config.retries = retries;
        return this;
    }

    withTags(tags: string[]): this {
        this.config.tags = tags;
        return this;
    }

    build(): TestConfig {
        return { ...this.config };
    }
}

// Example usage
const test = new TestBuilder()
    .withName('Login Test')
    .withTimeout(5000)
    .withRetries(3)
    .withTags(['smoke', 'critical'])
    .build();

console.log(test);
/* Output:
{
  name: 'Login Test',
  timeout: 5000,
  retries: 3,
  tags: ['smoke', 'critical']
}
*/




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
// Generic pipeline function
function pipeline<T>(...fns: Array<(arg: T) => T>) {
    return (input: T): T => fns.reduce((result, fn) => fn(result), input);
}

// Example usage
const process1 = pipeline(
    (s: string) => s.trim(),
    (s: string) => s.toLowerCase(),
    (s: string) => s.split(' '),
    (arr: string[]) => arr.join('-') as unknown as string // cast due to array -> string
);

console.log(process1('  Hello World  ')); // Output: 'hello-world'




// ============================================================================
// TEST YOUR SOLUTIONS
// ============================================================================

console.log('\n=== TESTING YOUR SOLUTIONS ===\n');

// Uncomment the tests below as you complete each exercise

// Section 1 Tests
console.log('1.1 Variables:', testName1, timeout, isPassed, testData1);
console.log('1.3 Calculate Duration:', calculateTestDuration(1000, 6000));
console.log('1.4 Run Test:', runTest('Login Test'));
console.log('1.6 Test Result:', getTestResult(95));
console.log('1.7 Multiply:', multiply(5, 3));
console.log('1.8 Square:', square(5));
console.log('1.9 Timestamp:', getTimestamp());
console.log('1.10 Create User:', createUser('John', 'john@test.com'));

// Section 2 Tests
console.log('2.1 Uppercase:', upperCaseTestNames);
console.log('2.2 Test IDs:', testIds);
console.log('2.3 Passing Tests:', passingTests);
console.log('2.4 Passing Scores:', passingScores);
console.log('2.5 Total Score:', totalScore);
console.log('2.6 Browser Counts:', browserCounts);

// Section 3 Tests
console.log('3.1 Parsed CSV:', result);
console.log('3.2 Formatted Name:', formatTestName(testName));
console.log('3.3 Error Logs:', errorLogs);
console.log('3.5 Emails:', emails);
console.log('3.7 Normalized:', normalizedStatuses);

// Section 4 Tests
console.log('4.1 Report:', report);
console.log('4.2 High Priority:', result4_2);

console.log('\n=== ALL DONE! ===\n');
console.log('Great job completing the exercises!');
console.log('Remember: Practice makes perfect! 🚀');
