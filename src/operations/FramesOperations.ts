import { Page } from '@playwright/test';
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";

interface FramesPageOperations extends HerokuAppOperations {
    getTitle(): Promise<string | null>;
    getAvailableExamples(): Promise<string[] | null>;
    getNestedFramesLink(): Promise<void>;
    getIFrameLink(): Promise<void>;
    getFrameBodyTextByName(frameName: string): Promise<string | null>;
    getTopLeft(): Promise<string | null>;
    getTopMiddle(): Promise<string | null>;
    getTopRight(): Promise<string | null>;
    getBottom(): Promise<string | null>;
}
    

export type { FramesPageOperations };