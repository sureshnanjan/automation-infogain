import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
export function getHerokuAppUrl(): string {
    return 'https://the-internet.herokuapp.com/';
}

<<<<<<< HEAD
export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // How call a async factory method from here?

    return  (require('@src/web-implementation/HomePage').HomePage).create(page);
    //app.navigate();
    //return app;
=======
export function getHerokuApp(page:Page): HomePageOperations {
    return new (require('@src/web-implementation/HomePage').HomePage)(page);
}

export function getDisappearingElementsPage(page:Page): DisappearingElementsOperations {
    return new (require('@src/web-implementation/DisappearingElementsPage').DisappearingElements)(page);
>>>>>>> 53849d8 (Added Day4 TypeScript assignments and Disappearing Elements POM tests)
}