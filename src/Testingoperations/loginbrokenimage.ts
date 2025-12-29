interface BITesting{
    loginWithBrokenImage():Promise<void>;
    getBrokenImageheader():Promise<string|null>;
    clickBrokenImage():Promise<void>;
    getBrokenImagefooter():Promise<string|null>;
}


export type {BITesting};


