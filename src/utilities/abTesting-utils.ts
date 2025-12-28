import { Page } from "@playwright/test";
import { ABTestingOperations } from "@src/operations/ABTestingOperations";


export function getABTestingApp(page:Page): ABTestingOperations {
    return new (require('@src/web-implementation/ABTestingPage').ABTestingPage)(page);
}
