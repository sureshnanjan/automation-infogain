/**
 * @fileoverview Arrow Functions in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to arrow functions (fat arrow syntax)
 * with comparisons to regular functions and practical automation examples
 */

/**
 * ARROW FUNCTIONS
 * ================
 * Arrow functions provide a concise syntax for writing functions.
 * Introduced in ES6, they have some important differences from
 * regular functions, particularly regarding 'this' binding.
 * 
 * Syntax: (parameters) => expression
 * or: (parameters) => { statements }
 */

// ============================================================================
// 1. BASIC ARROW FUNCTION SYNTAX
// ============================================================================

/**
 * SYNTAX VARIATIONS
 */

// Traditional function
function addTraditional(a: number, b: number): number {
    return a + b;
}

// Arrow function - full syntax
const addArrow = (a: number, b: number): number => {
    return a + b;
};

// Arrow function - concise (implicit return)
const addConcise = (a: number, b: number): number => a + b;

// Single parameter - parentheses optional
const square = (x: number): number => x * x;
const squareWithParens = (x: number): number => x * x; // Same thing

// No parameters - parentheses required
const getTimestamp = (): number => Date.now();

// Multiple statements - braces required
const processTest = (testName: string): void => {
    console.log(`Starting: ${testName}`);
    console.log(`Timestamp: ${Date.now()}`);
};


// ============================================================================
// 2. IMPLICIT VS EXPLICIT RETURN
// ============================================================================

/**
 * Arrow functions can have implicit returns for single expressions
 */

// Implicit return - no braces, no return keyword
const multiply = (a: number, b: number): number => a * b;

// Explicit return - with braces and return keyword
const divide = (a: number, b: number): number => {
    return a / b;
};

// Returning objects - wrap in parentheses for implicit return
const createUser = (name: string, age: number) => ({
    name: name,
    age: age,
    timestamp: Date.now()
});

// Without parentheses - syntax error (looks like function body)
// const wrong = (name: string) => { name: name }; // ❌ Error

/**
 * Multi-line implicit return with object
 */
const createTestReport = (testName: string, passed: boolean) => ({
    testName,
    result: passed ? 'PASSED' : 'FAILED',
    timestamp: Date.now(),
    duration: Math.random() * 1000
});


// ============================================================================
// 3. ARROW FUNCTIONS VS REGULAR FUNCTIONS
// ============================================================================

/**
 * KEY DIFFERENCE 1: 'this' binding
 * Arrow functions don't have their own 'this' - they inherit from parent scope
 */

class TestRunner {
    testName: string = 'Login Test';
    
    /**
     * Regular function - 'this' depends on how it's called
     */
    runWithRegularFunction(): void {
        setTimeout(function() {
            // console.log(this.testName); // ❌ 'this' is undefined or global object
        }, 100);
    }
    
    /**
     * Arrow function - 'this' is lexically bound (from TestRunner)
     */
    runWithArrowFunction(): void {
        setTimeout(() => {
            console.log(this.testName); // ✅ 'this' refers to TestRunner instance
        }, 100);
    }
    
    /**
     * Practical example: callbacks
     */
    executeTests(tests: string[]): void {
        // Arrow function maintains 'this' context
        tests.forEach(test => {
            console.log(`${this.testName}: Running ${test}`); // ✅ Works
        });
        
        // Regular function loses 'this' context
        tests.forEach(function(test) {
            // console.log(`${this.testName}: Running ${test}`); // ❌ Error
        });
    }
}

/**
 * KEY DIFFERENCE 2: arguments object
 * Arrow functions don't have 'arguments' object
 */

function regularWithArguments(): void {
    console.log(arguments); // ✅ Available
}

const arrowWithArguments = (): void => {
    // console.log(arguments); // ❌ Not available
};

// Use rest parameters instead
const arrowWithRest = (...args: any[]): void => {
    console.log(args); // ✅ Use rest parameters
};

/**
 * KEY DIFFERENCE 3: Cannot be used as constructors
 */

// Regular function can be constructor
function RegularConstructor(this: any, name: string) {
    this.name = name;
}
// const obj1 = new RegularConstructor('test'); // Works

// Arrow function cannot be constructor
const ArrowConstructor = (name: string) => {
    // Cannot use 'new' with arrow function
};
// const obj2 = new ArrowConstructor('test'); // ❌ Error


// ============================================================================
// 4. ARROW FUNCTIONS WITH DIFFERENT PARAMETER TYPES
// ============================================================================

/**
 * No parameters
 */
const getRandomId = (): string => {
    return Math.random().toString(36).substring(7);
};

/**
 * One parameter - parentheses optional (but recommended with TypeScript)
 */
const doubleValue = (x: number): number => x * 2;

/**
 * Multiple parameters
 */
const concatenate = (str1: string, str2: string): string => str1 + str2;

/**
 * Optional parameters
 */
const greet = (name: string, greeting?: string): string => {
    return `${greeting ?? 'Hello'}, ${name}!`;
};

/**
 * Default parameters
 */
const launchBrowser = (
    browser: string = 'chrome',
    headless: boolean = true
): string => {
    return `Launching ${browser} (${headless ? 'headless' : 'headed'})`;
};

/**
 * Rest parameters
 */
const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

/**
 * Destructured parameters
 */
const printUser = ({ name, email }: { name: string; email: string }): void => {
    console.log(`${name}: ${email}`);
};

// Object destructuring with type
interface TestConfig {
    timeout: number;
    retries: number;
    headless: boolean;
}

const displayConfig = ({ timeout, retries, headless }: TestConfig): void => {
    console.log(`Timeout: ${timeout}, Retries: ${retries}, Headless: ${headless}`);
};


// ============================================================================
// 5. ARROW FUNCTIONS IN ARRAY METHODS
// ============================================================================

/**
 * Arrow functions are perfect for array method callbacks
 */

const testScores: number[] = [95, 87, 92, 78, 88];

// map - transform array
const percentages = testScores.map(score => (score / 100) * 100);
const roundedScores = testScores.map(score => Math.round(score));

// filter - select elements
const passingScores = testScores.filter(score => score >= 70);
const excellentScores = testScores.filter(score => score >= 90);

// reduce - accumulate value
const totalScore = testScores.reduce((sum, score) => sum + score, 0);
const averageScore = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;

// find - find first match
const firstFailingScore = testScores.find(score => score < 70);

// some - check if any match
const hasFailures = testScores.some(score => score < 70);

// every - check if all match
const allPassing = testScores.every(score => score >= 70);

// forEach - iterate
testScores.forEach((score, index) => {
    console.log(`Test ${index + 1}: ${score}`);
});

// sort - with arrow function comparator
const sortedScores = [...testScores].sort((a, b) => a - b);

// Multiple operations chained
const processedScores = testScores
    .filter(score => score >= 70)
    .map(score => score * 1.1)
    .sort((a, b) => b - a);


// ============================================================================
// 6. ASYNC ARROW FUNCTIONS
// ============================================================================

/**
 * Arrow functions can be async
 */

// Basic async arrow function
const fetchData = async (url: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `Data from ${url}`;
};

// Async arrow function with error handling
const safeLogin = async (username: string, password: string): Promise<boolean> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        return true;
    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
};

// Arrow function returning Promise
const waitForElement = (selector: string, timeout: number = 5000): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Found: ${selector}`);
        }, timeout);
    });
};

// Multiple async operations
const performCompleteTest = async (): Promise<void> => {
    const data = await fetchData('https://api.example.com');
    const loggedIn = await safeLogin('user', 'pass');
    const element = await waitForElement('#loginBtn');
    console.log(data, loggedIn, element);
};


// ============================================================================
// 7. ARROW FUNCTIONS IN CALLBACKS
// ============================================================================

/**
 * Arrow functions maintain lexical 'this' - perfect for callbacks
 */

class PageObject {
    private pageName: string = 'Login Page';
    private elements: string[] = ['#username', '#password', '#submit'];
    
    /**
     * Using arrow function in setTimeout
     */
    delayedLog(): void {
        setTimeout(() => {
            console.log(`Page: ${this.pageName}`); // ✅ 'this' works correctly
        }, 1000);
    }
    
    /**
     * Using arrow function in forEach
     */
    logElements(): void {
        this.elements.forEach(element => {
            console.log(`${this.pageName} - ${element}`); // ✅ 'this' works
        });
    }
    
    /**
     * Arrow function in Promise
     */
    async loadPage(): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`${this.pageName} loaded`); // ✅ 'this' works
                resolve();
            }, 1000);
        });
    }
    
    /**
     * Arrow function in event listener simulation
     */
    setupClickHandler(callback: () => void): void {
        // Simulating event listener
        const handler = () => {
            console.log(`Clicked on ${this.pageName}`); // ✅ 'this' works
            callback();
        };
        handler();
    }
}


// ============================================================================
// 8. HIGHER-ORDER ARROW FUNCTIONS
// ============================================================================

/**
 * Arrow functions that return arrow functions
 */

// Currying with arrow functions
const add2 = (a: number) => (b: number) => a + b;
const add5 = add2(5);
console.log(add5(3)); // 8

// Function factory
const createMultiplier = (factor: number) => (value: number) => value * factor;
const double2 = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double2(5)); // 10
console.log(triple(5));  // 15

// Partial application
const createTestExecutor = (environment: string) => (testName: string) => {
    console.log(`Running ${testName} in ${environment}`);
};

const devExecutor = createTestExecutor('development');
const prodExecutor = createTestExecutor('production');

devExecutor('Login Test');
prodExecutor('Login Test');

// Composition
const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

const addOne = (x: number) => x + 1;
const multiplyByTwo = (x: number) => x * 2;

const addOneThenDouble = compose(multiplyByTwo, addOne);
console.log(addOneThenDouble(5)); // (5 + 1) * 2 = 12


// ============================================================================
// 9. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Test utilities using arrow functions
 */

// Retry logic
const retry = <T>(
    operation: () => Promise<T>,
    maxRetries: number = 3
): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const result = await operation();
                return resolve(result);
            } catch (error) {
                if (i === maxRetries - 1) reject(error);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
    });
};

// Wait utility
const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Element finder with retry
const findElementWithRetry = async (
    selector: string,
    retries: number = 3
): Promise<string> => {
    return retry(async () => {
        await wait(500);
        return `Found: ${selector}`;
    }, retries);
};

/**
 * Test data generators
 */
const generateEmail = (): string => `test${Date.now()}@example.com`;
const generatePassword = (): string => `Pass${Date.now()}!`;

const createTestUser = () => ({
    email: generateEmail(),
    password: generatePassword(),
    timestamp: Date.now()
});

/**
 * Test reporters
 */
const logSuccess = (testName: string): void => {
    console.log(`✅ ${testName} PASSED`);
};

const logFailure = (testName: string, error: string): void => {
    console.log(`❌ ${testName} FAILED: ${error}`);
};

const logDuration = (testName: string, duration: number): void => {
    console.log(`⏱️  ${testName} took ${duration}ms`);
};

/**
 * Page Object Pattern with arrow functions
 */
class LoginPage2 {
    private readonly selectors = {
        username: '#username',
        password: '#password',
        submit: '#submit'
    };
    
    // Arrow function methods
    fillUsername = async (username: string): Promise<void> => {
        console.log(`Filling username: ${username}`);
        await wait(100);
    };
    
    fillPassword = async (password: string): Promise<void> => {
        console.log(`Filling password: ${'*'.repeat(password.length)}`);
        await wait(100);
    };
    
    clickSubmit = async (): Promise<void> => {
        console.log('Clicking submit button');
        await wait(100);
    };
    
    login = async (username: string, password: string): Promise<void> => {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSubmit();
    };
}

/**
 * Fluent API with arrow functions
 */
class TestBuilder {
    private testName: string = '';
    private timeout: number = 5000;
    private retries: number = 0;
    
    withName = (name: string): TestBuilder => {
        this.testName = name;
        return this;
    };
    
    withTimeout = (timeout: number): TestBuilder => {
        this.timeout = timeout;
        return this;
    };
    
    withRetries = (retries: number): TestBuilder => {
        this.retries = retries;
        return this;
    };
    
    build = () => ({
        name: this.testName,
        timeout: this.timeout,
        retries: this.retries
    });
}

// Usage
const test = new TestBuilder()
    .withName('Login Test')
    .withTimeout(10000)
    .withRetries(3)
    .build();


// ============================================================================
// 10. COMMON PATTERNS AND BEST PRACTICES
// ============================================================================

/**
 * Pattern: Array processing pipeline
 */
const testResults = [
    { name: 'Test 1', score: 95, passed: true },
    { name: 'Test 2', score: 65, passed: false },
    { name: 'Test 3', score: 87, passed: true }
];

const summary = testResults
    .filter(test => test.passed)
    .map(test => test.score)
    .reduce((sum, score) => sum + score, 0);

/**
 * Pattern: Conditional execution
 */
const executeIfValid = (value: string | null) => (
    value ? console.log(value) : console.log('No value')
);

/**
 * Pattern: Memoization
 */
const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
    const cache = new Map();
    return ((...args: any[]) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
};

/**
 * Pattern: Debounce
 */
const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ARROW FUNCTIONS SUMMARY:
 * 
 * Syntax:
 * ✅ (params) => expression
 * ✅ (params) => { statements }
 * ✅ param => expression (single param, no parens)
 * ✅ () => expression (no params, parens required)
 * 
 * Key Features:
 * ✅ Lexical 'this' binding (inherits from parent)
 * ✅ Implicit return for single expressions
 * ✅ Concise syntax
 * ✅ Cannot be used as constructors
 * ✅ No 'arguments' object (use rest parameters)
 * 
 * Differences from Regular Functions:
 * ✅ 'this' is lexically bound
 * ✅ No 'arguments' object
 * ✅ Cannot be used with 'new'
 * ✅ No prototype property
 * ✅ Cannot be generators
 * 
 * Best Use Cases:
 * ✅ Array methods (map, filter, reduce, etc.)
 * ✅ Callbacks (setTimeout, Promise, etc.)
 * ✅ Short inline functions
 * ✅ When you need lexical 'this'
 * ✅ Functional programming patterns
 * 
 * When NOT to Use:
 * ❌ Methods that need dynamic 'this'
 * ❌ When you need 'arguments' object
 * ❌ Constructor functions
 * ❌ Generator functions
 * 
 * Best Practices:
 * 1. Use for short, simple functions
 * 2. Use in callbacks and array methods
 * 3. Use when you need lexical 'this'
 * 4. Always include type annotations
 * 5. Use parentheses for clarity (even with single param)
 * 6. Wrap object literals in parentheses for implicit return
 * 7. Prefer arrow functions for pure functions
 * 8. Use regular functions for methods when 'this' needed
 */

export {
    addArrow,
    createTestReport,
    TestRunner,
    retry,
    wait,
    findElementWithRetry,
    createTestUser,
    LoginPage2,
    TestBuilder
};
