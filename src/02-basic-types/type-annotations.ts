/**
 * @fileoverview Type Annotations in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to type annotations with practical automation examples
 */

/**
 * TYPE ANNOTATIONS
 * =================
 * Type annotations explicitly tell TypeScript what type a variable,
 * parameter, or return value should be. This is the foundation of
 * TypeScript's type safety.
 * 
 * Syntax: variableName: type = value
 */

// ============================================================================
// 1. VARIABLE TYPE ANNOTATIONS
// ============================================================================

/**
 * Basic variable annotations
 * Format: let/const variableName: type = value
 */

// Primitive type annotations
let testName: string = 'Login Test';
let testDuration: number = 5000;
let testPassed: boolean = true;
let testData: null = null;
let notDefined: undefined = undefined;

// Multiple variables with same type
let firstName: string, lastName: string, email: string;
firstName = 'John';
lastName = 'Doe';
email = 'john.doe@example.com';

/**
 * Array type annotations (two ways)
 */
let testCases: string[] = ['TC-001', 'TC-002', 'TC-003'];
let testScores: Array<number> = [95, 87, 92, 100];

/**
 * Object type annotations (inline)
 */
let user: { name: string; age: number; email: string } = {
    name: 'Test User',
    age: 30,
    email: 'test@example.com'
};


// ============================================================================
// 2. FUNCTION PARAMETER ANNOTATIONS
// ============================================================================

/**
 * Annotating function parameters ensures type safety for inputs
 * Format: function name(param: type): returnType { }
 */

/**
 * Navigates to a URL with typed parameters
 * @param {string} url - The URL to navigate to
 * @param {number} timeout - Navigation timeout in milliseconds
 * @returns {void}
 */
function navigateToURL(url: string, timeout: number): void {
    console.log(`Navigating to ${url} with ${timeout}ms timeout`);
}

// Usage with type checking
navigateToURL('https://example.com', 5000); // ✅ Correct
// navigateToURL('https://example.com', '5000'); // ❌ Error: string not assignable to number

/**
 * Multiple parameters with different types
 * @param {string} username - User's username
 * @param {string} password - User's password
 * @param {boolean} rememberMe - Whether to remember login
 * @returns {boolean} Login success status
 */
function performLogin(
    username: string,
    password: string,
    rememberMe: boolean
): boolean {
    console.log(`Logging in: ${username}, Remember: ${rememberMe}`);
    return true;
}

/**
 * Optional parameters (use ?)
 * @param {string} selector - Element selector
 * @param {number} [timeout] - Optional timeout (defaults to 5000)
 * @returns {string}
 */
function findElement(selector: string, timeout?: number): string {
    const actualTimeout = timeout ?? 5000; // Use default if not provided
    return `Found element ${selector} within ${actualTimeout}ms`;
}

// Usage
findElement('#loginBtn');        // ✅ timeout is optional
findElement('#loginBtn', 10000); // ✅ timeout provided

/**
 * Default parameters with type annotations
 * @param {string} browser - Browser name
 * @param {boolean} headless - Run in headless mode (default: true)
 * @param {number} width - Viewport width (default: 1920)
 * @returns {string}
 */
function launchBrowser(
    browser: string,
    headless: boolean = true,
    width: number = 1920
): string {
    return `Launching ${browser}, Headless: ${headless}, Width: ${width}`;
}

/**
 * Rest parameters with type annotations
 * @param {string} suiteName - Test suite name
 * @param {...string[]} testNames - Variable number of test names
 * @returns {void}
 */
function runTestSuite(suiteName: string, ...testNames: string[]): void {
    console.log(`Running suite: ${suiteName}`);
    testNames.forEach(test => console.log(`  - ${test}`));
}

runTestSuite('Login Suite', 'TC-001', 'TC-002', 'TC-003');


// ============================================================================
// 3. FUNCTION RETURN TYPE ANNOTATIONS
// ============================================================================

/**
 * Explicitly declaring what a function returns
 */

/**
 * Returns the current timestamp
 * @returns {number} Current timestamp in milliseconds
 */
function getCurrentTimestamp(): number {
    return Date.now();
}

/**
 * Returns test execution status
 * @param {boolean} allTestsPassed - Whether all tests passed
 * @returns {string} Status message
 */
function getTestStatus(allTestsPassed: boolean): string {
    return allTestsPassed ? 'All tests passed' : 'Some tests failed';
}

/**
 * Function that doesn't return a value
 * @param {string} message - Message to log
 * @returns {void}
 */
function logMessage(message: string): void {
    console.log(message);
    // No return statement
}

/**
 * Function that returns an object with specific shape
 * @param {string} name - Test name
 * @param {boolean} passed - Test result
 * @returns {{ name: string; passed: boolean; timestamp: number }}
 */
function createTestReport(name: string, passed: boolean): {
    name: string;
    passed: boolean;
    timestamp: number;
} {
    return {
        name: name,
        passed: passed,
        timestamp: Date.now()
    };
}

/**
 * Function returning a Promise
 * @param {string} url - URL to fetch
 * @returns {Promise<string>} Promise resolving to response text
 */
async function fetchData(url: string): Promise<string> {
    // Simulating async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Data from ${url}`), 1000);
    });
}

/**
 * Function that never returns (throws error)
 * @param {string} errorMsg - Error message
 * @returns {never}
 */
function throwTestError(errorMsg: string): never {
    throw new Error(`Test Error: ${errorMsg}`);
}


// ============================================================================
// 4. ARROW FUNCTION ANNOTATIONS
// ============================================================================

/**
 * Arrow functions with type annotations
 */

/**
 * Simple arrow function with annotations
 */
const add = (a: number, b: number): number => {
    return a + b;
};

/**
 * Single expression arrow function
 */
const multiply = (a: number, b: number): number => a * b;

/**
 * Arrow function with no parameters
 */
const getRandomNumber = (): number => Math.random();

/**
 * Arrow function with object parameter
 */
const printUser = (user: { name: string; email: string }): void => {
    console.log(`${user.name}: ${user.email}`);
};

/**
 * Arrow function returning object (note the parentheses)
 */
const createUser = (name: string, email: string): { name: string; email: string } => ({
    name: name,
    email: email
});

/**
 * Async arrow function
 */
const waitForElement = async (selector: string): Promise<boolean> => {
    // Simulating wait
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
};


// ============================================================================
// 5. COMPLEX TYPE ANNOTATIONS
// ============================================================================

/**
 * Union types - value can be one of several types
 */

/**
 * Function accepting multiple types
 * @param {string | number} id - User ID as string or number
 * @returns {string}
 */
function getUserById(id: string | number): string {
    return `User ID: ${id}`;
}

getUserById(123);      // ✅ number
getUserById('ABC123'); // ✅ string

/**
 * Literal type - specific values only
 */
type TestStatus = 'passed' | 'failed' | 'skipped';

/**
 * Sets test status
 * @param {TestStatus} status - Test status (must be exact value)
 * @returns {void}
 */
function setTestStatus(status: TestStatus): void {
    console.log(`Test status: ${status}`);
}

setTestStatus('passed');  // ✅
// setTestStatus('pending'); // ❌ Error: not a valid literal

/**
 * Intersection types - combines multiple types
 */
type Timestamp = {
    createdAt: number;
    updatedAt: number;
};

type TestInfo = {
    name: string;
    status: string;
};

type TimestampedTest = TestInfo & Timestamp;

/**
 * Function using intersection type
 * @param {TimestampedTest} test - Test with timestamp
 * @returns {void}
 */
function logTestWithTime(test: TimestampedTest): void {
    console.log(`${test.name} - Created: ${test.createdAt}`);
}


// ============================================================================
// 6. ARRAY AND TUPLE ANNOTATIONS
// ============================================================================

/**
 * Array annotations
 */
let browserList: string[] = ['chrome', 'firefox', 'safari'];
let testScoresArray: number[] = [95, 87, 92];
let mixedArray: (string | number)[] = ['test', 123, 'data', 456];

/**
 * Tuple annotations - fixed length array with specific types
 */
let testResult: [string, boolean, number] = ['Login Test', true, 5000];
//                                            [name,        pass,  duration]

/**
 * Function returning a tuple
 * @param {string} testName - Test name
 * @returns {[boolean, number, string | null]} Test result tuple
 */
function executeTest(testName: string): [boolean, number, string | null] {
    const passed = Math.random() > 0.3;
    const duration = Math.floor(Math.random() * 5000);
    const error = passed ? null : 'Assertion failed';
    
    return [passed, duration, error];
}

// Destructuring tuple with types maintained
const [passed, duration, error] = executeTest('Login Test');


// ============================================================================
// 7. OBJECT TYPE ANNOTATIONS
// ============================================================================

/**
 * Inline object type annotation
 */
let config: {
    browser: string;
    headless: boolean;
    timeout: number;
} = {
    browser: 'chrome',
    headless: true,
    timeout: 5000
};

/**
 * Object with optional properties
 */
let testOptions: {
    name: string;
    retries?: number;        // Optional
    screenshot?: boolean;    // Optional
} = {
    name: 'Login Test'
    // retries and screenshot are optional
};

/**
 * Object with index signature (dynamic properties)
 */
let environmentVariables: {
    [key: string]: string;
} = {
    'BASE_URL': 'https://example.com',
    'API_KEY': 'abc123',
    'TIMEOUT': '5000'
};

/**
 * Nested object annotations
 */
let testConfiguration: {
    browser: {
        name: string;
        version: string;
    };
    viewport: {
        width: number;
        height: number;
    };
} = {
    browser: {
        name: 'chrome',
        version: '120.0'
    },
    viewport: {
        width: 1920,
        height: 1080
    }
};


// ============================================================================
// 8. FUNCTION TYPE ANNOTATIONS
// ============================================================================

/**
 * Annotating variables that hold functions
 */

/**
 * Function type for callback
 */
let clickHandler: (selector: string) => void;

clickHandler = (selector: string): void => {
    console.log(`Clicked: ${selector}`);
};

/**
 * Function type with multiple parameters
 */
let calculator: (a: number, b: number, operation: string) => number;

calculator = (a: number, b: number, operation: string): number => {
    switch (operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        default: return 0;
    }
};

/**
 * Function accepting a callback with type annotation
 * @param {string} selector - Element selector
 * @param {(element: string) => void} callback - Callback function
 * @returns {void}
 */
function findAndExecute(
    selector: string,
    callback: (element: string) => void
): void {
    const element = `Element: ${selector}`;
    callback(element);
}

// Usage
findAndExecute('#loginBtn', (element: string) => {
    console.log(`Processing ${element}`);
});


// ============================================================================
// 9. CLASS MEMBER ANNOTATIONS
// ============================================================================

/**
 * Type annotations in classes
 */
class LoginPage {
    // Property annotations
    private username: string;
    private password: string;
    public isLoggedIn: boolean;
    protected timeout: number;

    /**
     * Constructor with parameter annotations
     * @param {number} timeout - Default timeout
     */
    constructor(timeout: number = 5000) {
        this.username = '';
        this.password = '';
        this.isLoggedIn = false;
        this.timeout = timeout;
    }

    /**
     * Method with parameter and return type annotations
     * @param {string} username - Username
     * @param {string} password - Password
     * @returns {Promise<boolean>} Login success status
     */
    async login(username: string, password: string): Promise<boolean> {
        this.username = username;
        this.password = password;
        
        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.isLoggedIn = true;
        
        return this.isLoggedIn;
    }

    /**
     * Getter with return type annotation
     * @returns {string} Current username
     */
    get currentUsername(): string {
        return this.username;
    }

    /**
     * Setter with parameter annotation
     * @param {string} value - New username
     */
    set currentUsername(value: string) {
        this.username = value;
    }
}


// ============================================================================
// 10. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Complete page object with full type annotations
 */
class SearchPage {
    private searchInput: string;
    private searchButton: string;
    private results: string[];
    private readonly timeout: number;

    constructor(timeout: number = 10000) {
        this.searchInput = '#search-input';
        this.searchButton = '#search-button';
        this.results = [];
        this.timeout = timeout;
    }

    /**
     * Performs a search operation
     * @param {string} query - Search query
     * @returns {Promise<string[]>} Search results
     */
    async search(query: string): Promise<string[]> {
        console.log(`Searching for: ${query}`);
        await this.typeInSearchBox(query);
        await this.clickSearchButton();
        return this.getResults();
    }

    /**
     * Types text into search box
     * @param {string} text - Text to type
     * @returns {Promise<void>}
     */
    private async typeInSearchBox(text: string): Promise<void> {
        console.log(`Typing: ${text}`);
    }

    /**
     * Clicks the search button
     * @returns {Promise<void>}
     */
    private async clickSearchButton(): Promise<void> {
        console.log('Clicking search button');
    }

    /**
     * Retrieves search results
     * @returns {Promise<string[]>} Array of result texts
     */
    private async getResults(): Promise<string[]> {
        this.results = ['Result 1', 'Result 2', 'Result 3'];
        return this.results;
    }
}

/**
 * Test data manager with type annotations
 */
class TestDataManager {
    private data: Map<string, unknown>;

    constructor() {
        this.data = new Map();
    }

    /**
     * Stores test data
     * @param {string} key - Data key
     * @param {T} value - Data value
     * @returns {void}
     */
    set<T>(key: string, value: T): void {
        this.data.set(key, value);
    }

    /**
     * Retrieves test data
     * @param {string} key - Data key
     * @returns {T | undefined} Retrieved data
     */
    get<T>(key: string): T | undefined {
        return this.data.get(key) as T | undefined;
    }
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * SUMMARY OF TYPE ANNOTATIONS:
 * 
 * 1. Variables: let name: type = value
 * 2. Function Parameters: function(param: type): returnType
 * 3. Optional Parameters: param?: type
 * 4. Default Parameters: param: type = defaultValue
 * 5. Rest Parameters: ...params: type[]
 * 6. Return Types: function(): returnType
 * 7. Arrow Functions: (param: type): returnType => expression
 * 8. Arrays: type[] or Array<type>
 * 9. Tuples: [type1, type2, type3]
 * 10. Objects: { property: type }
 * 11. Union Types: type1 | type2
 * 12. Intersection Types: type1 & type2
 * 13. Literal Types: 'exact' | 'values'
 * 14. Function Types: (param: type) => returnType
 * 
 * Best Practices:
 * - Always annotate function parameters and return types
 * - Use type inference for simple variable declarations
 * - Be explicit with complex types
 * - Use optional parameters when appropriate
 * - Prefer specific types over 'any'
 * - Use readonly for constants
 */

export {
    navigateToURL,
    performLogin,
    findElement,
    executeTest,
    LoginPage,
    SearchPage,
    TestDataManager
};
