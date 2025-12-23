interface HomePageOperations {
    getTitle(): Promise<string|null>;
    getSubTitle(): Promise<string|null>;
    getAvailableExamples(): Promise<string[]|null>;
}
 export type { HomePageOperations };
