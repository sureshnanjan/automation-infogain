import { Page } from '@playwright/test';
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";

interface FramesPageOperations extends HerokuAppOperations {
    getTitle(): Promise<string | null>;
    getAvailableExamples(): Promise<string[] | null>;
    getFooterText(): Promise<string | null>;
    gotoExample(exampleName: string): Promise<HerokuAppOperations>;
}

export type { FramesPageOperations };