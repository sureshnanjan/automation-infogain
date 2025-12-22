/**
 * @fileoverview Variables in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to variable declarations: var, let, and const
 * with scope, hoisting, and best practices for automation testing
 */

/**
 * VARIABLES IN TYPESCRIPT
 * ========================
 * TypeScript supports three ways to declare variables:
 * 1. var (function-scoped, legacy - avoid in modern code)
 * 2. let (block-scoped, mutable)
 * 3. const (block-scoped, immutable reference)
 */

// ============================================================================
// 1. VAR - FUNCTION SCOPED (Legacy - Avoid in Modern Code)
// ============================================================================

/**
 * VAR has function scope, not block scope
 * Variables declared with var are hoisted to the top of their function
 */

/**
 * Demonstrates var hoisting
 */
function demonstrateVarHoisting(): void {
    //console.log(testName); // undefined (not an error - hoisted)
    var testName = 'Login Test';
    console.log(testName); // 'Login Test'
}

/**
 * VAR is function-scoped
 */
function varFunctionScope(): void {
    var timeout = 5000;
    
    if (true) {
        var timeout = 10000; // Same variable! Not a new one
        console.log(timeout); // 10000
    }
    
    console.log(timeout); // 10000 - var is not block-scoped!
}

/**
 * VAR in loops can cause issues
 */
function varLoopIssue(): void {
    // Classic var loop problem
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i); // Will print 3, 3, 3 (not 0, 1, 2!)
        }, 100);
    }
}

/**
 * Problems with var:
 * - Function-scoped, not block-scoped
 * - Can be redeclared
 * - Hoisting can cause confusion
 * - Not suitable for modern TypeScript/JavaScript
 */


// ============================================================================
// 2. LET - BLOCK SCOPED (Modern, Mutable)
// ============================================================================

/**
 * LET is block-scoped - confined to the block where it's declared
 * Cannot be re-declared in the same scope
 * Not hoisted (temporal dead zone)
 */

/**
 * Block scope with let
 */
function letBlockScope(): void {
    let timeout = 5000;
    //let timeout
    
    if (true) {
        let timeout = 10000; // Different variable - block scoped
        console.log(timeout); // 10000
        if (false) {
            let timeout = 15000;
        }
    }
    
    console.log(timeout); // 5000 - outer variable unchanged
}

//letBlockScope();

/**
 * Let in loops works as expected
 */
function letLoopCorrect(): void {
    let i = 100;
    console.log(`Outer i: ${i}`);
    for (let i = 0; i < 3; i++) {
        //setTimeout(() => {
            console.log(i); // Will print 0, 1, 2 correctly
        //}, 100);
    }
    console.log(`Outer i: ${i}`);

}
//letLoopCorrect();

/**
 * Let with typed automation variables
 */
function testExecution(): void {
    let testName: string = 'Login Test';
    let testDuration: number = 0;
    let testPassed: boolean = false;
    
    // Simulate test execution
    const startTime: number = Date.now();
    
    // Test logic
    testPassed = true;
    
    testDuration = Date.now() - startTime;
    
    // Variables can be reassigned
    testName = 'Login Test - Completed';
    testDuration = 5000;
}

/**
 * Let cannot be redeclared
 */
function noDuplicateDeclaration(): void {
    let browser: string = 'chrome';
    // let browser: string = 'firefox'; // ❌ Error: Cannot redeclare
    browser = 'firefox'; // ✅ Can reassign
}

/**
 * Temporal Dead Zone with let
 */
function temporalDeadZone(): void {
    // console.log(testCase); // ❌ ReferenceError: Cannot access before initialization
    let testCase: string = 'TC-001';
    console.log(testCase); // ✅ 'TC-001'
}


// ============================================================================
// 3. CONST - BLOCK SCOPED (Modern, Immutable Reference)
// ============================================================================

/**
 * CONST creates an immutable binding
 * The reference cannot be changed, but object properties can be modified
 * Must be initialized at declaration
 */

/**
 * Basic const usage
 */
function basicConst(): void {
    const timeout: number = 5000;
    // timeout = 10000; // ❌ Error: Cannot assign to const
    
    const browser: string = 'chrome';
    // browser = 'firefox'; // ❌ Error
}

/**
 * Const with objects - reference is immutable, properties are mutable
 */
function constWithObjects(): void {
    const testConfig = {
        browser: 'chrome',
        headless: true,
        timeout: 5000
    };

    console.log(testConfig); // 'chrome'
    //testConfig = {}
    
    // Can modify properties ✅
    testConfig.timeout = 10000;
    testConfig.headless = false;
    testConfig.browser = 'edge';
    console.log(testConfig);
    
    // Cannot reassign the reference ❌
    // testConfig = { browser: 'firefox', headless: true, timeout: 5000 };
}
constWithObjects();
/**
 * Const with arrays - reference is immutable, elements are mutable
 */
function constWithArrays(): void {
    const testCases: string[] = ['TC-001', 'TC-002'];
    console.log(testCases)
    // Can modify array contents ✅
    testCases.push('TC-003');
    testCases[0] = 'TC-001-Updated';
    console.log(testCases)
    // Cannot reassign the reference ❌
    // testCases = ['TC-004', 'TC-005'];
}
constWithArrays();
/**
 * Making objects truly immutable with Object.freeze
 */
function immutableObject(): void {
    const testConfig = Object.freeze({
        browser: 'chrome',
        timeout: 5000
    });
    
    // testConfig.timeout = 10000; // ❌ Error in strict mode
}

/**
 * Const with readonly for class properties
 */
class TestRunner {
    readonly maxRetries: number = 3;
    readonly testSuite: string;
    
    constructor(suiteName: string) {
        this.testSuite = suiteName; // Can initialize in constructor
    }
    
    execute(): void {
        // this.maxRetries = 5; // ❌ Error: Cannot assign to readonly
    }
}


// ============================================================================
// 4. SCOPE COMPARISON
// ============================================================================

/**
 * Comprehensive scope comparison
 */
function scopeComparison(): void {
    // Global to this function
    var globalVar = 'var - function scope';
    let globalLet = 'let - block scope';
    const globalConst = 'const - block scope';
    
    if (true) {
        var blockVar = 'var in block';     // Function scoped - leaks out
        let blockLet = 'let in block';     // Block scoped - stays here
        const blockConst = 'const in block'; // Block scoped - stays here
        
        console.log(blockVar);   // ✅ Accessible
        console.log(blockLet);   // ✅ Accessible
        console.log(blockConst); // ✅ Accessible
    }
    
    console.log(blockVar);   // ✅ Accessible (leaked out!)
    // console.log(blockLet);   // ❌ Error: Not accessible
    // console.log(blockConst); // ❌ Error: Not accessible
}

scopeComparison();

// ============================================================================
// 5. BEST PRACTICES FOR AUTOMATION TESTING
// ============================================================================

/**
 * Test configuration - use const for immutable config
 */
const TEST_CONFIG = {
    baseUrl: 'https://example.com',
    timeout: 30000,
    retries: 3,
    browsers: ['chrome', 'firefox']
} as const; // 'as const' makes it deeply readonly

/**
 * Test data - use const when data doesn't change
 */
const VALID_CREDENTIALS = {
    username: 'testuser@example.com',
    password: 'Test@123'
};

const INVALID_CREDENTIALS = {
    username: 'invalid@example.com',
    password: 'wrong'
};

/**
 * Test execution - use let for changing values
 */
function executeTestCase(): void {
    let currentStep: number = 0;
    let testStatus: string = 'running';
    let errorMessage: string | null = null;
    let numberofPassed= 0
    
    try {
        currentStep = 1;
        // Perform test step 1
        
        currentStep = 2;
        // Perform test step 2
        
        testStatus = 'passed';
    } catch (error) {
        testStatus = 'failed';
        errorMessage = (error as Error).message;
    }
}

/**
 * Page objects - use const for selectors, let for state
 */
class LoginPage {
    // Selectors are constants
    private readonly usernameInput: string = '#username';
    private readonly passwordInput: string = '#password';
    private readonly loginButton: string = '#login-btn';
    
    // State can change
    private isLoggedIn: boolean = false;
    private loginAttempts: number = 0;
    
    async login(username: string, password: string): Promise<void> {
        // Use let for method variables that change
        let success: boolean = false;
        
        this.loginAttempts++;
        
        // Perform login
        success = true;
        this.isLoggedIn = success;
    }
}

/**
 * Loop variables - always use let (never var)
 */
function iterateTestCases(): void {
    const testCases: string[] = ['TC-001', 'TC-002', 'TC-003'];
    
    // ✅ Use let in for loops
    for (let i = 0; i < testCases.length; i++) {
        console.log(testCases[i]);
    }
    
    // ✅ Use const in for...of (when not modifying)
    for (const testCase of testCases) {
        console.log(testCase);
    }
    
    // ✅ Use let if you need to modify loop variable
    for (let testCase of testCases) {
        testCase = testCase.toUpperCase();
        console.log(testCase);
    }
}


// ============================================================================
// 6. DESTRUCTURING WITH VARIABLES
// ============================================================================

/**
 * Destructuring with let and const
 */
function destructuringExamples(): void {
    // Object destructuring with const
    const testResult = {
        name: 'Login Test',
        passed: true,
        duration: 5000
    };
    
    const { name, passed, duration } = testResult;
    
    // Array destructuring with const
    const [first, second, third] = ['TC-001', 'TC-002', 'TC-003'];
    
    // Destructuring with let when you need to reassign
    let { timeout, retries } = { timeout: 5000, retries: 3 };
    timeout = 10000; // Can reassign
}

/**
 * Function parameters are effectively const
 */
function processTestResult(testName: string, passed: boolean): void {
    // testName = 'Different name'; // Can reassign parameters (but don't!)
    // It's better to treat parameters as const
    
    const formattedName = testName.toUpperCase(); // Create new variable instead
}


// ============================================================================
// 7. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Test execution with proper variable usage
 */
class TestExecutor {
    // Constants for configuration
    private readonly DEFAULT_TIMEOUT: number = 30000;
    private readonly MAX_RETRIES: number = 3;
    
    // State variables
    private currentTest: string | null = null;
    private testsExecuted: number = 0;
    private testsFailed: number = 0;
    
    /**
     * Executes a single test
     */
    async executeTest(testName: string): Promise<boolean> {
        // Use const for values that don't change in this scope
        const startTime: number = Date.now();
        const timeout: number = this.DEFAULT_TIMEOUT;
        
        // Use let for values that will change
        let retryCount: number = 0;
        let testPassed: boolean = false;
        let lastError: Error | null = null;
        
        this.currentTest = testName;
        
        // Retry loop
        while (retryCount < this.MAX_RETRIES && !testPassed) {
            try {
                // Simulate test execution
                await this.runTest(testName, timeout);
                testPassed = true;
            } catch (error) {
                lastError = error as Error;
                retryCount++;
            }
        }
        
        // Update counters
        this.testsExecuted++;
        if (!testPassed) {
            this.testsFailed++;
        }
        
        // Calculate duration
        const duration: number = Date.now() - startTime;
        console.log(`Test: ${testName}, Duration: ${duration}ms`);
        
        return testPassed;
    }
    
    private async runTest(name: string, timeout: number): Promise<void> {
        // Test implementation
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

/**
 * Test data provider with proper variable usage
 */
class TestDataProvider {
    // Constant test data sets
    private readonly VALID_USERS = [
        { username: 'user1@test.com', password: 'Pass123!' },
        { username: 'user2@test.com', password: 'Pass456!' }
    ];
    
    private readonly INVALID_USERS = [
        { username: 'invalid', password: '123' },
        { username: '', password: '' }
    ];
    
    /**
     * Gets test data by type
     */
    getTestData(type: 'valid' | 'invalid'): Array<{ username: string; password: string }> {
        // Use const for return value that won't change
        const data = type === 'valid' ? this.VALID_USERS : this.INVALID_USERS;
        return data;
    }
}


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * VARIABLE DECLARATION SUMMARY:
 * 
 * VAR (Avoid):
 * ❌ Function-scoped (not block-scoped)
 * ❌ Can be redeclared
 * ❌ Hoisting causes confusion
 * ❌ Not recommended in modern TypeScript
 * 
 * LET (Use for mutable values):
 * ✅ Block-scoped
 * ✅ Cannot be redeclared in same scope
 * ✅ Can be reassigned
 * ✅ No hoisting issues (temporal dead zone)
 * 
 * CONST (Use by default):
 * ✅ Block-scoped
 * ✅ Cannot be reassigned
 * ✅ Must be initialized
 * ✅ Prefer for values that don't change
 * ✅ Note: Objects/arrays contents can still be modified
 * 
 * Best Practices:
 * 1. Default to const, use let only when needed
 * 2. Never use var in modern code
 * 3. Use const for configuration and constants
 * 4. Use let for loop variables and counters
 * 5. Use readonly for class properties that shouldn't change
 * 6. Use Object.freeze() for truly immutable objects
 * 7. Use meaningful variable names
 * 8. Keep variables in smallest possible scope
 * 
 * For Automation Testing:
 * - const: Selectors, test data, configuration
 * - let: Test state, counters, loop variables
 * - readonly: Class properties that shouldn't change
 * - Never var: Always avoid in test automation code
 */

export {
    TestRunner,
    LoginPage,
    TestExecutor,
    TestDataProvider,
    TEST_CONFIG,
    VALID_CREDENTIALS
};
