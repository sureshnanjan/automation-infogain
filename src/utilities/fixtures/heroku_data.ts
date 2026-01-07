import {test as base} from '@playwright/test';
type myfix = {examples:string[]};

export const test = base.extend<myfix>({
    examples: async ({ page }, use) => {
         let examples =  ['A/B Testing', 'Add Remove Elements', 'Dropdows'];
         use(examples) 
         examples = [];  

    }
    
});
export { expect } from '@playwright/test';
    