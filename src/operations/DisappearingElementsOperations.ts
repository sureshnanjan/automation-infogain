/**
 * Interface for Disappearing Elements Page
 * This defines the methods that must be implemented
 * by the DisappearingElementsPage class
 */
export interface DisappearingElementsOperations  {

    /**
   * Reloads the current page
   */
  refreshPage(): Promise<void>;

  /**
   * Returns all menu names available on the page
   */
  getMenuTexts(): Promise<string[]>;

    /**
   * Checks whether a given menu name is present or not
   * @param menuName Menu name to be checked
   */
  isMenuPresent(menuName: string): Promise<boolean>;

   /**
   * Returns the main page header text
   */
  getHeaderText(): Promise<string>;

  /**
   * Returns the description text shown below the header
   */
  getDescriptionText(): Promise<string>;
}



