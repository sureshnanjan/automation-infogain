/**
 * @fileoverview Type Inference in TypeScript
 * @author Suresh - Software Trainer
 * @description Understanding how TypeScript automatically infers types
 * and when to use inference vs explicit annotations
 */

/**
 * TYPE INFERENCE
 * ===============
 * Type inference is TypeScript's ability to automatically determine
 * the type of a variable, parameter, or return value without explicit
 * annotation. This makes code cleaner while maintaining type safety.
 * 
 * TypeScript infers types based on:
 * 1. Initialization values
 * 2. Return statements
 * 3. Context (contextual typing)
 * 4. Best common type algorithm
 */

// ============================================================================
// 1. BASIC TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers types from initial values
 */

// Type inferred as string
let testName = 'Login Test';
// testName = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

// Type inferred as number
let testDuration = 5000;
// testDuration = 'five thousand'; // ❌ Error

// Type inferred as boolean
let isTestPassed = true;
// isTestPassed = 'yes'; // ❌ Error

// Type inferred as null
let testError = null;
testError = 'Some error'; // ✅ OK - null can be assigned any value with --strictNullChecks off

/**
 * When you don't initialize, TypeScript infers 'any'
 */
let uninitializedValue; // Type: any (implicit)
uninitializedValue = 'string'; // OK
uninitializedValue = 123;       // OK
uninitializedValue = true;      // OK


// ============================================================================
// 2. ARRAY TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers array types from elements
 */

// Inferred as string[]
const browsers = ['chrome', 'firefox', 'safari'];
// browsers.push(123); // ❌ Error: Argument of type 'number' is not assignable

// Inferred as number[]
const testScores = [95, 87, 92, 100];
// testScores.push('ninety'); // ❌ Error

// Inferred as (string | number)[] - union type
const mixedArray = ['test', 123, 'data', 456];
mixedArray.push('more text'); // ✅ OK
mixedArray.push(789);         // ✅ OK
// mixedArray.push(true);     // ❌ Error: boolean not in union

// Empty array inferred as any[]
const emptyArray = [];
emptyArray.push('string'); // OK
emptyArray.push(123);      // OK
emptyArray.push(true);     // OK


// ============================================================================
// 3. OBJECT TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers object shapes from literals
 */

// Inferred type: { browser: string; headless: boolean; timeout: number }
const browserConfig = {
    browser: 'chrome',
    headless: true,
    timeout: 5000
};

const number = 100;

function myfunc(params:number): void {    
    
}



// TypeScript knows the exact properties
console.log(browserConfig.browser);  // ✅ OK
// console.log(browserConfig.width); // ❌ Error: Property 'width' does not exist

// Cannot add new properties
// browserConfig.newProperty = 'value'; // ❌ Error

// Can modify existing properties (if they match type)
browserConfig.timeout = 10000; // ✅ OK
// browserConfig.timeout = 'ten seconds'; // ❌ Error: Type 'string' is not assignable

/**
 * Nested object inference
 */
const testConfig = {
    browser: {
        name: 'chrome',
        version: '120.0'
    },
    viewport: {
        width: 1920,
        height: 1080
    }
};
// Type: { browser: { name: string; version: string }, viewport: { width: number; height: number } }


// ============================================================================
// 4. FUNCTION RETURN TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers return types from return statements
 */

/**
 * Return type inferred as number
 */
function add(a: number, b: number) {
    return a + b; // TypeScript infers return type: number
}

/**
 * Return type inferred as string
 */
function getTestName() {
    return 'Login Test'; // Inferred: string
}

/**
 * Return type inferred as boolean
 */
function isTestPassing(score: number) {
    return score >= 70; // Inferred: boolean
}

/**
 * Return type inferred from multiple return paths
 */
function getTestStatus(passed: boolean) {
    if (passed) {
        return 'Passed'; // string
    } else {
        return 'Failed'; // string
    }
    // Inferred return type: string
}

/**
 * Union return type inferred from different return statements
 */
function getResult(condition: boolean) {
    if (condition) {
        return 123; // number
    }
    return 'default'; // string
    // Inferred return type: number | string
}

/**
 * Void inferred when no return statement
 */
function logMessage(msg: string) {
    console.log(msg);
    // Inferred return type: void
}


// ============================================================================
// 5. CONTEXTUAL TYPING
// ============================================================================

/**
 * TypeScript infers types from context
 */

/**
 * Array method callbacks have contextual typing
 */
const testCases = ['TC-001', 'TC-002', 'TC-003'];

// 'testCase' type is inferred as string from array context
testCases.forEach(testCase => {
    console.log(testCase.toUpperCase()); // TypeScript knows it's a string
});

// Map callback - parameter and return type inferred
const upperCaseCases = testCases.map(testCase => {
    return testCase.toUpperCase(); // Returns string[], inferred automatically
});

/**
 * Event handler contextual typing
 */
const button = {
    addEventListener: (event: string, handler: (e: { clientX: number }) => void) => {}
};

// 'e' type is inferred from addEventListener signature
button.addEventListener('click', (e) => {
    console.log(e.clientX); // TypeScript knows e has clientX property
});

/**
 * Promise contextual typing
 */
const promise = new Promise((resolve, reject) => {
    // resolve and reject types are inferred
    resolve('Success'); // OK
    reject(new Error('Failed')); // OK
});


// ============================================================================
// 6. BEST COMMON TYPE INFERENCE
// ============================================================================

/**
 * When inferring from multiple values, TypeScript finds
 * the best common type
 */

// Inferred as (number | boolean)[]
const mixedValues = [1, 2, true, false];

// Inferred as (string | null)[]
const testResults = ['passed', null, 'failed', null];

/**
 * Class inheritance and best common type
 */
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    meow() {
        console.log('Meow!');
    }
}

// Inferred as Animal[] (best common type)
const animals = [new Dog('Rex'), new Cat('Whiskers')];


// ============================================================================
// 7. LITERAL TYPE INFERENCE
// ============================================================================

/**
 * const vs let affects type inference
 */

// let: inferred as string (wider type)
let testStatus1 = 'passed';
testStatus1 = 'failed'; // ✅ OK - any string allowed

// const: inferred as literal type 'passed' (narrower type)
const testStatus2 = 'passed';
// testStatus2 = 'failed'; // ❌ Error: Can't reassign const

/**
 * Widening vs narrowing
 */
let widened = 'hello'; // Type: string (widened)
const narrowed = 'hello'; // Type: 'hello' (literal type)

// Array elements are widened
const testTypes = ['unit', 'integration', 'e2e'];
// Type: string[], not ('unit' | 'integration' | 'e2e')[]

// Using 'as const' prevents widening
const strictTestTypes = ['unit', 'integration', 'e2e'] as const;
// Type: readonly ['unit', 'integration', 'e2e']


// ============================================================================
// 8. TYPE INFERENCE IN DESTRUCTURING
// ============================================================================

/**
 * Types are inferred during destructuring
 */

const userInfo = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};

// Types inferred from source object
const { name, age, email } = userInfo;
// name: string, age: number, email: string

/**
 * Array destructuring inference
 */
const testResult = ['Login Test', true, 5000];
const [testName2, passed, duration] = testResult;
// testName2: string, passed: boolean, duration: number

/**
 * Function parameter destructuring
 */
function printConfig({ browser, timeout }: { browser: string; timeout: number }) {
    console.log(`${browser}: ${timeout}ms`);
}


// ============================================================================
// 9. GENERIC TYPE INFERENCE
// ============================================================================

/**
 * TypeScript infers generic type parameters
 */

/**
 * Generic function - type parameter inferred from argument
 */
function identity<T>(value: T): T {
    return value;
}

// T inferred as string
const str = identity('hello');

// T inferred as number
const num = identity(42);

// T inferred as boolean
const bool = identity(true);

/**
 * Generic array function
 */
function getFirst<T>(array: T[]): T {
    return array[0];
}

// T inferred as string
const firstBrowser = getFirst(['chrome', 'firefox']);

// T inferred as number
const firstScore = getFirst([95, 87, 92]);


// ============================================================================
// 10. WHEN TO USE INFERENCE VS EXPLICIT ANNOTATIONS
// ============================================================================

/**
 * USE INFERENCE (cleaner code):
 */

// ✅ Simple variable initialization
const timeout = 5000; // Clear from context

// ✅ Simple function return values
function double(n: number) {
    return n * 2; // Obviously returns number
}

// ✅ Simple object literals
const config = {
    headless: true,
    timeout: 5000
};

/**
 * USE EXPLICIT ANNOTATIONS (better clarity):
 */

// ✅ Function parameters - always annotate
function login(username: string, password: string) {
    // Parameters should always be annotated
}

// ✅ Complex return types
function createTestReport(): { name: string; passed: boolean; duration: number } {
    return { name: 'Test', passed: true, duration: 5000 };
}

// ✅ When type is not obvious from initialization
let testData: string | null = null; // Will be assigned later

// ✅ For better documentation
interface TestConfig {
    browser: string;
    timeout: number;
}
const explicitConfig: TestConfig = {
    browser: 'chrome',
    timeout: 5000
};


// ============================================================================
// PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Page Object with type inference
 */
class HomePage {
    // Property types inferred from initialization
    private searchBox = '#search-input';
    private searchButton = '#search-button';
    private results = [] as string[]; // Explicit for empty array

    // Return type inferred as Promise<void>
    async search(query: string) {
        console.log(`Searching for: ${query}`);
        await this.clickSearchButton();
    }

    // Return type inferred as Promise<string[]>
    private async clickSearchButton() {
        console.log('Clicking search');
        return ['result1', 'result2'];
    }
}

/**
 * Test data factory with inference
 */
const createTestUser = () => {
    return {
        username: 'testuser',
        password: 'Test@123',
        email: 'test@example.com',
        age: 25
    };
    // Return type inferred:
    // { username: string; password: string; email: string; age: number }
};

const user = createTestUser();
// user type is fully inferred

/**
 * Test utilities with inference
 */
const testUtils = {
    // All return types inferred
    getCurrentTimestamp() {
        return Date.now();
    },
    
    generateRandomString(length: number) {
        return Math.random().toString(36).substring(length);
    },
    
    waitFor(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * TYPE INFERENCE SUMMARY:
 * 
 * What TypeScript Infers:
 * ✅ Variable types from initialization values
 * ✅ Return types from return statements
 * ✅ Array element types
 * ✅ Object property types
 * ✅ Generic type parameters
 * ✅ Types from context (contextual typing)
 * ✅ Best common type from multiple values
 * 
 * When to Use Inference:
 * ✅ Simple variable declarations
 * ✅ Obvious return types
 * ✅ Simple object literals
 * ✅ Array/object methods (map, filter, etc.)
 * 
 * When to Use Explicit Annotations:
 * ✅ Function parameters (always)
 * ✅ Complex return types (for clarity)
 * ✅ API boundaries
 * ✅ When type is not obvious
 * ✅ For better documentation
 * ✅ Variables declared without initialization
 * 
 * Best Practices:
 * 1. Let TypeScript infer when it's obvious
 * 2. Always annotate function parameters
 * 3. Annotate for better code documentation
 * 4. Use 'as const' for literal types
 * 5. Be explicit with empty arrays/objects
 * 6. Prefer inference for simple cases
 * 7. Balance between brevity and clarity
 */

export {
    add,
    identity,
    getFirst,
    HomePage,
    createTestUser,
    testUtils
};


