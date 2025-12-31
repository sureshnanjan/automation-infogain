import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";   
import { Page } from "@playwright/test";
import { Logger } from "./Logger";
import { BasicAuthPageOperations } from "@src/operations/BasicAuthPageOperations";
import { BasicAuth } from "@src/web-implementation/BasicAuth";
export function getHerokuAppUrl(): string {
    // Env Files
    // URL Factory - testing , stshing, production, customer , 
    return 'https://the-internet.herokuapp.com/';
}

export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // App Factory
    // How call a async factory method from here?
    const myLogger:Logger = Logger.createInstance()
    return  HomePage.create(page);
    //app.navigate();
    //return app;
}
export async function getBasicAuthPage(page:Page): Promise<BasicAuthPageOperations> {

    return  BasicAuth.create(page);
}