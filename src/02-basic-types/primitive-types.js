"use strict";
/**
 * @fileoverview TypeScript Primitive Types
 * @author Suresh - Software Trainer
 * @description Comprehensive guide to TypeScript's primitive types
 * with examples relevant to test automation
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTestDuration = calculateTestDuration;
exports.generateTestReport = generateTestReport;
exports.shouldRetryTest = shouldRetryTest;
exports.getElementText = getElementText;
exports.logTestInfo = logTestInfo;
exports.clickElement = clickElement;
exports.createTestResult = createTestResult;
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
var testTimeout = 5000;
var retryCount = 3;
var successRate = 99.5;
// Binary, Octal, and Hexadecimal numbers
var binary = 10; // Binary: 10
var octal = 484; // Octal: 484
var octal2 = 10; // Octal: 10
var hex = 0xf00d; // Hexadecimal: 61453
/**
 * Calculates test execution time
 * @param {number} startTime - Test start timestamp
 * @param {number} endTime - Test end timestamp
 * @returns {number} Duration in milliseconds
 */
function calculateTestDuration(startTime, endTime) {
    return endTime - startTime;
}
// Special numeric values
var notANumber = NaN; // Not a Number
var infinity = Infinity; // Positive infinity
var negInfinity = -Infinity; // Negative infinity
var testnumber = 100 / 0;
function test(a) {
    if (isNaN(a)) {
        return NaN; // Return NaN if input is not a number  
    }
    else {
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
var username = 'testuser@example.com'; // single
var password = "SecureP@ss123"; // doble quotes
var baseUrl = "https://example.com"; // backticks
var name = ['Suresh', "", "Kumar",];
var profession = ["Software Tester"];
for (var index = 0; index < name.length; index++) {
    //console.log("Welcome " + name[index] + " your profession is "+ profession[index]);
    console.log("Welcome ".concat(name[index], " your profession is ").concat(profession[index]));
}
// Template literals with expressions
var browserName = 'chrome';
var browserVersion = '120';
var fullBrowserInfo = "Browser: ".concat(browserName, " v").concat(browserVersion);
var numberOfTests = 5;
//numberOfTests.
var testsPerSuite = "Total tests to run: ".concat(numberOfTests * 2);
/**
 * Generates a test report message
 * @param {string} testName - Name of the test
 * @param {string} status - Test execution status
 * @returns {string} Formatted report message
 */
function generateTestReport(testName, status) {
    return "Test \"".concat(testName, "\" completed with status: ").concat(status);
}
// Multi-line strings using template literals
var sqlQuery = "\n    SELECT * FROM users\n    WHERE status = 'active'\n    AND role = 'admin'\n";
// ============================================================================
// 3. BOOLEAN TYPE
// ============================================================================
/**
 * The boolean type has two values: true and false
 * Commonly used for flags and conditions in test automation
 */
//true === 'true'
var isTestPassed = true;
var isHeadlessMode = false;
var shouldTakeScreenshot = true;
var hasErrors = false;
/**
 * Determines if a test should be retried
 * @param {boolean} failed - Whether the test failed
 * @param {number} currentRetry - Current retry count
 * @param {number} maxRetries - Maximum allowed retries
 * @returns {boolean} True if test should be retried
 */
function shouldRetryTest(failed, currentRetry, maxRetries) {
    return failed && currentRetry < maxRetries;
}
// ============================================================================
// 4. NULL AND UNDEFINED
// ============================================================================
/**
 * null: Intentional absence of any object value
 * undefined: Variable declared but not assigned a value
 */
var testResult = null; // Explicitly no value yet
var optionalConfig = undefined; // May or may not be set
var myvar = null;
/**
 * Retrieves element text or returns null if not found
 * @param {string} selector - Element selector
 * @returns {string | null} Element text or null
 */
function getElementText(selector) {
    // Simulating element might not be found
    var found = Math.random() > 0.5;
    return found ? "Text from ".concat(selector) : null;
}
// Handling null/undefined with optional chaining and nullish coalescing
var elementText = getElementText('#username');
var displayText = elementText !== null && elementText !== void 0 ? elementText : 'Default text'; // Use default if null/undefined
// ============================================================================
// 5. SYMBOL TYPE
// ============================================================================
/**
 * Symbols are unique and immutable primitive values
 * Useful for creating unique property keys
 */
var TEST_ID = Symbol('testId');
var SUITE_ID = Symbol('suiteId');
// Each symbol is unique even with same description
var id1 = Symbol('id');
var id2 = Symbol('id');
console.log(id1 === id2); // false - each symbol is unique
/**
 * Test metadata using symbols as keys
 */
var testMetadata = (_a = {},
    _a[TEST_ID] = 'TC-001',
    _a[SUITE_ID] = 'SUITE-LOGIN',
    _a.name = 'Login Test',
    _a);
// ============================================================================
// 6. BIGINT TYPE
// ============================================================================
/**
 * BigInt represents whole numbers larger than 2^53 - 1
 * Useful for handling large numbers like timestamps or IDs
 */
var largeNumber = 9007199254740991n;
var timestampBigInt = BigInt(Date.now());
// Cannot mix BigInt with regular numbers
// let mixed = largeNumber + 100; // ❌ Error
var validAddition = largeNumber + 100n; // ✅ Correct
// ============================================================================
// 7. ANY TYPE (Use Sparingly!)
// ============================================================================
/**
 * The any type opts out of type checking
 * Should be avoided in most cases as it defeats TypeScript's purpose
 */
function returnmeValues(a) { }
var dynamicValue = 'string';
dynamicValue = 42; // No error
dynamicValue = true; // No error
dynamicValue = {}; // No error
/**
 * Better alternative: unknown type (type-safe any)
 */
var unknownValue = 'some value';
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
function logTestInfo(message) {
    console.log("[TEST INFO] ".concat(message));
    // No return statement or return undefined
}
/**
 * Clicks an element (action with no return value)
 * @param {string} selector - Element selector
 * @returns {void}
 */
function clickElement(selector) {
    console.log("Clicking element: ".concat(selector));
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
function throwError(message) {
    throw new Error(message);
}
/**
 * Infinite loop - never returns
 * @returns {never}
 */
function infiniteLoop() {
    while (true) {
        // Process indefinitely
    }
}
/**
 * Exhaustive check using never
 * @param {never} value - Should never receive a value
 */
function assertNever(value) {
    throw new Error("Unexpected value: ".concat(value));
}
// ============================================================================
// 10. OBJECT TYPE
// ============================================================================
/**
 * The object type represents any non-primitive type
 */
var testConfig = {
    browser: 'chrome',
    timeout: 5000
};
var betterConfig = {
    browser: 'chrome',
    timeout: 5000,
    headless: true
};
/**
 * Creates a test execution result
 * @param {string} name - Test name
 * @param {boolean} passed - Whether test passed
 * @param {number} duration - Test duration in ms
 * @returns {TestExecutionResult} Complete test result
 */
function createTestResult(name, passed, duration) {
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
var chromeConfig = {
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
var someValue = 'this is a string';
var strLength = someValue.length;
// Using angle-bracket syntax (not usable in JSX)
var anotherValue = 'another string';
var anotherLength = anotherValue.length;
/**
 * Practical example: Asserting DOM element types
 */
function getInputValue(selector) {
    // Simulating document.querySelector
    var element = { value: 'test@example.com' };
    // Assert the type
    var inputElement = element;
    return inputElement.value;
}
