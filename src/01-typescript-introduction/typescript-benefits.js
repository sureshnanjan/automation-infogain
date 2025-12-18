"use strict";
/**
 * @fileoverview Introduction to TypeScript and Its Benefits
 * @author Suresh - Software Trainer
 * @description This file demonstrates why TypeScript is valuable for automation testing
 * and provides practical examples of its benefits over plain JavaScript.
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
exports.AutomationFramework = void 0;
/**
 * WHAT IS TYPESCRIPT?
 * ====================
 * TypeScript is a strongly-typed programming language that builds on JavaScript.
 * It adds optional static typing and other features to JavaScript, making it easier
 * to build large-scale, maintainable applications.
 *
 * Key Points:
 * - TypeScript is a superset of JavaScript (all valid JS is valid TS)
 * - Compiles to clean, readable JavaScript
 * - Runs anywhere JavaScript runs (browsers, Node.js, etc.)
 * - Developed and maintained by Microsoft
 */
/**
 * BENEFIT 1: EARLY ERROR DETECTION
 * ==================================
 * TypeScript catches errors at compile-time rather than runtime
 */
// ❌ JavaScript - Error only caught at runtime
function addNumbersJS(a, b) {
    return a + b;
}
addNumbersJS("suresh", 20);
// This will fail at runtime with unexpected results
// console.log(addNumbersJS("10", 20)); // Output: "1020" (string concatenation)
// ✅ TypeScript - Error caught during development
/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of the two numbers
 */
function addNumbers(a, b) {
    return a + b;
}
//addNumbers("10", 20);
// TypeScript will show error before running: Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(addNumbers("10", 20)); // ❌ Compile-time error
console.log(addNumbers(10, 20)); // ✅ Output: 30
//created By Anusha
var user1 = { id: 1, name: "Anusha", email: "anusha@example.com", isActive: true };
function userInfo(user1) {
    console.log("User Name: ".concat(user1.name));
    console.log("User Email: ".concat(user1.email));
    console.log("User ID: ".concat(user1.id));
}
function meetingDetails(meet) {
    console.log("ID: ".concat(meet.meetID, ", Name: ").concat(meet.meetName, ", Password: ").concat(meet.meetPassword));
}
meetingDetails({ meetID: 123, meetName: "Training", meetPassword: "1234567" });
/**
 * Example function showing autocomplete benefits
 * @param {User} user - User object with type information
 */
function displayUserInfo(user) {
    // IDE will autocomplete properties: id, name, email, isActive
    console.log("User: ".concat(user.name, ", Email: ").concat(user.email));
    // Typo protection: user.nmae would show an error immediately
}
/**
 * BENEFIT 3: SELF-DOCUMENTING CODE
 * ==================================
 * Types serve as inline documentation
 */
/**
 * Locator strategy enumeration for test automation
 */
var LocatorStrategy;
(function (LocatorStrategy) {
    LocatorStrategy["ID"] = "id";
    LocatorStrategy["CSS"] = "css";
    LocatorStrategy["XPATH"] = "xpath";
    LocatorStrategy["TEXT"] = "text";
})(LocatorStrategy || (LocatorStrategy = {}));
//created By Anusha
var csslocator = LocatorStrategy.CSS;
var idlocator = LocatorStrategy.ID;
var xpathlocator = LocatorStrategy.XPATH;
var textlocator = LocatorStrategy.TEXT;
/**
 * Finds an element using the specified locator
 * The function signature clearly shows what types are expected
 * @param {ElementLocator} locator - Locator configuration object
 * @returns {string} Description of how element would be found
 */
function findElement(locator) {
    return "Finding element by ".concat(locator.strategy, ": ").concat(locator.value);
}
// Usage is clear and self-documenting
var loginButton = {
    strategy: LocatorStrategy.CSS,
    value: '#loginBtn',
    timeout: 5000
};
/**
 * Test runner class demonstrating refactoring safety
 */
var TestRunner = /** @class */ (function () {
    function TestRunner(config) {
        this.config = config;
    }
    /**
     * If we rename browser to browserName in TestConfig,
     * TypeScript will immediately show all places that need updating
     */
    TestRunner.prototype.getBrowserName = function () {
        return this.config.browser; // TypeScript tracks all usages
    };
    return TestRunner;
}());
/**
 * BENEFIT 5: ADVANCED FEATURES FOR AUTOMATION
 * =============================================
 * TypeScript provides features that make test automation more robust
 */
/**
 * Generic function for handling test data of any type
 * @template T - Generic type parameter
 * @param {T[]} data - Array of test data
 * @returns {T} First item from the array
 */
function getFirstTestData(data) {
    return data[0];
}
// Type-safe usage with different data types
var numberData = getFirstTestData([1, 2, 3]); // Returns number
var stringData = getFirstTestData(['test1', 'test2']); // Returns string
/**
 * BENEFIT 6: NULL AND UNDEFINED SAFETY
 * ======================================
 * TypeScript helps prevent null/undefined errors
 */
/**
 * Page object demonstrating null safety
 */
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.username = null;
    }
    /**
     * Sets the username with null checking
     * @param {string | null} name - Username or null
     */
    LoginPage.prototype.setUsername = function (name) {
        this.username = name;
    };
    /**
     * Gets the username safely
     * @returns {string} Username or default message
     */
    LoginPage.prototype.getUsername = function () {
        var _a;
        // TypeScript forces us to handle null case
        return (_a = this.username) !== null && _a !== void 0 ? _a : 'No username set';
    };
    return LoginPage;
}());
/**
 * Processes a failed test with all required information
 * @param {FailedTest} test - Failed test object
 */
function processFailedTest(test) {
    console.log("Test ".concat(test.name, " failed: ").concat(test.errorMessage));
    console.log("Screenshot saved at: ".concat(test.screenshotPath));
}
/**
 * TYPESCRIPT VS JAVASCRIPT COMPARISON
 * =====================================
 */
/**
 * Example showing the difference in approach
 */
// JavaScript approach - no type safety
var jsCalculator = {
    add: function (a, b) {
        return a + b; // Could be numbers or strings!
    }
};
/**
 * Type-safe calculator implementation
 */
var tsCalculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) {
        if (b === 0)
            throw new Error('Cannot divide by zero');
        return a / b;
    }
};
/**
 * Automation framework class showing TypeScript benefits
 */
var AutomationFramework = /** @class */ (function () {
    function AutomationFramework(config) {
        this.config = config;
    }
    /**
     * Initializes the browser with type-safe configuration
     */
    AutomationFramework.prototype.initializeBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Launching ".concat(this.config.browserName, " in ").concat(this.config.headless ? 'headless' : 'headed', " mode"));
                return [2 /*return*/];
            });
        });
    };
    /**
     * Executes tests with proper typing
     */
    AutomationFramework.prototype.executeTests = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Running tests on ".concat(this.config.baseURL));
                console.log("Retries: ".concat(this.config.execution.retries, ", Timeout: ").concat(this.config.execution.timeout, "ms"));
                return [2 /*return*/];
            });
        });
    };
    return AutomationFramework;
}());
exports.AutomationFramework = AutomationFramework;
// Usage with full type checking
var frameworkConfig = {
    browserName: 'chrome',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    execution: {
        retries: 2,
        timeout: 30000,
        parallel: true
    },
    baseURL: 'https://example.com'
};
