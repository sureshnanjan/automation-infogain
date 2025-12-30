export interface DisappearingElementsOperations {
    openDisappearingElements(): Promise<void>;
    clickDisappearingElementsLink(): Promise<void>;
    verifyDisappearingElementsPageTitle(): Promise<void>;
    buttonsBeforeRefresh(): Promise<number>;
    buttonsAfterRefresh(): Promise<number>;
    refreshPage(): Promise<void>;

}

