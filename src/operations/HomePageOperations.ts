import { HomePageBanner } from "@src/models/HomePageBanner";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
interface HomePageOperations  extends HerokuAppOperations{
    getTitle(): Promise<string|null>;
    getSubTitle(): Promise<string|null>;
    getAvailableExamples(): Promise<string[]|null>;
    getBannerInfo(): Promise<HomePageBanner|null>;
    getFooterText(): Promise<string|null>;
    gotoExample(exampleName:string): Promise<HerokuAppOperations>;
}
 export type { HomePageOperations };
