/**
 * @fileoverview Tuples in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to tuples - fixed-length typed arrays
 * with practical automation testing examples
 */

/**
 * TUPLES
 * =======
 * Tuples are arrays with fixed length and specific types for each element.
 * Perfect for representing structured data with known format.
 */

// ============================================================================
// 1. BASIC TUPLE SYNTAX
// ============================================================================

/**
 * Tuple declaration - fixed types at specific positions
 */

// Test result tuple: [testName, passed, duration]
let testResult: [string, boolean, number];
testResult = ['Login Test', true, 5000]; // ✅ Correct
// testResult = [true, 'Login Test', 5000]; // ❌ Error: wrong order
// testResult = ['Login Test', true]; // ❌ Error: missing element

/**
 * Tuple with different types
 */
let userInfo: [string, number, boolean];
userInfo = ['john@test.com', 30, true];

/**
 * Tuple initialization
 */
const browserConfig: [string, boolean, number] = ['chrome', true, 1920];


// ============================================================================
// 2. ACCESSING TUPLE ELEMENTS
// ============================================================================

const testData: [string, number, boolean] = ['TC-001', 95, true];

// Access by index - types are known
const testId: string = testData[0];     // Type: string
const score: number = testData[1];      // Type: number
const passed: boolean = testData[2];    // Type: boolean

// Destructuring tuples
const [id, testScore, isPassed] = testData;
console.log(`${id}: Score ${testScore}, Passed: ${isPassed}`);

// Partial destructuring
const [testName] = testData;            // Just first element
const [, scoreOnly] = testData;         // Skip first, get second
const [, , passedOnly] = testData;      // Get third only


// ============================================================================
// 3. OPTIONAL TUPLE ELEMENTS
// ============================================================================

/**
 * Optional elements must come at the end
 */

// Test result with optional error message
type TestResultTuple = [string, boolean, number, string?];

const passedTest: TestResultTuple = ['Login', true, 5000];
const failedTest: TestResultTuple = ['Signup', false, 3000, 'Element not found'];

/**
 * Multiple optional elements
 */
type ElementLocator = [string, number?, boolean?];

const selector1: ElementLocator = ['#loginBtn'];
const selector2: ElementLocator = ['#loginBtn', 5000];
const selector3: ElementLocator = ['#loginBtn', 5000, true];


// ============================================================================
// 4. REST ELEMENTS IN TUPLES
// ============================================================================

/**
 * Rest elements capture remaining elements
 */

// Test with variable number of tags
type TestWithTags = [string, boolean, ...string[]];

const test1: TestWithTags = ['Login Test', true, 'smoke', 'critical'];
const test2: TestWithTags = ['Profile Test', false];
const test3: TestWithTags = ['Checkout', true, 'e2e', 'payment', 'integration'];

/**
 * Named tuple with rest
 */
type BrowserLaunch = [browser: string, headless: boolean, ...args: string[]];

const chromeLaunch: BrowserLaunch = ['chrome', true, '--no-sandbox', '--disable-gpu'];


// ============================================================================
// 5. NAMED TUPLE ELEMENTS
// ============================================================================

/**
 * Named tuples provide better documentation
 */

// Without names (less clear)
type TestResultOld = [string, boolean, number];

// With names (more clear)
type TestResultNamed = [testName: string, passed: boolean, duration: number];

const result: TestResultNamed = ['Login Test', true, 5000];

/**
 * Complex named tuple
 */
type ElementPosition = [
    x: number,
    y: number,
    width: number,
    height: number,
    visible: boolean
];

const buttonPosition: ElementPosition = [100, 200, 120, 40, true];


// ============================================================================
// 6. READONLY TUPLES
// ============================================================================

/**
 * Readonly tuples prevent modifications
 */

const config: readonly [string, number, boolean] = ['chrome', 5000, true];
// config[0] = 'firefox'; // ❌ Error: Cannot assign to read-only property
// config.push('new');    // ❌ Error: Property 'push' does not exist

/**
 * Readonly with named elements
 */
type ImmutableConfig = readonly [browser: string, timeout: number, headless: boolean];

const browserSetup: ImmutableConfig = ['firefox', 10000, false];


// ============================================================================
// 7. TUPLE TYPES VS ARRAY TYPES
// ============================================================================

/**
 * Arrays - homogeneous, variable length
 */
const testNames: string[] = ['Test1', 'Test2', 'Test3', 'Test4'];
testNames.push('Test5'); // ✅ Can add more

/**
 * Tuples - heterogeneous, fixed length
 */
const testRecord: [string, number, boolean] = ['Test1', 95, true];
// testRecord.push('extra'); // ❌ Error in strict mode

/**
 * When to use each
 */
// Use arrays for: collections of same type
const scores: number[] = [95, 87, 92];

// Use tuples for: fixed structure with different types
const student: [string, number, string[]] = ['John', 25, ['A', 'B+', 'A-']];


// ============================================================================
// 8. TUPLES IN FUNCTIONS
// ============================================================================

/**
 * Functions returning tuples
 */

/**
 * Execute test and return structured result
 */
function executeTestCase(testName: string): [boolean, number, string | null] {
    const start = Date.now();
    const passed = Math.random() > 0.3;
    const duration = Date.now() - start;
    const error = passed ? null : 'Test assertion failed';
    
    return [passed, duration, error];
}

// Usage with destructuring
const [success, time, errorMsg] = executeTestCase('Login Test');

/**
 * Function with tuple parameter
 */
function logTestResult(result: [string, boolean, number]): void {
    const [name, passed, duration] = result;
    console.log(`${name}: ${passed ? 'PASSED' : 'FAILED'} (${duration}ms)`);
}

logTestResult(['Login', true, 5000]);

/**
 * Multiple return values using tuple
 */
function getWindowDimensions(): [width: number, height: number] {
    return [1920, 1080];
}

const [width, height] = getWindowDimensions();


// ============================================================================
// 9. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Page coordinates
 */
type Coordinates = [x: number, y: number];

function clickAt(coords: Coordinates): void {
    const [x, y] = coords;
    console.log(`Clicking at (${x}, ${y})`);
}

clickAt([150, 300]);

/**
 * Element bounds
 */
type BoundingBox = [x: number, y: number, width: number, height: number];

function isElementVisible(bounds: BoundingBox, viewport: Coordinates): boolean {
    const [x, y, w, h] = bounds;
    const [vw, vh] = viewport;
    return x >= 0 && y >= 0 && x + w <= vw && y + h <= vh;
}

/**
 * Test execution result with metadata
 */
type ExecutionResult = [
    testId: string,
    status: 'passed' | 'failed' | 'skipped',
    duration: number,
    retries: number,
    screenshot?: string
];

function processTestResult(result: ExecutionResult): void {
    const [id, status, duration, retries, screenshot] = result;
    console.log(`Test ${id}: ${status} in ${duration}ms (${retries} retries)`);
    if (screenshot) {
        console.log(`Screenshot: ${screenshot}`);
    }
}

/**
 * Browser configuration tuple
 */
type BrowserConfig = [
    name: 'chrome' | 'firefox' | 'safari',
    version: string,
    headless: boolean,
    viewport: [width: number, height: number]
];

const chromeConfig: BrowserConfig = [
    'chrome',
    '120.0',
    true,
    [1920, 1080]
];

/**
 * HTTP response tuple
 */
type HttpResponse = [status: number, body: string, headers: Record<string, string>];

async function makeRequest(url: string): Promise<HttpResponse> {
    // Simulated HTTP request
    return [
        200,
        '{"success": true}',
        { 'Content-Type': 'application/json' }
    ];
}

/**
 * Database query result
 */
type QueryResult<T> = [success: boolean, data: T | null, error: string | null];

function executeQuery<T>(query: string): QueryResult<T> {
    try {
        // Simulate query execution
        const data = {} as T;
        return [true, data, null];
    } catch (error) {
        return [false, null, (error as Error).message];
    }
}

/**
 * Tuple for state management
 */
type TestState = [
    currentStep: number,
    totalSteps: number,
    completed: boolean
];

class TestExecutor {
    private state: TestState = [0, 0, false];
    
    initialize(totalSteps: number): void {
        this.state = [0, totalSteps, false];
    }
    
    nextStep(): void {
        const [current, total, _] = this.state;
        const newCurrent = current + 1;
        this.state = [newCurrent, total, newCurrent >= total];
    }
    
    getProgress(): number {
        const [current, total] = this.state;
        return (current / total) * 100;
    }
    
    isCompleted(): boolean {
        const [, , completed] = this.state;
        return completed;
    }
}

/**
 * Test data with tuple
 */
type UserCredentials = [username: string, password: string];
type UserWithRole = [...UserCredentials, role: string];

const adminUser: UserWithRole = ['admin@test.com', 'Admin@123', 'admin'];
const regularUser: UserCredentials = ['user@test.com', 'User@123'];

/**
 * Comparison function result
 */
type ComparisonResult = [isEqual: boolean, differences: string[]];

function compareObjects(obj1: object, obj2: object): ComparisonResult {
    // Simplified comparison
    const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
    const differences: string[] = [];
    return [isEqual, differences];
}


// ============================================================================
// 10. ADVANCED TUPLE PATTERNS
// ============================================================================

/**
 * Tuple as map key
 */
type TestKey = [suiteName: string, testName: string];
const testResults = new Map<string, boolean>();

function setTestResult(key: TestKey, passed: boolean): void {
    const keyString = key.join(':');
    testResults.set(keyString, passed);
}

/**
 * Nested tuples
 */
type TestSuiteResult = [
    suiteName: string,
    tests: Array<[testName: string, passed: boolean, duration: number]>
];

const suiteResult: TestSuiteResult = [
    'Login Suite',
    [
        ['Valid Login', true, 1500],
        ['Invalid Login', true, 1200],
        ['Forgot Password', true, 1800]
    ]
];

/**
 * Tuple union
 */
type ApiResponse = 
    | [success: true, data: any]
    | [success: false, error: string];

function handleResponse(response: ApiResponse): void {
    if (response[0]) {
        console.log('Success:', response[1]);
    } else {
        console.error('Error:', response[1]);
    }
}

/**
 * Tuple with generic
 */
type Result<T, E> = 
    | [success: true, value: T]
    | [success: false, error: E];

function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return [false, 'Division by zero'];
    }
    return [true, a / b];
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * TUPLES SUMMARY:
 * 
 * Definition:
 * ✅ Fixed-length arrays with specific types
 * ✅ Each position has its own type
 * ✅ Heterogeneous (different types)
 * 
 * Syntax:
 * ✅ [type1, type2, type3]
 * ✅ [name1: type1, name2: type2] (named)
 * ✅ readonly [type1, type2] (immutable)
 * ✅ [type1, type2, ...rest: type[]] (with rest)
 * ✅ [type1, type2, type3?] (optional)
 * 
 * When to Use Tuples:
 * ✅ Fixed structure with known types
 * ✅ Multiple return values
 * ✅ Coordinates and dimensions
 * ✅ Key-value pairs
 * ✅ Function parameter grouping
 * 
 * When to Use Arrays:
 * ✅ Variable length collections
 * ✅ Homogeneous data
 * ✅ Need array methods
 * 
 * Best Practices:
 * 1. Use named tuples for clarity
 * 2. Use readonly for immutable data
 * 3. Destructure for better readability
 * 4. Use optional elements at end
 * 5. Consider objects for > 3-4 elements
 * 6. Use tuples for function return values
 * 7. Prefer tuples over out parameters
 */

export type {
    TestResultNamed,
    ElementPosition,
    BrowserConfig,
    ExecutionResult,
    QueryResult,
    
};
export {
    TestExecutor
};
