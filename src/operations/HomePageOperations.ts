import { HomePageBanner } from "@src/models/HomePageBanner";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
// Implement 
/**
 * Operations that can be performed on the Home Page of the Heroku App
 */
interface HomePageOperations  extends HerokuAppOperations{
    /**
     * 
     */
    getTitle(): Promise<string|null>;
    getSubTitle(): Promise<string|null>;
    getAvailableExamples(): Promise<string[]|null>;
    getBannerInfo(): Promise<HomePageBanner|null>;
    getFooterText(): Promise<string|null>;
    /**
     * 
     * @param exampleName 
     * @Example 
     * ```ts
     * const returnPage = (homePage.gotoExample("A/B Testing") as unknown) as ABTestingOperations;
     * ```  
     */
    gotoExample(exampleName:string): Promise<HerokuAppOperations>;

   
    
    setPageLocale(locale:string):Promise<void>; 
    // Data Structures to Hold State
}
 export type { HomePageOperations };

 interface HerokuExample{
    name:string;
    url:string;
 }
