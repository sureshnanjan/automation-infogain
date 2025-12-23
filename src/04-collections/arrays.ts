/**
 * @fileoverview Arrays in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to arrays, array methods, and array patterns
 * for test automation with TypeScript
 */

/**
 * ARRAYS IN TYPESCRIPT
 * =====================
 * Arrays are ordered collections of elements of the same type.
 * TypeScript provides type safety for arrays and supports
 * all JavaScript array methods with proper type checking.
 */

// ============================================================================
// 1. ARRAY DECLARATION AND INITIALIZATION
// ============================================================================

/**
 * Two ways to declare arrays in TypeScript
 */

// Method 1: Using square brackets (preferred)
let testCases: string[] = ['TC-001', 'TC-002', 'TC-003'];
let testScores: number[] = [95, 87, 92, 78, 88];
let testResults: boolean[] = [true, false, true, true];

// Method 2: Using Array generic
let browsers: Array<string> = ['chrome', 'firefox', 'safari'];
let timeouts: Array<number> = [5000, 10000, 15000];

// Empty array with type annotation
let failedTests: string[] = [];
let durations: number[] = [];

// Array initialization with values
const environments: string[] = ['dev', 'staging', 'prod'];
const retryAttempts: number[] = [0, 1, 2, 3];

/**
 * Multi-dimensional arrays
 */
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let testSuites: string[][] = [
    ['Login-01', 'Login-02'],
    ['Checkout-01', 'Checkout-02', 'Checkout-03'],
    ['Profile-01']
];


// ============================================================================
// 2. ARRAY TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers array types from initialization
 */

// Inferred as string[]
const pages = ['home', 'login', 'dashboard'];

// Inferred as number[]
const scores = [95, 87, 92];

// Inferred as (string | number)[] - union type
const mixed = ['test', 123, 'data', 456];

// Inferred as any[] when empty
const empty = [];
empty.push('string');
empty.push(123);


// ============================================================================
// 3. READONLY ARRAYS
// ============================================================================

/**
 * ReadonlyArray prevents modifications
 */

// Using ReadonlyArray type
const immutableTests: ReadonlyArray<string> = ['TC-001', 'TC-002'];
// immutableTests.push('TC-003'); // ❌ Error: Property 'push' does not exist
// immutableTests[0] = 'TC-000';  // ❌ Error: Index signature is readonly

// Using readonly modifier (preferred)
const constantBrowsers: readonly string[] = ['chrome', 'firefox'];
// constantBrowsers.push('safari'); // ❌ Error

// as const for literal array types
const testStatuses = ['passed', 'failed', 'skipped'] as const;
// Type: readonly ['passed', 'failed', 'skipped']


// ============================================================================
// 4. ARRAY ACCESS AND MODIFICATION
// ============================================================================

/**
 * Accessing array elements
 */
const testNames: string[] = ['Login', 'Signup', 'Checkout'];

// Accessing by index
const firstTest: string = testNames[0];      // 'Login'
const lastTest: string = testNames[testNames.length - 1]; // 'Checkout'

// Safe access with optional chaining
const maybeTest: string | undefined = testNames[10]; // undefined (no error)

/**
 * Modifying arrays
 */
const mutableTests: string[] = ['TC-001'];

// Adding elements
mutableTests.push('TC-002');           // Add to end
mutableTests.unshift('TC-000');        // Add to beginning
mutableTests.splice(1, 0, 'TC-001.5'); // Insert at index

// Removing elements
mutableTests.pop();           // Remove last
mutableTests.shift();         // Remove first
mutableTests.splice(1, 1);    // Remove at index

// Updating elements
mutableTests[0] = 'TC-NEW';


// ============================================================================
// 5. ARRAY ITERATION METHODS
// ============================================================================

const testData: Array<{ name: string; score: number; passed: boolean }> = [
    { name: 'Test 1', score: 95, passed: true },
    { name: 'Test 2', score: 65, passed: false },
    { name: 'Test 3', score: 87, passed: true },
    { name: 'Test 4', score: 78, passed: true }
];

/**
 * forEach - Execute function for each element
 */
testData.forEach((test, index) => {
    console.log(`${index + 1}. ${test.name}: ${test.score}`);
});

/**
 * for...of loop
 */
for (const test of testData) {
    console.log(`${test.name}: ${test.passed ? 'PASSED' : 'FAILED'}`);
}

/**
 * Traditional for loop
 */
for (let i = 0; i < testData.length; i++) {
    console.log(testData[i].name);
}

/**
 * for...in loop (not recommended for arrays)
 */
for (const index in testData) {
    console.log(testData[index].name); // Works but not ideal
}


// ============================================================================
// 6. ARRAY TRANSFORMATION METHODS
// ============================================================================

/**
 * map - Transform each element
 * Returns new array with transformed values
 */
const testNames2: string[] = testData.map(test => test.name);
// ['Test 1', 'Test 2', 'Test 3', 'Test 4']

const normalizedScores: number[] = testData.map(test => test.score / 100);
// [0.95, 0.65, 0.87, 0.78]

const testSummaries: string[] = testData.map(test => 
    `${test.name}: ${test.passed ? '✅' : '❌'}`
);

/**
 * filter - Select elements matching condition
 * Returns new array with matching elements
 */
const passingTests = testData.filter(test => test.passed);
const excellentTests = testData.filter(test => test.score >= 90);
const failingTests = testData.filter(test => !test.passed);

/**
 * reduce - Accumulate array to single value
 * Very powerful for aggregations
 */
const totalScore: number = testData.reduce((sum, test) => sum + test.score, 0);
// 325

const averageScore: number = totalScore / testData.length;
// 81.25

const passCount: number = testData.reduce((count, test) => 
    test.passed ? count + 1 : count, 0
);
// 3

// Complex reduce - group by status
const groupedByStatus = testData.reduce((acc, test) => {
    const key = test.passed ? 'passed' : 'failed';
    if (!acc[key]) acc[key] = [];
    acc[key].push(test);
    return acc;
}, {} as { passed?: typeof testData; failed?: typeof testData });

/**
 * flatMap - Map and flatten in one operation
 */
const testCasesNested: string[][] = [
    ['TC-001', 'TC-002'],
    ['TC-003', 'TC-004', 'TC-005'],
    ['TC-006']
];

const allTestCases: string[] = testCasesNested.flatMap(cases => cases);
// ['TC-001', 'TC-002', 'TC-003', 'TC-004', 'TC-005', 'TC-006']


// ============================================================================
// 7. ARRAY SEARCH METHODS
// ============================================================================

/**
 * find - Returns first element matching condition
 */
const firstFailure = testData.find(test => !test.passed);
// { name: 'Test 2', score: 65, passed: false }

const highScorer = testData.find(test => test.score > 90);
// { name: 'Test 1', score: 95, passed: true }

/**
 * findIndex - Returns index of first match
 */
const failureIndex: number = testData.findIndex(test => !test.passed);
// 1

/**
 * some - Check if any element matches
 */
const hasFailures: boolean = testData.some(test => !test.passed);
// true

const hasExcellent: boolean = testData.some(test => test.score === 100);
// false

/**
 * every - Check if all elements match
 */
const allPassed: boolean = testData.every(test => test.passed);
// false

const allAbove50: boolean = testData.every(test => test.score >= 50);
// true

/**
 * includes - Check if array contains value
 */
const browserList: string[] = ['chrome', 'firefox', 'safari'];
const hasChrome: boolean = browserList.includes('chrome');
// true

const hasEdge: boolean = browserList.includes('edge');
// false

/**
 * indexOf / lastIndexOf - Find index of value
 */
const chromeIndex: number = browserList.indexOf('chrome');
// 0

const notFoundIndex: number = browserList.indexOf('edge');
// -1


// ============================================================================
// 8. ARRAY SORTING AND REVERSING
// ============================================================================

/**
 * sort - Sorts array in place
 */

// Sorting strings alphabetically
const unsortedTests: string[] = ['TC-003', 'TC-001', 'TC-002'];
unsortedTests.sort(); // ['TC-001', 'TC-002', 'TC-003']

// Sorting numbers (need comparator)
const unsortedScores: number[] = [87, 95, 65, 78];
unsortedScores.sort((a, b) => a - b); // Ascending: [65, 78, 87, 95]
unsortedScores.sort((a, b) => b - a); // Descending: [95, 87, 78, 65]

// Sorting objects
const testsCopy = [...testData];
testsCopy.sort((a, b) => a.score - b.score); // Sort by score ascending
testsCopy.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name

/**
 * reverse - Reverses array in place
 */
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.reverse(); // [5, 4, 3, 2, 1]

/**
 * Creating sorted copy without modifying original
 */
const original: number[] = [3, 1, 4, 1, 5];
const sorted: number[] = [...original].sort((a, b) => a - b);
// original: [3, 1, 4, 1, 5]
// sorted: [1, 1, 3, 4, 5]


// ============================================================================
// 9. ARRAY MANIPULATION METHODS
// ============================================================================

/**
 * concat - Combines arrays
 */
const suite1: string[] = ['TC-001', 'TC-002'];
const suite2: string[] = ['TC-003', 'TC-004'];
const combined: string[] = suite1.concat(suite2);
// ['TC-001', 'TC-002', 'TC-003', 'TC-004']

// Using spread operator (preferred)
const merged: string[] = [...suite1, ...suite2];

/**
 * slice - Extracts portion of array (doesn't modify original)
 */
const allTests: string[] = ['TC-001', 'TC-002', 'TC-003', 'TC-004', 'TC-005'];
const firstThree: string[] = allTests.slice(0, 3);
// ['TC-001', 'TC-002', 'TC-003']

const lastTwo: string[] = allTests.slice(-2);
// ['TC-004', 'TC-005']

const middle: string[] = allTests.slice(1, 4);
// ['TC-002', 'TC-003', 'TC-004']

/**
 * splice - Adds/removes elements (modifies original)
 */
const tests: string[] = ['TC-001', 'TC-002', 'TC-005'];
tests.splice(2, 0, 'TC-003', 'TC-004'); // Insert at index 2
// ['TC-001', 'TC-002', 'TC-003', 'TC-004', 'TC-005']

const removed: string[] = tests.splice(1, 2); // Remove 2 elements starting at index 1
// removed: ['TC-002', 'TC-003']
// tests: ['TC-001', 'TC-004', 'TC-005']

/**
 * join - Combines array elements into string
 */
const testList: string[] = ['TC-001', 'TC-002', 'TC-003'];
const testString: string = testList.join(', ');
// 'TC-001, TC-002, TC-003'

const path: string = ['users', 'documents', 'tests'].join('/');
// 'users/documents/tests'

/**
 * fill - Fill array with static value
 */
const defaultScores: number[] = new Array(5).fill(0);
// [0, 0, 0, 0, 0]


// ============================================================================
// 10. ARRAY UTILITY METHODS
// ============================================================================

/**
 * flat - Flattens nested arrays
 */
const nested: any[] = [1, [2, 3], [4, [5, 6]]];
const flattened: any[] = nested.flat(); // [1, 2, 3, 4, [5, 6]]
const deepFlattened: any[] = nested.flat(2); // [1, 2, 3, 4, 5, 6]

/**
 * Array.from - Creates array from iterable
 */
const arrayFromString: string[] = Array.from('hello');
// ['h', 'e', 'l', 'l', 'o']

const arrayFromSet: number[] = Array.from(new Set([1, 2, 2, 3]));
// [1, 2, 3]

// With mapping function
const doubled: number[] = Array.from([1, 2, 3], x => x * 2);
// [2, 4, 6]

/**
 * Array.isArray - Check if value is array
 */
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('string'));  // false
console.log(Array.isArray({ 0: 'a' })); // false

/**
 * Array.of - Creates array from arguments
 */
const testArray: number[] = Array.of(1, 2, 3);
// [1, 2, 3]


// ============================================================================
// 11. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Test case management
 */
interface TestCase {
    id: string;
    name: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'running' | 'passed' | 'failed';
    duration?: number;
}

const testSuite: TestCase[] = [
    { id: 'TC-001', name: 'Login', priority: 'high', status: 'passed', duration: 1500 },
    { id: 'TC-002', name: 'Signup', priority: 'high', status: 'failed', duration: 2000 },
    { id: 'TC-003', name: 'Profile', priority: 'medium', status: 'passed', duration: 1000 },
    { id: 'TC-004', name: 'Settings', priority: 'low', status: 'pending' }
];

// Get all high priority tests
const highPriorityTests = testSuite.filter(test => test.priority === 'high');

// Get failed test names
const failedTestNames = testSuite
    .filter(test => test.status === 'failed')
    .map(test => test.name);

// Calculate total test duration
const totalDuration = testSuite.reduce((sum, test) => 
    sum + (test.duration || 0), 0
);

// Group tests by status
const testsByStatus = testSuite.reduce((groups, test) => {
    const status = test.status;
    if (!groups[status]) groups[status] = [];
    groups[status].push(test);
    return groups;
}, {} as Record<string, TestCase[]>);

// Check if all high priority tests passed
const allHighPriorityPassed = testSuite
    .filter(test => test.priority === 'high')
    .every(test => test.status === 'passed');

/**
 * Test data provider
 */
class TestDataProvider {
    private users: Array<{ username: string; password: string; role: string }> = [];
    
    addUser(username: string, password: string, role: string): void {
        this.users.push({ username, password, role });
    }
    
    getUsersByRole(role: string) {
        return this.users.filter(user => user.role === role);
    }
    
    getFirstAdmin() {
        return this.users.find(user => user.role === 'admin');
    }
    
    hasAdminUsers(): boolean {
        return this.users.some(user => user.role === 'admin');
    }
    
    getAllUsernames(): string[] {
        return this.users.map(user => user.username);
    }
}

/**
 * Batch operations
 */
async function executeTestsInBatches(
    tests: string[],
    batchSize: number
): Promise<void> {
    for (let i = 0; i < tests.length; i += batchSize) {
        const batch = tests.slice(i, i + batchSize);
        console.log(`Executing batch: ${batch.join(', ')}`);
        await Promise.all(batch.map(test => executeTest(test)));
    }
}

async function executeTest(testName: string): Promise<void> {
    console.log(`Running: ${testName}`);
}

/**
 * Test result aggregator
 */
function aggregateResults(results: Array<{ passed: boolean; duration: number }>) {
    return {
        total: results.length,
        passed: results.filter(r => r.passed).length,
        failed: results.filter(r => !r.passed).length,
        totalDuration: results.reduce((sum, r) => sum + r.duration, 0),
        averageDuration: results.reduce((sum, r) => sum + r.duration, 0) / results.length
    };
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ARRAYS SUMMARY:
 * 
 * Declaration:
 * ✅ type[] (preferred)
 * ✅ Array<type>
 * ✅ readonly type[]
 * ✅ ReadonlyArray<type>
 * 
 * Iteration:
 * ✅ forEach - Execute for each element
 * ✅ for...of - Iterate over values
 * ✅ for loop - Traditional with index
 * 
 * Transformation:
 * ✅ map - Transform elements
 * ✅ filter - Select elements
 * ✅ reduce - Aggregate to single value
 * ✅ flatMap - Map and flatten
 * 
 * Search:
 * ✅ find - First matching element
 * ✅ findIndex - Index of first match
 * ✅ includes - Check if contains
 * ✅ some - Check if any match
 * ✅ every - Check if all match
 * 
 * Manipulation:
 * ✅ push/pop - Add/remove at end
 * ✅ unshift/shift - Add/remove at start
 * ✅ splice - Add/remove at any position
 * ✅ slice - Extract portion
 * ✅ concat - Combine arrays
 * 
 * Sorting:
 * ✅ sort - Sort in place
 * ✅ reverse - Reverse in place
 * 
 * Best Practices:
 * 1. Use type annotations for arrays
 * 2. Prefer immutable operations (map, filter, reduce)
 * 3. Use spread operator for copying
 * 4. Use readonly for constants
 * 5. Chain array methods for pipelines
 * 6. Use proper comparator for sort
 * 7. Consider performance for large arrays
 * 8. Use meaningful variable names
 */

export {
    TestDataProvider,
    executeTestsInBatches,
    aggregateResults,
    testSuite
};

export type{
    TestCase
}
