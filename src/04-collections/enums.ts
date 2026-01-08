/**
 * @fileoverview Enums in TypeScript
 * @author Suresh - Software Trainer
 * @description Complete guide to enumerations - named constants
 * with practical automation testing examples
 */

/**
 * ENUMS (ENUMERATIONS)
 * =====================
 * Enums allow you to define a set of named constants.
 * They make code more readable and prevent magic values.
 * TypeScript supports numeric and string enums.
 */

// ============================================================================
// 1. NUMERIC ENUMS
// ============================================================================

/**
 * Basic numeric enum - values auto-increment from 0
 */
enum TestStatus {
    Pending,    // 0
    Running,    // 1
    Passed,     // 2
    Failed,     // 3
    Skipped     // 4
}

// Usage
let currentStatus: TestStatus = TestStatus.Pending;
currentStatus = TestStatus.Running;
console.log(currentStatus); // 1

/**
 * Numeric enum with custom starting value
 */
enum Priority {
    Low = 1,      // 1
    Medium,       // 2 (auto-increments)
    High,         // 3
    Critical      // 4
}

/**
 * Numeric enum with specific values
 */
enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

// Usage
function handleResponse(status: HttpStatus): void {
    switch (status) {
        case HttpStatus.OK:
            console.log('Success');
            break;
        case HttpStatus.NotFound:
            console.log('Not Found');
            break;
        default:
            console.log('Other status');
    }
}


// ============================================================================
// 2. STRING ENUMS
// ============================================================================

/**
 * String enums - more readable and debuggable
 * Must initialize all members
 */
enum BrowserType {
    Chrome = 'chrome',
    Firefox = 'firefox',
    Safari = 'safari',
    Edge = 'edge'
}

// Usage
const browser: BrowserType = BrowserType.Chrome;
console.log(browser); // 'chrome' (not 0)

/**
 * String enum for locator strategies
 */
enum LocatorStrategy {
    ID = 'id',
    CSS = 'css',
    XPATH = 'xpath',
    TEXT = 'text',
    CLASS_NAME = 'class-name',
    TAG_NAME = 'tag-name'
}

/**
 * String enum for test environments
 */
enum Environment {
    Development = 'dev',
    Staging = 'staging',
    Production = 'prod',
    Test = 'test'
}


// ============================================================================
// 3. HETEROGENEOUS ENUMS
// ============================================================================

/**
 * Mixing string and numeric values (not recommended)
 */
enum MixedEnum {
    No = 0,
    Yes = 'YES'
}

// Avoid heterogeneous enums in practice
// Use either all numbers or all strings


// ============================================================================
// 4. CONST ENUMS
// ============================================================================

/**
 * Const enums are inlined at compile time
 * More efficient but cannot be used as objects
 */
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// Usage - gets inlined to the actual value
function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move(Direction.Up); // Compiled as: move('UP')

/**
 * Const enum for performance-critical code
 */
const enum LogLevel {
    Debug = 0,
    Info = 1,
    Warning = 2,
    Error = 3
}

function log(level: LogLevel, message: string): void {
    if (level >= LogLevel.Warning) {
        console.log(`[${level}] ${message}`);
    }
}


// ============================================================================
// 5. ENUM MEMBERS AS TYPES
// ============================================================================

/**
 * Using specific enum values as types
 */
enum TestType {
    Unit = 'unit',
    Integration = 'integration',
    E2E = 'e2e',
    Performance = 'performance'
}

// Function accepting only specific enum values
function runE2ETest(type: TestType.E2E): void {
    console.log(`Running ${type} test`);
}

runE2ETest(TestType.E2E); // ✅ OK
// runE2ETest(TestType.Unit); // ❌ Error


// ============================================================================
// 6. REVERSE MAPPING
// ============================================================================

/**
 * Numeric enums have reverse mapping (value to name)
 * String enums do not
 */
enum ResponseCode {
    Success = 200,
    NotFound = 404
}

// Forward mapping
console.log(ResponseCode.Success); // 200

// Reverse mapping (numeric enums only)
console.log(ResponseCode[200]); // 'Success'

/**
 * String enums don't have reverse mapping
 */
enum Color {
    Red = 'RED',
    Green = 'GREEN'
}

console.log(Color.Red); // 'RED'
// console.log(Color['RED']); // ❌ undefined (no reverse mapping)


// ============================================================================
// 7. COMPUTED AND CONSTANT ENUM MEMBERS
// ============================================================================

/**
 * Enum members can be constant or computed
 */
enum FileAccess {
    // Constant members
    None = 0,
    Read = 1 << 0,        // 1
    Write = 1 << 1,       // 2
    ReadWrite = Read | Write,  // 3
    
    // Computed member
    G = '123'.length  // 3
}

/**
 * Using bit flags with enums
 */
enum Permissions {
    None = 0,
    Read = 1 << 0,      // 1
    Write = 1 << 1,     // 2
    Execute = 1 << 2,   // 4
    ReadWrite = Read | Write  // 3
}

function hasPermission(user: number, permission: Permissions): boolean {
    return (user & permission) === permission;
}


// ============================================================================
// 8. ENUMS IN INTERFACES AND TYPES
// ============================================================================

/**
 * Using enums with interfaces
 */
enum TestResultStatus {
    Passed = 'PASSED',
    Failed = 'FAILED',
    Skipped = 'SKIPPED'
}

interface TestResult {
    testName: string;
    status: TestResultStatus;
    duration: number;
    error?: string;
}

const result: TestResult = {
    testName: 'Login Test',
    status: TestResultStatus.Passed,
    duration: 5000
};

/**
 * Enum in type alias
 */
type TestConfiguration = {
    browser: BrowserType;
    environment: Environment;
    priority: Priority;
    headless: boolean;
};


// ============================================================================
// 9. PRACTICAL AUTOMATION EXAMPLES
// ============================================================================

/**
 * Test execution status
 */
enum ExecutionStatus {
    NotStarted = 'NOT_STARTED',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    Cancelled = 'CANCELLED'
}

class TestRunner {
    private status: ExecutionStatus = ExecutionStatus.NotStarted;
    
    start(): void {
        this.status = ExecutionStatus.InProgress;
    }
    
    complete(success: boolean): void {
        this.status = success ? ExecutionStatus.Completed : ExecutionStatus.Failed;
    }
    
    getStatus(): ExecutionStatus {
        return this.status;
    }
}

/**
 * Element state enum
 */
enum ElementState {
    Visible = 'visible',
    Hidden = 'hidden',
    Disabled = 'disabled',
    Enabled = 'enabled',
    Focused = 'focused'
}

function waitForElement(state: ElementState, timeout: number = 5000): void {
    console.log(`Waiting for element to be ${state} (${timeout}ms)`);
}

/**
 * Assertion types
 */
enum AssertionType {
    Equal = 'equal',
    NotEqual = 'notEqual',
    Contains = 'contains',
    GreaterThan = 'greaterThan',
    LessThan = 'lessThan',
    Exists = 'exists'
}

function assert(type: AssertionType, actual: any, expected?: any): void {
    switch (type) {
        case AssertionType.Equal:
            console.log(`Asserting ${actual} equals ${expected}`);
            break;
        case AssertionType.Contains:
            console.log(`Asserting ${actual} contains ${expected}`);
            break;
        case AssertionType.Exists:
            console.log(`Asserting ${actual} exists`);
            break;
    }
}

/**
 * Wait strategies
 */
enum WaitStrategy {
    Implicit = 'implicit',
    Explicit = 'explicit',
    Fluent = 'fluent',
    PageLoad = 'page-load'
}

class WaitManager {
    setStrategy(strategy: WaitStrategy, timeout: number): void {
        console.log(`Setting ${strategy} wait strategy with ${timeout}ms timeout`);
    }
}

/**
 * Screenshot types
 */
enum ScreenshotType {
    Full = 'full-page',
    Viewport = 'viewport',
    Element = 'element'
}

function takeScreenshot(type: ScreenshotType, fileName: string): void {
    console.log(`Taking ${type} screenshot: ${fileName}`);
}

/**
 * Report format enum
 */
enum ReportFormat {
    HTML = 'html',
    JSON = 'json',
    XML = 'xml',
    PDF = 'pdf'
}

function generateReport(format: ReportFormat, data: any): void {
    console.log(`Generating ${format} report`);
}

/**
 * Test data type
 */
enum DataSourceType {
    JSON = 'json',
    CSV = 'csv',
    Excel = 'excel',
    Database = 'database',
    API = 'api'
}

class TestDataProvider {
    loadData(source: DataSourceType, path: string): any[] {
        console.log(`Loading test data from ${source}: ${path}`);
        return [];
    }
}


// ============================================================================
// 10. ENUM UTILITIES AND PATTERNS
// ============================================================================

/**
 * Get all enum values
 */
function getEnumValues<T extends object>(enumObj: T): Array<T[keyof T]> {
    return Object.values(enumObj);
}

const allBrowsers = getEnumValues(BrowserType);
// ['chrome', 'firefox', 'safari', 'edge']

/**
 * Get all enum keys
 */
function getEnumKeys<T extends object>(enumObj: T): Array<keyof T> {
    return Object.keys(enumObj) as Array<keyof T>;
}

const browserKeys = getEnumKeys(BrowserType);
// ['Chrome', 'Firefox', 'Safari', 'Edge']

/**
 * Check if value is valid enum value
 */
function isValidEnumValue<T extends object>(
    enumObj: T,
    value: any
): value is T[keyof T] {
    return Object.values(enumObj).includes(value);
}

console.log(isValidEnumValue(BrowserType, 'chrome')); // true
console.log(isValidEnumValue(BrowserType, 'opera'));  // false

/**
 * Parse string to enum
 */
function parseToEnum<T extends object>(
    enumObj: T,
    value: string,
    defaultValue: T[keyof T]
): T[keyof T] {
    const enumValue = Object.values(enumObj).find(v => v === value);
    return enumValue !== undefined ? enumValue : defaultValue;
}

const browser2 = parseToEnum(BrowserType, 'chrome', BrowserType.Chrome);

/**
 * Enum iteration
 */
function logAllStatuses(): void {
    for (const status in TestStatus) {
        if (isNaN(Number(status))) {
            console.log(`${status}: ${TestStatus[status as keyof typeof TestStatus]}`);
        }
    }
}

/**
 * Enum with methods pattern (using namespace)
 */
enum TestPriority {
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4
}

namespace TestPriority {
    export function toString(priority: TestPriority): string {
        switch (priority) {
            case TestPriority.Low: return 'Low Priority';
            case TestPriority.Medium: return 'Medium Priority';
            case TestPriority.High: return 'High Priority';
            case TestPriority.Critical: return 'Critical Priority';
        }
    }
    
    export function fromString(value: string): TestPriority | undefined {
        const mapping: Record<string, TestPriority> = {
            'low': TestPriority.Low,
            'medium': TestPriority.Medium,
            'high': TestPriority.High,
            'critical': TestPriority.Critical
        };
        return mapping[value.toLowerCase()];
    }
}

// Usage
console.log(TestPriority.toString(TestPriority.High)); // 'High Priority'
console.log(TestPriority.fromString('critical'));      // 4


// ============================================================================
// KEY TAKEAWAYS
// ============================================================================

/**
 * ENUMS SUMMARY:
 * 
 * Types:
 * ✅ Numeric enums (default, auto-increment)
 * ✅ String enums (more debuggable)
 * ✅ Const enums (inlined, more efficient)
 * ✅ Heterogeneous enums (avoid)
 * 
 * Features:
 * ✅ Type-safe named constants
 * ✅ Reverse mapping (numeric only)
 * ✅ Computed members
 * ✅ Constant members
 * 
 * When to Use:
 * ✅ Fixed set of related constants
 * ✅ State machines
 * ✅ Configuration options
 * ✅ API response codes
 * ✅ Element states
 * 
 * Best Practices:
 * 1. Prefer string enums for debugging
 * 2. Use const enums for performance
 * 3. Use PascalCase for enum names
 * 4. Use PascalCase for enum members
 * 5. Avoid heterogeneous enums
 * 6. Document enum purpose
 * 7. Use enums over magic strings/numbers
 * 
 * Alternatives:
 * - Union types: 'value1' | 'value2'
 * - Const objects: as const
 * - Classes with static members
 * 
 * For Automation:
 * ✅ Test statuses
 * ✅ Browser types
 * ✅ Locator strategies
 * ✅ Wait strategies
 * ✅ Assertion types
 * ✅ Screenshot types
 * ✅ Report formats
 */

export {
    TestStatus,
    Priority,
    BrowserType,
    LocatorStrategy,
    Environment,
    ExecutionStatus,
    ElementState,
    AssertionType,
    WaitStrategy,
    ScreenshotType,
    ReportFormat,
    DataSourceType,
    TestRunner,
    TestPriority
};
