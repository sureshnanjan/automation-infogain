import { HerokuAppOperations } from "./HerokuAppOperations";

export interface ABTestingOperations extends HerokuAppOperations {
    getTitle(): Promise<string|null>;
    getDescription(): Promise<string|null>;
    disableABTesting(): Promise<void>;
    enableABTesting(): Promise<void>;
}