import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";

interface DigestAuthOperations extends HerokuAppOperations {
  navigateWithCredentials(username: string, password: string): Promise<void>;
  isAuthenticated(): Promise<boolean>;
  isUnauthorized(): Promise<boolean>;
  getPageText(): Promise<string | null>;
}
export type { DigestAuthOperations };
