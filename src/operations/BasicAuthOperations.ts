import { HerokuAppOperations } from "./HerokuAppOperations";

/**
 * Interface for basic authentication operations.
 * Defines the contract that authentication handlers must implement.
 */
export interface BasicAuthenticationOps extends HerokuAppOperations {
    /**
     * Authenticates a user with the provided credentials.
     * @param username - The user's username or email
     * @param password - The user's password
     * @returns A promise that resolves when authentication is complete
     * @throws Error if authentication fails
     */
    doLogin(username: string, password: string): Promise<void>;

    /**
     * Retrieves the current authentication status message.
     * @returns A promise that resolves to a status message string
     * (e.g., "Login successful", "Invalid credentials")
     */
    getStatusMessage(): Promise<string>;

    /**
     * Retrieves the page title or heading.
     * @returns A promise that resolves to the title string
     */
    getTitle(): Promise<string>;
}

