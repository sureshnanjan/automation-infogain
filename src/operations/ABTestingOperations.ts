interface ABTestingOperations {
    accessABTestingVariant(): Promise<void>;
    getABTestingHeader(): Promise<string|null>;
    getABTestingBodyContent(): Promise<string|null>;
    getABTestingFooterContent(): Promise<string|null>;

}
 export type { ABTestingOperations };