interface JavaScriptAlertsOperations {
    clickJsAlert(): Promise<void>;
    clickJsConfirm(): Promise<void>;
    clickJsPrompt(): Promise<void>;
    getResultText(): Promise<string | null>;
}

export type { JavaScriptAlertsOperations };