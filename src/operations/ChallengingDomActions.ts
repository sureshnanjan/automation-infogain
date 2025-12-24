import { Page } from '@playwright/test';

export interface ChallengingDomActions {
  clickBarButton(): Promise<void>;
  clickFooButton(): Promise<void>;
  clickBazButton(): Promise<void>;

  getRowCount(): Promise<number>;
  clickEditByRowText(text: string): Promise<void>;
  clickDeleteByRowText(text: string): Promise<void>;
}
