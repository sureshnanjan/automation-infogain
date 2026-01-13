interface ABTestingOperations {
    accessABTestingVariant(): Promise<void>;
    getABTestingHeader(): Promise<string|null>;
    getABTestingBodyContent(): Promise<string|null>;
    getABTestingFooterContent(): Promise<string|null>;
    enableABTesting(variantId: string): Promise<void>;
    disableABTesting(variantId: string): Promise<void>;

}
 export type { ABTestingOperations };