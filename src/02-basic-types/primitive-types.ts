/**
 * @fileoverview TypeScript Primitive Types
 * @author Suresh - Software Trainer
 * @description Comprehensive guide to TypeScript's primitive types
 * with examples relevant to test automation
 */

/**
 * PRIMITIVE TYPES IN TYPESCRIPT
 * ===============================
 * TypeScript has several primitive types that form the foundation
 * of the type system. Understanding these is crucial for writing
 * type-safe automation code.
 */

// ============================================================================
// 1. NUMBER TYPE
// ============================================================================

/**
 * The number type represents both integer and floating-point numbers
 * All numbers in TypeScript are floating point values
 */

// Explicit type annotation
let testTimeout: number = 5000;
let retryCount: number = 3;
let successRate: number = 99.5;
// Binary, Octal, and Hexadecimal numbers
let binary: number = 0b1010; // Binary: 10
let octal: number = 0o744;   // Octal: 484
let octal2: number = 0o12;   // Octal: 10
let hex: number = 0xf00d;    // Hexadecimal: 61453

/**
 * Calculates test execution time
 * @param {number} startTime - Test start timestamp
 * @param {number} endTime - Test end timestamp
 * @returns {number} Duration in milliseconds
 */
function calculateTestDuration(startTime: number, endTime: number): number {
    return endTime - startTime;
}

// Special numeric values
let notANumber: number = NaN;        // Not a Number
let infinity: number = Infinity;     // Positive infinity
let negInfinity: number = -Infinity; // Negative infinity

let testnumber: number = 100/0;

function test(a): number {
    if (isNaN(a)) {
       return NaN; // Return NaN if input is not a number  
    }
    else
    {
        return 42; // A regular number
    }
    
    
}


// ============================================================================
// 2. STRING TYPE
// ============================================================================

/**
 * The string type represents textual data
 * Can use single quotes, double quotes, or backticks (template literals)
 */

let username: string = 'testuser@example.com'; // single
let password: string = "SecureP@ss123"; // doble quotes
let baseUrl: string = `https://example.com`; // backticks


let name: string[] = ['Suresh',"","Kumar", ];
let profession: string[] = ["Software Tester"];

for (let index = 0; index < name.length; index++) {
    //console.log("Welcome " + name[index] + " your profession is "+ profession[index]);
    console.log(`Welcome ${name[index]} your profession is ${profession[index]}`);

}

// Template literals with expressions
let browserName: string = 'chrome';
let browserVersion: string = '120';
let fullBrowserInfo: string = `Browser: ${browserName} v${browserVersion}`;

let numberOfTests: number = 5;
//numberOfTests.
let testsPerSuite: string = `Total tests to run: ${numberOfTests * 2}`;

/**
 * Generates a test report message
 * @param {string} testName - Name of the test
 * @param {string} status - Test execution status
 * @returns {string} Formatted report message
 */
function generateTestReport(testName: string, status: string): string {
    return `Test "${testName}" completed with status: ${status}`;
}

// Multi-line strings using template literals
let sqlQuery: string = `
    SELECT * FROM users
    WHERE status = 'active'
    AND role = 'admin'
`;


// ============================================================================
// 3. BOOLEAN TYPE
// ============================================================================

/**
 * The boolean type has two values: true and false
 * Commonly used for flags and conditions in test automation
 */

//true === 'true'

let isTestPassed: boolean = true;
let isHeadlessMode: boolean = false;
let shouldTakeScreenshot: boolean = true;
let hasErrors: boolean = false;

/**
 * Determines if a test should be retried
 * @param {boolean} failed - Whether the test failed
 * @param {number} currentRetry - Current retry count
 * @param {number} maxRetries - Maximum allowed retries
 * @returns {boolean} True if test should be retried
 */
function shouldRetryTest(
    failed: boolean,
    currentRetry: number,
    maxRetries: number
): boolean {
    return failed && currentRetry < maxRetries;
}


// ============================================================================
// 4. NULL AND UNDEFINED
// ============================================================================

/**
 * null: Intentional absence of any object value
 * undefined: Variable declared but not assigned a value
 */

let testResult: string | null = null; // Explicitly no value yet
let optionalConfig: string | undefined = undefined; // May or may not be set

let myvar = null;

/**
 * Retrieves element text or returns null if not found
 * @param {string} selector - Element selector
 * @returns {string | null} Element text or null
 */
function getElementText(selector: string): string | null {
    // Simulating element might not be found
    const found: boolean = Math.random() > 0.5;
    return found ? `Text from ${selector}` : null;
}

// Handling null/undefined with optional chaining and nullish coalescing
let elementText: string | null = getElementText('#username');
let displayText: string = elementText ?? 'Default text'; // Use default if null/undefined


// ============================================================================
// 5. SYMBOL TYPE
// ============================================================================

/**
 * Symbols are unique and immutable primitive values
 * Useful for creating unique property keys
 */

const TEST_ID: symbol = Symbol('testId');
const SUITE_ID: symbol = Symbol('suiteId');

// Each symbol is unique even with same description
const id1: symbol = Symbol('id');
const id2: symbol = Symbol('id');

console.log(id1 === id2); // false - each symbol is unique

/**
 * Test metadata using symbols as keys
 */
const testMetadata = {
    [TEST_ID]: 'TC-001',
    [SUITE_ID]: 'SUITE-LOGIN',
    name: 'Login Test'
};


// ============================================================================
// 6. BIGINT TYPE
// ============================================================================

/**
 * BigInt represents whole numbers larger than 2^53 - 1
 * Useful for handling large numbers like timestamps or IDs
 */

let largeNumber: bigint = 9007199254740991n;
let timestampBigInt: bigint = BigInt(Date.now());

// Cannot mix BigInt with regular numbers
// let mixed = largeNumber + 100; // ❌ Error
let validAddition: bigint = largeNumber + 100n; // ✅ Correct


// ============================================================================
// 7. ANY TYPE (Use Sparingly!)
// ============================================================================

/**
 * The any type opts out of type checking
 * Should be avoided in most cases as it defeats TypeScript's purpose
 */

function returnmeValues(a: number)  {}

let dynamicValue: any = 'string';
dynamicValue = 42;        // No error
dynamicValue = true;      // No error
dynamicValue = {};        // No error

/**
 * Better alternative: unknown type (type-safe any)
 */
let unknownValue: unknown = 'some value';

// Must check type before using
if (typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase()); // ✅ Safe after check
}


// ============================================================================
// 8. VOID TYPE
// ============================================================================

/**
 * void represents the absence of a return value
 * Common for functions that perform actions but don't return anything
 */

/**
 * Logs test information without returning a value
 * @param {string} message - Message to log
 * @returns {void}
 */
function logTestInfo(message: string): void {
    console.log(`[TEST INFO] ${message}`);
    // No return statement or return undefined
}

/**
 * Clicks an element (action with no return value)
 * @param {string} selector - Element selector
 * @returns {void}
 */
function clickElement(selector: string): void {
    console.log(`Clicking element: ${selector}`);
}


// ============================================================================
// 9. NEVER TYPE
// ============================================================================

/**
 * The never type represents values that never occur
 * Used for functions that never return (throw errors or infinite loops)
 */

/**
 * Throws an error - never returns normally
 * @param {string} message - Error message
 * @returns {never} This function never returns
 */
function throwError(message: string): never {
    throw new Error(message);
}

/**
 * Infinite loop - never returns
 * @returns {never}
 */
function infiniteLoop(): never {
    while (true) {
        // Process indefinitely
    }
}

/**
 * Exhaustive check using never
 * @param {never} value - Should never receive a value
 */
function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}


// ============================================================================
// 10. OBJECT TYPE
// ============================================================================

const myval = {}
//myval
/**
 * The object type represents any non-primitive type
 */

let testConfig: object = {
    browser: 'chrome',
    timeout: 5000
};

// Better approach: use specific object types
/**
 * Specific test configuration type
 */
type SpecificTestConfig = {
    browser: string;
    timeout: number;
    headless: boolean;
};

let betterConfig: SpecificTestConfig = {
    browser: 'chrome',
    timeout: 5000,
    headless: true
};


// ============================================================================
// PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Page element representation using primitive types
 */
interface PageElement {
    id: string;              // string
    visible: boolean;        // boolean
    x: number;              // number
    y: number;              // number
    text: string | null;    // string or null
    attributes: object;      // object
}

/**
 * Test execution result using various primitive types
 */
interface TestExecutionResult {
    testName: string;           // string
    passed: boolean;            // boolean
    duration: number;           // number (milliseconds)
    timestamp: bigint;          // bigint (for precise timestamps)
    errorMessage: string | null; // string or null
    retryCount: number;         // number
    screenshot: string | undefined; // string or undefined
}

/**
 * Creates a test execution result
 * @param {string} name - Test name
 * @param {boolean} passed - Whether test passed
 * @param {number} duration - Test duration in ms
 * @returns {TestExecutionResult} Complete test result
 */
function createTestResult(
    name: string,
    passed: boolean,
    duration: number
): TestExecutionResult {
    return {
        testName: name,
        passed: passed,
        duration: duration,
        timestamp: BigInt(Date.now()),
        errorMessage: passed ? null : 'Test assertion failed',
        retryCount: 0,
        screenshot: passed ? undefined : 'screenshot.png'
    };
}

/**
 * Browser configuration using primitive types
 */
interface BrowserConfig {
    name: string;
    version: string;
    headless: boolean;
    width: number;
    height: number;
    timeout: number;
    slowMo: number;
    devtools: boolean;
}

const chromeConfig: BrowserConfig = {
    name: 'chromium',
    version: '120.0',
    headless: false,
    width: 1920,
    height: 1080,
    timeout: 30000,
    slowMo: 0,
    devtools: false
};


// ============================================================================
// TYPE ASSERTIONS (Type Casting)
// ============================================================================

/**
 * Sometimes you know more about a value's type than TypeScript does
 * Use type assertions to tell TypeScript the specific type
 */

// Using 'as' syntax (preferred)
let someValue: unknown = {};
let strLength: number = (someValue as string).length;

// Using angle-bracket syntax (not usable in JSX)
let anotherValue: unknown = 'another string';
let anotherLength: number = (<string>anotherValue).length; (Int)

/**
 * Practical example: Asserting DOM element types
 */
function getInputValue(selector: string): string {
    // Simulating document.querySelector
    const element: unknown = { value: 'test@example.com' };
    
    // Assert the type
    const inputElement = element as { value: string };
    return inputElement.value;
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * SUMMARY:
 * 
 * Primitive Types:
 * - number: All numeric values (int, float, binary, hex, etc.)
 * - string: Text data with template literal support
 * - boolean: true or false values
 * - null: Intentional absence of value
 * - undefined: Variable not yet assigned
 * - symbol: Unique immutable values
 * - bigint: Large integers beyond Number.MAX_SAFE_INTEGER
 * 
 * Special Types:
 * - any: Opts out of type checking (avoid when possible)
 * - unknown: Type-safe any (prefer over any)
 * - void: Absence of return value
 * - never: Values that never occur
 * - object: Non-primitive types
 * 
 * Best Practices for Automation:
 * 1. Use specific types instead of 'any'
 * 2. Use null/undefined appropriately
 * 3. Prefer 'unknown' over 'any' when type is uncertain
 * 4. Use bigint for large numbers (timestamps, IDs)
 * 5. Use void for functions that don't return values
 * 6. Use never for functions that throw errors
 */

export {
    calculateTestDuration,
    generateTestReport,
    shouldRetryTest,
    getElementText,
    logTestInfo,
    clickElement,
    createTestResult,
    type PageElement,
    type TestExecutionResult,
    type BrowserConfig
};
