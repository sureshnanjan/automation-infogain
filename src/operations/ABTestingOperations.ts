export interface ABTestingOperations {
    getTitle(): Promise<string|null>;
    getDescription(): Promise<string|null>;
    disableABTesting(): Promise<void>;
    enableABTesting(): Promise<void>;
}