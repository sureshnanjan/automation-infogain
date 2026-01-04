export interface DisappearingElementsOperations {
    openDisappearingElements(): Promise<void>;
    clickDisappearingElementsLink(): Promise<void>;
    verifyDisappearingElementsPageTitle(): Promise<void>;
    verifyMandatoryLinksVisible(): Promise<void>;
    refreshPage(): Promise<void>;
    verifyMenuCount(expectedCount: number): Promise<void>;

}

