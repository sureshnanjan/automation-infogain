interface JavaScriptAlertsOperations {
acceptJsAlert(expectedMessage: string): Promise<void>;
acceptJsConfirm(expectedMessage: string): Promise<void>;
cancelJsConfirm(expectedMessage: string): Promise<void>;
acceptJsPrompt(expectedMessage: string, inputText: string): Promise<void>;
cancelJsPrompt(expectedMessage: string): Promise<void>;
getResultText(): Promise<string | null>;
}

export type { JavaScriptAlertsOperations };