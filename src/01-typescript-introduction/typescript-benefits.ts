/**
 * @fileoverview Introduction to TypeScript and Its Benefits
 * @author Suresh - Software Trainer
 * @description This file demonstrates why TypeScript is valuable for automation testing
 * and provides practical examples of its benefits over plain JavaScript.
 */

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
function addNumbers(a: number, b: number): number {
    return a + b;
}

//addNumbers("10", 20);

// TypeScript will show error before running: Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(addNumbers("10", 20)); // ❌ Compile-time error
console.log(addNumbers(10, 20)); // ✅ Output: 30


/**
 * BENEFIT 2: BETTER IDE SUPPORT & AUTOCOMPLETE
 * ==============================================
 * TypeScript provides intelligent code completion and suggestions
 */

/**
 * User interface for better autocomplete
 */
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

/**
 * Example function showing autocomplete benefits
 * @param {User} user - User object with type information
 */
function displayUserInfo(user: User): void {
    // IDE will autocomplete properties: id, name, email, isActive
    console.log(`User: ${user.name}, Email: ${user.email}`);
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
enum LocatorStrategy {
    ID = 'id',
    CSS = 'css',
    XPATH = 'xpath',
    TEXT = 'text'
}

/**
 * Web element locator configuration
 */
interface ElementLocator {
    strategy: LocatorStrategy;
    value: string;
    timeout?: number; // Optional property
}

/**
 * Finds an element using the specified locator
 * The function signature clearly shows what types are expected
 * @param {ElementLocator} locator - Locator configuration object
 * @returns {string} Description of how element would be found
 */
function findElement(locator: ElementLocator): string {
    return `Finding element by ${locator.strategy}: ${locator.value}`;
}

// Usage is clear and self-documenting
const loginButton: ElementLocator = {
    strategy: LocatorStrategy.CSS,
    value: '#loginBtn',
    timeout: 5000
};


/**
 * BENEFIT 4: REFACTORING CONFIDENCE
 * ===================================
 * TypeScript makes large-scale refactoring safer
 */

/**
 * Test configuration interface
 */
interface TestConfig {
    browser: string;
    headless: boolean;
    timeout: number;
}

/**
 * Test runner class demonstrating refactoring safety
 */
class TestRunner {
    private config: TestConfig;

    constructor(config: TestConfig) {
        this.config = config;
    }

    /**
     * If we rename browser to browserName in TestConfig,
     * TypeScript will immediately show all places that need updating
     */
    getBrowserName(): string {
        return this.config.browser; // TypeScript tracks all usages
    }
}


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
function getFirstTestData<T>(data: T[]): T {
    return data[0];
}

// Type-safe usage with different data types
const numberData = getFirstTestData<number>([1, 2, 3]); // Returns number
const stringData = getFirstTestData<string>(['test1', 'test2']); // Returns string


/**
 * BENEFIT 6: NULL AND UNDEFINED SAFETY
 * ======================================
 * TypeScript helps prevent null/undefined errors
 */

/**
 * Page object demonstrating null safety
 */
class LoginPage {
    private username: string | null = null;

    /**
     * Sets the username with null checking
     * @param {string | null} name - Username or null
     */
    setUsername(name: string | null): void {
        this.username = name;
    }

    /**
     * Gets the username safely
     * @returns {string} Username or default message
     */
    getUsername(): string {
        // TypeScript forces us to handle null case
        return this.username ?? 'No username set';
    }
}


/**
 * BENEFIT 7: UNION AND INTERSECTION TYPES
 * =========================================
 * Flexible type combinations for complex scenarios
 */

/**
 * Test result can be multiple types
 */
type TestResult = 'passed' | 'failed' | 'skipped';

/**
 * Base test interface
 */
interface BaseTest {
    name: string;
    duration: number;
}

/**
 * Screenshot capability interface
 */
interface ScreenshotCapable {
    screenshotPath: string;
}

/**
 * Failed test combines both interfaces
 */
type FailedTest = BaseTest & ScreenshotCapable & {
    result: 'failed';
    errorMessage: string;
};

/**
 * Processes a failed test with all required information
 * @param {FailedTest} test - Failed test object
 */
function processFailedTest(test: FailedTest): void {
    console.log(`Test ${test.name} failed: ${test.errorMessage}`);
    console.log(`Screenshot saved at: ${test.screenshotPath}`);
}


/**
 * TYPESCRIPT VS JAVASCRIPT COMPARISON
 * =====================================
 */

/**
 * Example showing the difference in approach
 */

// JavaScript approach - no type safety
const jsCalculator = {
    add: function(a, b) {
        return a + b; // Could be numbers or strings!
    }
};

// TypeScript approach - type safe
/**
 * Calculator interface defining contract
 */
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

/**
 * Type-safe calculator implementation
 */
const tsCalculator: Calculator = {
    add: (a: number, b: number): number => a + b,
    subtract: (a: number, b: number): number => a - b,
    multiply: (a: number, b: number): number => a * b,
    divide: (a: number, b: number): number => {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    }
};


/**
 * REAL-WORLD AUTOMATION EXAMPLE
 * ===============================
 */

/**
 * Browser configuration options
 */
interface BrowserOptions {
    browserName: 'chrome' | 'firefox' | 'safari' | 'edge';
    headless: boolean;
    viewport?: {
        width: number;
        height: number;
    };
}

/**
 * Test execution options
 */
interface TestExecutionOptions {
    retries: number;
    timeout: number;
    parallel: boolean;
}

/**
 * Complete test configuration
 */
interface CompleteTestConfig extends BrowserOptions {
    execution: TestExecutionOptions;
    baseURL: string;
}

/**
 * Automation framework class showing TypeScript benefits
 */
class AutomationFramework {
    private config: CompleteTestConfig;

    constructor(config: CompleteTestConfig) {
        this.config = config;
    }

    /**
     * Initializes the browser with type-safe configuration
     */
    async initializeBrowser(): Promise<void> {
        console.log(`Launching ${this.config.browserName} in ${this.config.headless ? 'headless' : 'headed'} mode`);
        // TypeScript ensures all required properties are present
    }

    /**
     * Executes tests with proper typing
     */
    async executeTests(): Promise<void> {
        console.log(`Running tests on ${this.config.baseURL}`);
        console.log(`Retries: ${this.config.execution.retries}, Timeout: ${this.config.execution.timeout}ms`);
    }
}

// Usage with full type checking
const frameworkConfig: CompleteTestConfig = {
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


/**
 * KEY TAKEAWAYS
 * ==============
 * 
 * 1. Type Safety: Catch errors before runtime
 * 2. Better Tooling: Enhanced IDE support with autocomplete and refactoring
 * 3. Self-Documentation: Code is easier to understand and maintain
 * 4. Scalability: Easier to manage large codebases
 * 5. Team Collaboration: Clear contracts between different parts of code
 * 6. Confidence: Refactor without fear of breaking things
 * 7. Modern Features: Access to latest JavaScript features with type safety
 * 
 * For automation testing specifically:
 * - More reliable test code
 * - Better page object models
 * - Type-safe test data management
 * - Clearer test configurations
 * - Easier framework maintenance
 */

export type {
    User,
    LocatorStrategy,
    ElementLocator,
    TestConfig,
    TestResult,
    Calculator,
    CompleteTestConfig,
};
export {
    AutomationFramework
};

