interface DigestAuthOperations {
    verifyDigestAuthPage(): Promise<void>;
    getHeadingText(): Promise<string>;
    isSuccessMessageVisible(): Promise<boolean>;
    navigateWithCredentials(username: string, password: string, host: string): Promise<void>;
    isUnauthorized(): Promise<boolean>;
}
 export type {DigestAuthOperations };