import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
export function getHerokuAppUrl(): string {
    return 'https://the-internet.herokuapp.com/';
}

export function getHerokuApp(page:Page): HomePageOperations {
    return new (require('@src/web-implementation/HomePage').HomePage)(page);
}

export function getDisappearingElementsPage(page:Page): DisappearingElementsOperations {
    return new (require('@src/web-implementation/DisappearingElementsPage').DisappearingElements)(page);
}