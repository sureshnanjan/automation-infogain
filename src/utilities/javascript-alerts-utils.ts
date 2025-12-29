import { Page } from '@playwright/test';
import { JavaScriptAlerts } from '@src/web-implementation/JavaScriptAlertsPage';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

export function getJavaScriptAlerts(page: Page): JavaScriptAlertsOperations {
    return new JavaScriptAlerts(page);
}
