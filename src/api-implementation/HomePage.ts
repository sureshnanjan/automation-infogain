import { HomePageBanner } from "@src/models/HomePageBanner";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";
import { HomePageOperations } from "@src/operations/HomePageOperations";

class HomePage implements HomePageOperations {
    getTitle(): Promise<string | null> {
        request.get('/tile'
    }
    getSubTitle(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    getAvailableExamples(): Promise<string[] | null> {
        throw new Error("Method not implemented.");
    }
    getBannerInfo(): Promise<HomePageBanner | null> {
        throw new Error("Method not implemented.");
    }
    getFooterText(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    gotoExample(exampleName: string): Promise<HerokuAppOperations> {
        throw new Error("Method not implemented.");
    }
    getRepoURL(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getFooterInfo(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}