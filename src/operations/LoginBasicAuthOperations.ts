import { Page } from '@playwright/test';

/**
 * Interface defining operations for the Basic Authentication Page.
 * This includes methods for  logging in and logging out
 * @interface LogincAuthPageOperations
 */
export interface LogincAuthPageOperations {
    login(username: string, password: string): Promise<Page>;
    logout(): Promise<void>;
}