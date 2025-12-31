import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { BasicAuth } from "@src/web-implementation/BasicAuth";   
import { Page } from "@playwright/test";
import { BasicAuthPageOperations } from "@src/operations/BasicAuthPageOperations";
export function getHerokuAppUrl(): string {
    // Env Files
    return 'https://the-internet.herokuapp.com/';
}

export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // How call a async factory method from here?

    return  HomePage.create(page);
    //app.navigate();
    //return app;
}
export async function getBasicAuthPage(page:Page): Promise<BasicAuthPageOperations> {

    return  BasicAuth.create(page);
}