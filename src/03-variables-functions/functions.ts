/**
 * @fileoverview Functions in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to functions: declarations, expressions,
 * parameters, return types, and best practices for automation
 */

import { get } from "http";

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
function runTest(testName: string, timeout: number): void {
    console.log(`Running ${testName} with ${timeout}ms timeout`);
}

// FFunctions are First-Class Citizens in TypeScript
// Declaration
function showDetails(){
    console.log("Showing Details");
} 

// Ananymous Function assigned to a variable
const myfunc = function(){
    console.log("Anonymous Function");
}
// Arrow Function // Lambda Function
const myArrowFunc = () => console.log("Arrow Function");
const myArrowFunc2 = () => {
    console.log("Arrow Function with block");
    console.log("Multiple statements");
    console.log("End of function");
}

//myArrowFunc();
//myArrowFunc2();

const myarrowfunctinExecutesAnother = (anotherFn: Function) => {
    console.log("Before calling the function");
    anotherFn();
    console.log("After calling the function");  
}

//arrowfunctinExecutesAnother(showDetails);

function demoFunction(param1:string = "Suresh", param2:number= 0, param3:boolean= true ){
    console.log(`Param1: ${param1}, Param2: ${param2}, Param3: ${param3}`);
}

/**
 * This Function Performs a very useful operation
 * @param first - This is the first parameter
 * @param second  - This is the second parameter and its optional
 * @param third  - This is the third parameter and its boolean
 * @returns 
 * @example 
 * // Example usage:
 * name("John", 123, true);
 * name("Alice", "Hello", false);
 */

// Function Signatures
function name(first:string, second, third:boolean):string {
    return first;
}

function testFunction(param:string){}

testFunction("test");
//testFunction(123);
//testFunction(true);

function genericFunction<T>(param:T):T {
    console.log(param);
    return param;
}

genericFunction<string>("123");
genericFunction<number>(12345);
genericFunction<boolean>(true);
genericFunction<Array<number>>([1,2,3,4,5]);

interface Person<T1,T2> {
    name: T1;
    age: T2;
}

interface Stack<T> {
    items: T[];
    push(item: T): void;
    pop(): T | undefined;
}

const person1: Person<string, number> = {name: "Suresh", age: 30};
const person2: Person<number, boolean> = {name: 100, age: false};

//genericFunction<Person>({name: "Suresh", age: 30}); 




const myPets = ["Dog", "Cat", "Parrot", "Fish"]; 
const myscores = [90, 85, 88, 92]; 

Number.parseInt("1234");


function ascendingSort(first:number, second:number): number {
    return first - second;
}

function descendingSort(first:number, second:number): number {
    return second - first;
}

// int a = 100;
const myfunc1 = function myfn(){}



// Filter My Pets with names longer than 3 characters
/*
const longNamedPets = myPets.filter( pet => pet.length > 3 );
console.log(myscores.sort((first,second)=> first - second));
console.log(myscores.sort(ascendingSort));
console.log("Changing the sort order")
console.log(myscores.sort((first,second)=> second - first));
console.log(myscores.sort(descendingSort));
*/

function sortUsingSecondCharacter(first:string, second:string): number {
    return first.charCodeAt(1) - second.charCodeAt(1);
}

const number1 = 10;
const name1 = "Suresh";
const myFunc = () => {}

function getMeSortingStrategy<T>(name: string){
    if(name === "asc"){
        return ascendingSort;
    } else if(name === "desc"){
        return descendingSort;
    } 

}
// Function as first class citizens

const sortStrategy = getMeSortingStrategy("desc");
//const sortStrategy2 = getMeSortingStrategy("secondChar");
console.log(myscores.sort(getMeSortingStrategy("asc")));
console.log(myPets.sort(sortUsingSecondCharacter));
console.log(myPets.sort( (first, second) => first.charCodeAt(2) - second.charCodeAt(2) )); 

//console.log(myPets

// Filter My Scores with scores greater than 90
const highScores = myscores.filter( score => score > 90 );
//myscores.find

//Array

//console.log(longNamedPets); // ["Parrot", "Fish"]
console.log(highScores);    // [92]



//demoFunction();
//demoFunction("John");
//demoFunction("John", "Hello");
//demoFunction("John", "Second", "false");
//demoFunction("test", true);
// Call back
function callandExecute(anotherFn: Function){

    console.log("Before calling the function");
    anotherFn();
    console.log("After calling the function");  
}



// Invocation
//showDetails();
//myfunc();
//callandExecute(showDetails);
//callandExecute(myfunc);


/**
 * Function with return value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of the numbers
 */
function add(a: number, b: number): number {
    return a + b;
}

/**
 * Function with multiple return statements
 * @param {number} score - Test score
 * @returns {string} Test result status
 */
function getTestResult(score: number): string {
    if (score >= 90) {
        return 'Excellent';
    } else if (score >= 70) {
        return 'Good';
    } else {
        return 'Needs Improvement';
    }
}


// ============================================================================
// 2. FUNCTION EXPRESSIONS
// ============================================================================

/**
 * Function expression assigned to a variable
 */
const multiply = function(a: number, b: number): number {
    return a * b;
};

/**
 * Named function expression (useful for debugging)
 */
const divide = function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

/**
 * Function type annotation for variables
 */
let calculator: (a: number, b: number) => number;

calculator = function(a: number, b: number): number {
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
function executeTest(
    testName: string,
    retries?: number,
    captureScreenshot?: boolean
): void {
    console.log(`Test: ${testName}`);
    console.log(`Retries: ${retries ?? 0}`); // Use default if undefined
    console.log(`Screenshot: ${captureScreenshot ?? false}`);
}

// Usage examples
//executeTest('Login Test');                    // All optionals undefined
//executeTest('Login Test', 3);                 // retries provided
//executeTest('Login Test', 3, true);           // All parameters provided

/**
 * Checking if optional parameter was provided
 */
function logTestInfo(testName: string, details?: string): void {
    console.log(`Test: ${testName}`);
    
    if (details !== undefined) {
        console.log(`Details: ${details}`);
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
function launchBrowser(
    browser: string,
    headless: boolean = true,
    width: number = 1920,
    height: number = 1080
): string {
    return `${browser}: ${headless ? 'Headless' : 'Headed'} (${width}x${height})`;
}

// Usage examples
launchBrowser('chrome');                        // Uses all defaults
launchBrowser('firefox', false);                // Overrides headless
launchBrowser('safari', true, 1366, 768);       // Overrides all defaults

/**
 * Default parameters with complex types
 */
interface BrowserOptions {
    name: string;
    headless: boolean;
}

function startBrowser(
    options: BrowserOptions = { name: 'chrome', headless: true }
): void {
    console.log(`Starting ${options.name}, Headless: ${options.headless}`);
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
function runTestSuite(suiteName: string, ...testCases: string[]): void {
    console.log(`Suite: ${suiteName}`);
    console.log(`Running ${testCases.length} tests:`);
    
    testCases.forEach((test, index) => {
        console.log(`  ${index + 1}. ${test}`);
    });
}

// Usage
//runTestSuite('Login Suite', 'TC-001', 'TC-002', 'TC-003');
//runTestSuite('Checkout Suite', 'TC-100', 'TC-101');

/**
 * Rest parameters with typed elements
 */
function calculateAverage(...scores: number[]): number {
    if (scores.length === 0) return 0;
    
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

const average = calculateAverage(95, 87, 92, 88, 91); // 90.6

/**
 * Combining required, optional, default, and rest parameters
 */
function executeTests(
    environment: string,              // Required
    parallel: boolean = false,        // Default
    retries?: number,                 // Optional
    ...testNames: string[]            // Rest
): void {
    console.log(`Environment: ${environment}`);
    console.log(`Parallel: ${parallel}`);
    console.log(`Retries: ${retries ?? 0}`);
    console.log(`Tests: ${testNames.join(', ')}`);
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
function formatTestName(name: string): string {
    return name.toUpperCase();
}

/**
 * Returns a number
 */
function getTestDuration(start: number, end: number): number {
    return end - start;
}

/**
 * Returns a boolean
 */
function isTestPassing(score: number): boolean {
    return score >= 70;
}

/**
 * Returns void (no return value)
 */
function logTestResult(passed: boolean): void {
    console.log(passed ? 'PASSED' : 'FAILED');
}

/**
 * Returns an object
 */
function createTestReport(name: string, passed: boolean): {
    testName: string;
    result: string;
    timestamp: number;
} {
    return {
        testName: name,
        result: passed ? 'PASSED' : 'FAILED',
        timestamp: Date.now()
    };
}

/**
 * Returns an array
 */
function getFailedTests(tests: Array<{ name: string; passed: boolean }>): string[] {
    return tests
        .filter(test => !test.passed)
        .map(test => test.name);
}

/**
 * Returns a union type
 */
function getConfigValue(key: string): string | number | boolean {
    const config: { [key: string]: string | number | boolean } = {
        timeout: 5000,
        headless: true,
        baseUrl: 'https://example.com'
    };
    return config[key];
}

/**
 * Returns never (function never returns normally)
 */
function throwError(message: string): never {
    throw new Error(message);
}


// ============================================================================
// 7. FUNCTION OVERLOADING
// ============================================================================

/**
 * Function overloading allows different parameter types/counts
 * Declare multiple signatures, implement once
 */

/**
 * Overload signatures
 */
function findElement(selector: string): string;
function findElement(selector: string, timeout: number): string;
function findElement(selector: string, timeout: number, throwError: boolean): string;

/**
 * Implementation (must handle all overload cases)
 */
function findElement(
    selector: string,
    timeout?: number,
    throwError?: boolean
): string {
    const actualTimeout = timeout ?? 5000;
    const shouldThrow = throwError ?? true;
    
    console.log(`Finding ${selector} with ${actualTimeout}ms timeout`);
    
    // Simulated element finding
    const found = Math.random() > 0.1;
    
    if (!found && shouldThrow) {
        throw new Error(`Element not found: ${selector}`);
    }
    
    return found ? `Element: ${selector}` : '';
}

// Usage - all valid due to overloads
//findElement('#loginBtn');
//findElement('#loginBtn', 10000);
//findElement('#loginBtn', 10000, false);

/**
 * Overloading with different parameter types
 */
function processTestData(data: string): string[];
function processTestData(data: number): number[];
function processTestData(data: string | number): string[] | number[] {
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
function getFirst<T>(array: T[]): T | undefined {
    return array[0];
}

// Usage with different types
const firstString = getFirst<string>(['a', 'b', 'c']); // Type: string | undefined
const firstNumber = getFirst<number>([1, 2, 3]);       // Type: number | undefined
const firstBool = getFirst([true, false]);             // Type inferred: boolean | undefined

/**
 * Generic function with multiple type parameters
 */
function createPair<K, V>(key: K, value: V): { key: K; value: V } {
    return { key, value };
}

const pair1 = createPair<string, number>('count', 5);
const pair2 = createPair('name', 'Test');  // Types inferred

/**
 * Generic function with constraints
 */
interface HasName {
    name: string;
}

function getTestName<T extends HasName>(item: T): string {
    return item.name;
}

// Works with any object that has a name property
//getTestName({ name: 'Test 1', passed: true });
//getTestName({ name: 'Suite A', count: 5 });


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
async function navigateToUrl(url: string): Promise<void> {
    console.log(`Navigating to ${url}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Navigation complete');
}

/**
 * Async function returning a value
 * @param {string} selector - Element selector
 * @returns {Promise<string>} Element text
 */
async function getElementText(selector: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return `Text from ${selector}`;
}

/**
 * Async function with error handling
 */
async function performLogin(username: string, password: string): Promise<boolean> {
    try {
        console.log(`Logging in as ${username}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate login validation
        if (username && password) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
}

/**
 * Multiple async operations
 */
async function runCompleteTest(): Promise<void> {
    await navigateToUrl('https://example.com');
    const text = await getElementText('#header');
    const loggedIn = await performLogin('user@test.com', 'password');
    
    console.log(`Header: ${text}, Logged in: ${loggedIn}`);
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
function retryOperation<T>(
    operation: () => Promise<T>,
    maxRetries: number
): Promise<T> {
    return new Promise(async (resolve, reject) => {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const result = await operation();
                resolve(result);
                return;
            } catch (error) {
                if (attempt === maxRetries - 1) {
                    reject(error);
                }
            }
        }
    });
}

// Usage
//retryOperation(() => performLogin('user', 'pass'), 3);

/**
 * Function that returns a function (closure)
 */
function createTestExecutor(environment: string): (testName: string) => void {
    return function(testName: string): void {
        console.log(`Running ${testName} in ${environment}`);
    };
}

const devExecutor = createTestExecutor('development');
const prodExecutor = createTestExecutor('production');

//devExecutor('Login Test');  // Running Login Test in development
//prodExecutor('Login Test'); // Running Login Test in production

/**
 * Currying - transforming function with multiple args into sequence of functions
 */
function multiply3(a: number): (b: number) => (c: number) => number {
    return function(b: number): (c: number) => number {
        return function(c: number): number {
            return a * b * c;
        };
    };
}

const result = multiply3(2)(3)(4); // 24


// ============================================================================
// 11. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Page interaction utilities
 */
class PageUtils {
    /**
     * Clicks an element with retry logic
     */
    static async clickElement(
        selector: string,
        retries: number = 3
    ): Promise<void> {
        for (let i = 0; i < retries; i++) {
            try {
                console.log(`Clicking ${selector} (attempt ${i + 1})`);
                await new Promise(resolve => setTimeout(resolve, 500));
                return;
            } catch (error) {
                if (i === retries - 1) throw error;
            }
        }
    }
    
    /**
     * Waits for element with custom condition
     */
    static async waitForElement(
        selector: string,
        condition: (element: string) => boolean = () => true,
        timeout: number = 5000
    ): Promise<string> {
        const startTime = Date.now();
        
        while (Date.now() - startTime < timeout) {
            const element = `Element: ${selector}`;
            if (condition(element)) {
                return element;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        throw new Error(`Timeout waiting for ${selector}`);
    }
}

/**
 * Test data generator functions
 */
function generateRandomEmail(): string {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
}

function generateTestUser(role: string = 'user'): {
    username: string;
    password: string;
    role: string;
} {
    return {
        username: generateRandomEmail(),
        password: 'Test@' + Date.now(),
        role: role
    };
}

/**
 * Test reporter functions
 */
function logTestStart(testName: string): void {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Starting: ${testName}`);
    console.log(`${'='.repeat(50)}`);
}

function logTestEnd(testName: string, passed: boolean, duration: number): void {
    console.log(`${'='.repeat(50)}`);
    console.log(`${testName}: ${passed ? 'PASSED' : 'FAILED'}`);
    console.log(`Duration: ${duration}ms`);
    console.log(`${'='.repeat(50)}\n`);
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * FUNCTIONS SUMMARY:
 * 
 * Function Types:
 * ✅ Function declarations: function name() {}
 * ✅ Function expressions: const name = function() {}
 * ✅ Arrow functions: const name = () => {}
 * ✅ Async functions: async function name() {}
 * ✅ Generator functions: function* name() {}
 * 
 * Parameters:
 * ✅ Required: param: type
 * ✅ Optional: param?: type
 * ✅ Default: param: type = value
 * ✅ Rest: ...params: type[]
 * ✅ Destructured: {prop1, prop2}: Type
 * 
 * Advanced Features:
 * ✅ Function overloading
 * ✅ Generic functions
 * ✅ Higher-order functions
 * ✅ Closures
 * ✅ Currying
 * 
 * Best Practices:
 * 1. Always annotate parameter types
 * 2. Explicitly declare return types (for clarity)
 * 3. Use optional/default parameters appropriately
 * 4. Use rest parameters for variable arguments
 * 5. Prefer async/await over callbacks
 * 6. Use function overloading for multiple signatures
 * 7. Keep functions focused and single-purpose
 * 8. Use meaningful function names
 * 
 * For Automation:
 * - Use async functions for all page interactions
 * - Implement retry logic with higher-order functions
 * - Use default parameters for common timeout values
 * - Create reusable utility functions
 * - Use generics for type-safe test data functions
 */

export {
    runTest,
    executeTest,
    launchBrowser,
    runTestSuite,
    findElement,
    getFirst,
    navigateToUrl,
    performLogin,
    PageUtils,
    generateRandomEmail,
    generateTestUser
};
