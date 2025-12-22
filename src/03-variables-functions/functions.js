"use strict";
/**
 * @fileoverview Functions in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to functions: declarations, expressions,
 * parameters, return types, and best practices for automation
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageUtils = void 0;
exports.runTest = runTest;
exports.executeTest = executeTest;
exports.launchBrowser = launchBrowser;
exports.runTestSuite = runTestSuite;
exports.findElement = findElement;
exports.getFirst = getFirst;
exports.navigateToUrl = navigateToUrl;
exports.performLogin = performLogin;
exports.generateRandomEmail = generateRandomEmail;
exports.generateTestUser = generateTestUser;
/**
 * FUNCTIONS IN TYPESCRIPT
 * ========================
 * Functions are the building blocks of any application.
 * TypeScript adds type safety to JavaScript functions through:
 * - Parameter type annotations
 * - Return type annotations
 * - Optional and default parameters
 * - Rest parameters
 * - Function overloading
 */
// ============================================================================
// 1. FUNCTION DECLARATIONS
// ============================================================================
/**
 * Basic function declaration with type annotations
 * @param {string} testName - Name of the test
 * @param {number} timeout - Timeout in milliseconds
 * @returns {void}
 */
function runTest(testName, timeout) {
    console.log("Running ".concat(testName, " with ").concat(timeout, "ms timeout"));
}
// FFunctions are First-Class Citizens in TypeScript
// Declaration
function showDetails() {
    console.log("Showing Details");
}
// Ananymous Function assigned to a variable
var myfunc = function () {
    console.log("Anonymous Function");
};
// Arrow Function // Lambda Function
var myArrowFunc = function () { return console.log("Arrow Function"); };
var myArrowFunc2 = function () {
    console.log("Arrow Function with block");
    console.log("Multiple statements");
    console;
};
myArrowFunc();
myArrowFunc2();
var myarrowfunctinExecutesAnother = function (anotherFn) {
    console.log("Before calling the function");
    anotherFn();
    console.log("After calling the function");
};
myarrowfunctinExecutesAnother(showDetails);
function demoFunction(param1, param2, param3) {
}
demoFunction(1, "test", true);
//demoFunction("test", true);
// Call back
function callandExecute(anotherFn) {
    console.log("Before calling the function");
    anotherFn();
    console.log("After calling the function");
}
// Invocation
showDetails();
myfunc();
callandExecute(showDetails);
callandExecute(myfunc);
/**
 * Function with return value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of the numbers
 */
function add(a, b) {
    return a + b;
}
/**
 * Function with multiple return statements
 * @param {number} score - Test score
 * @returns {string} Test result status
 */
function getTestResult(score) {
    if (score >= 90) {
        return 'Excellent';
    }
    else if (score >= 70) {
        return 'Good';
    }
    else {
        return 'Needs Improvement';
    }
}
// ============================================================================
// 2. FUNCTION EXPRESSIONS
// ============================================================================
/**
 * Function expression assigned to a variable
 */
var multiply = function (a, b) {
    return a * b;
};
/**
 * Named function expression (useful for debugging)
 */
var divide = function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};
/**
 * Function type annotation for variables
 */
var calculator;
calculator = function (a, b) {
    return a + b;
};
// ============================================================================
// 3. OPTIONAL PARAMETERS
// ============================================================================
/**
 * Function with optional parameters (use ?)
 * Optional parameters must come after required parameters
 *
 * @param {string} testName - Required test name
 * @param {number} [retries] - Optional retry count
 * @param {boolean} [captureScreenshot] - Optional screenshot flag
 * @returns {void}
 */
function executeTest(testName, retries, captureScreenshot) {
    console.log("Test: ".concat(testName));
    console.log("Retries: ".concat(retries !== null && retries !== void 0 ? retries : 0)); // Use default if undefined
    console.log("Screenshot: ".concat(captureScreenshot !== null && captureScreenshot !== void 0 ? captureScreenshot : false));
}
// Usage examples
executeTest('Login Test'); // All optionals undefined
executeTest('Login Test', 3); // retries provided
executeTest('Login Test', 3, true); // All parameters provided
/**
 * Checking if optional parameter was provided
 */
function logTestInfo(testName, details) {
    console.log("Test: ".concat(testName));
    if (details !== undefined) {
        console.log("Details: ".concat(details));
    }
}
// ============================================================================
// 4. DEFAULT PARAMETERS
// ============================================================================
/**
 * Function with default parameter values
 * Default parameters can come anywhere in parameter list
 *
 * @param {string} browser - Browser name
 * @param {boolean} headless - Run in headless mode (default: true)
 * @param {number} width - Viewport width (default: 1920)
 * @param {number} height - Viewport height (default: 1080)
 * @returns {string} Browser configuration summary
 */
function launchBrowser(browser, headless, width, height) {
    if (headless === void 0) { headless = true; }
    if (width === void 0) { width = 1920; }
    if (height === void 0) { height = 1080; }
    return "".concat(browser, ": ").concat(headless ? 'Headless' : 'Headed', " (").concat(width, "x").concat(height, ")");
}
// Usage examples
launchBrowser('chrome'); // Uses all defaults
launchBrowser('firefox', false); // Overrides headless
launchBrowser('safari', true, 1366, 768); // Overrides all defaults
function startBrowser(options) {
    if (options === void 0) { options = { name: 'chrome', headless: true }; }
    console.log("Starting ".concat(options.name, ", Headless: ").concat(options.headless));
}
// ============================================================================
// 5. REST PARAMETERS
// ============================================================================
/**
 * Rest parameters collect remaining arguments into an array
 * Must be the last parameter
 *
 * @param {string} suiteName - Test suite name
 * @param {...string[]} testCases - Variable number of test cases
 * @returns {void}
 */
function runTestSuite(suiteName) {
    var testCases = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        testCases[_i - 1] = arguments[_i];
    }
    console.log("Suite: ".concat(suiteName));
    console.log("Running ".concat(testCases.length, " tests:"));
    testCases.forEach(function (test, index) {
        console.log("  ".concat(index + 1, ". ").concat(test));
    });
}
// Usage
runTestSuite('Login Suite', 'TC-001', 'TC-002', 'TC-003');
runTestSuite('Checkout Suite', 'TC-100', 'TC-101');
/**
 * Rest parameters with typed elements
 */
function calculateAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    if (scores.length === 0)
        return 0;
    var sum = scores.reduce(function (acc, score) { return acc + score; }, 0);
    return sum / scores.length;
}
var average = calculateAverage(95, 87, 92, 88, 91); // 90.6
/**
 * Combining required, optional, default, and rest parameters
 */
function executeTests(environment, // Required
parallel, // Default
retries) {
    if (parallel === void 0) { parallel = false; }
    var testNames = []; // Rest
    for (var _i = 3 // Rest
    ; _i < arguments.length // Rest
    ; _i++ // Rest
    ) {
        testNames[_i - 3] = arguments[_i]; // Rest
    }
    console.log("Environment: ".concat(environment));
    console.log("Parallel: ".concat(parallel));
    console.log("Retries: ".concat(retries !== null && retries !== void 0 ? retries : 0));
    console.log("Tests: ".concat(testNames.join(', ')));
}
// ============================================================================
// 6. FUNCTION RETURN TYPES
// ============================================================================
/**
 * Explicit return types (recommended for clarity)
 */
/**
 * Returns a string
 */
function formatTestName(name) {
    return name.toUpperCase();
}
/**
 * Returns a number
 */
function getTestDuration(start, end) {
    return end - start;
}
/**
 * Returns a boolean
 */
function isTestPassing(score) {
    return score >= 70;
}
/**
 * Returns void (no return value)
 */
function logTestResult(passed) {
    console.log(passed ? 'PASSED' : 'FAILED');
}
/**
 * Returns an object
 */
function createTestReport(name, passed) {
    return {
        testName: name,
        result: passed ? 'PASSED' : 'FAILED',
        timestamp: Date.now()
    };
}
/**
 * Returns an array
 */
function getFailedTests(tests) {
    return tests
        .filter(function (test) { return !test.passed; })
        .map(function (test) { return test.name; });
}
/**
 * Returns a union type
 */
function getConfigValue(key) {
    var config = {
        timeout: 5000,
        headless: true,
        baseUrl: 'https://example.com'
    };
    return config[key];
}
/**
 * Returns never (function never returns normally)
 */
function throwError(message) {
    throw new Error(message);
}
/**
 * Implementation (must handle all overload cases)
 */
function findElement(selector, timeout, throwError) {
    var actualTimeout = timeout !== null && timeout !== void 0 ? timeout : 5000;
    var shouldThrow = throwError !== null && throwError !== void 0 ? throwError : true;
    console.log("Finding ".concat(selector, " with ").concat(actualTimeout, "ms timeout"));
    // Simulated element finding
    var found = Math.random() > 0.1;
    if (!found && shouldThrow) {
        throw new Error("Element not found: ".concat(selector));
    }
    return found ? "Element: ".concat(selector) : '';
}
// Usage - all valid due to overloads
findElement('#loginBtn');
findElement('#loginBtn', 10000);
findElement('#loginBtn', 10000, false);
function processTestData(data) {
    if (typeof data === 'string') {
        return data.split(',');
    }
    return [data, data * 2, data * 3];
}
// ============================================================================
// 8. GENERIC FUNCTIONS
// ============================================================================
/**
 * Generic functions work with any type
 * Type parameter in angle brackets: <T>
 */
/**
 * Generic function to get first element of array
 * @template T
 * @param {T[]} array - Array of any type
 * @returns {T | undefined} First element or undefined
 */
function getFirst(array) {
    return array[0];
}
// Usage with different types
var firstString = getFirst(['a', 'b', 'c']); // Type: string | undefined
var firstNumber = getFirst([1, 2, 3]); // Type: number | undefined
var firstBool = getFirst([true, false]); // Type inferred: boolean | undefined
/**
 * Generic function with multiple type parameters
 */
function createPair(key, value) {
    return { key: key, value: value };
}
var pair1 = createPair('count', 5);
var pair2 = createPair('name', 'Test'); // Types inferred
function getTestName(item) {
    return item.name;
}
// Works with any object that has a name property
getTestName({ name: 'Test 1', passed: true });
getTestName({ name: 'Suite A', count: 5 });
// ============================================================================
// 9. ASYNC FUNCTIONS
// ============================================================================
/**
 * Async functions always return a Promise
 */
/**
 * Basic async function
 * @param {string} url - URL to navigate to
 * @returns {Promise<void>}
 */
function navigateToUrl(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Navigating to ".concat(url));
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    console.log('Navigation complete');
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Async function returning a value
 * @param {string} selector - Element selector
 * @returns {Promise<string>} Element text
 */
function getElementText(selector) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, "Text from ".concat(selector)];
            }
        });
    });
}
/**
 * Async function with error handling
 */
function performLogin(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("Logging in as ".concat(username));
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    // Simulate login validation
                    if (username && password) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                case 2:
                    error_1 = _a.sent();
                    console.error('Login failed:', error_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Multiple async operations
 */
function runCompleteTest() {
    return __awaiter(this, void 0, void 0, function () {
        var text, loggedIn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigateToUrl('https://example.com')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getElementText('#header')];
                case 2:
                    text = _a.sent();
                    return [4 /*yield*/, performLogin('user@test.com', 'password')];
                case 3:
                    loggedIn = _a.sent();
                    console.log("Header: ".concat(text, ", Logged in: ").concat(loggedIn));
                    return [2 /*return*/];
            }
        });
    });
}
// ============================================================================
// 10. HIGHER-ORDER FUNCTIONS
// ============================================================================
/**
 * Functions that take functions as parameters
 * or return functions
 */
/**
 * Function that takes another function as parameter
 */
function retryOperation(operation, maxRetries) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var attempt, result_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    attempt = 0;
                    _a.label = 1;
                case 1:
                    if (!(attempt < maxRetries)) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, operation()];
                case 3:
                    result_1 = _a.sent();
                    resolve(result_1);
                    return [2 /*return*/];
                case 4:
                    error_2 = _a.sent();
                    if (attempt === maxRetries - 1) {
                        reject(error_2);
                    }
                    return [3 /*break*/, 5];
                case 5:
                    attempt++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    }); });
}
// Usage
retryOperation(function () { return performLogin('user', 'pass'); }, 3);
/**
 * Function that returns a function (closure)
 */
function createTestExecutor(environment) {
    return function (testName) {
        console.log("Running ".concat(testName, " in ").concat(environment));
    };
}
var devExecutor = createTestExecutor('development');
var prodExecutor = createTestExecutor('production');
devExecutor('Login Test'); // Running Login Test in development
prodExecutor('Login Test'); // Running Login Test in production
/**
 * Currying - transforming function with multiple args into sequence of functions
 */
function multiply3(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
var result = multiply3(2)(3)(4); // 24
// ============================================================================
// 11. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================
/**
 * Page interaction utilities
 */
var PageUtils = /** @class */ (function () {
    function PageUtils() {
    }
    /**
     * Clicks an element with retry logic
     */
    PageUtils.clickElement = function (selector_1) {
        return __awaiter(this, arguments, void 0, function (selector, retries) {
            var i, error_3;
            if (retries === void 0) { retries = 3; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < retries)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        console.log("Clicking ".concat(selector, " (attempt ").concat(i + 1, ")"));
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4:
                        error_3 = _a.sent();
                        if (i === retries - 1)
                            throw error_3;
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Waits for element with custom condition
     */
    PageUtils.waitForElement = function (selector_1) {
        return __awaiter(this, arguments, void 0, function (selector, condition, timeout) {
            var startTime, element;
            if (condition === void 0) { condition = function () { return true; }; }
            if (timeout === void 0) { timeout = 5000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(Date.now() - startTime < timeout)) return [3 /*break*/, 3];
                        element = "Element: ".concat(selector);
                        if (condition(element)) {
                            return [2 /*return*/, element];
                        }
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: throw new Error("Timeout waiting for ".concat(selector));
                }
            });
        });
    };
    return PageUtils;
}());
exports.PageUtils = PageUtils;
/**
 * Test data generator functions
 */
function generateRandomEmail() {
    var timestamp = Date.now();
    return "test".concat(timestamp, "@example.com");
}
function generateTestUser(role) {
    if (role === void 0) { role = 'user'; }
    return {
        username: generateRandomEmail(),
        password: 'Test@' + Date.now(),
        role: role
    };
}
/**
 * Test reporter functions
 */
function logTestStart(testName) {
    console.log("\n".concat('='.repeat(50)));
    console.log("Starting: ".concat(testName));
    console.log("".concat('='.repeat(50)));
}
function logTestEnd(testName, passed, duration) {
    console.log("".concat('='.repeat(50)));
    console.log("".concat(testName, ": ").concat(passed ? 'PASSED' : 'FAILED'));
    console.log("Duration: ".concat(duration, "ms"));
    console.log("".concat('='.repeat(50), "\n"));
}
