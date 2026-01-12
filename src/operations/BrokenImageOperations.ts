interface BrokenImageOperations {
    getTitle(): Promise<string|null>;
    //getDescription(): Promise<string|null>; 
    getImageiDetails(imagenumber:number): Promise<{url:string;statusCode:number}[]>;  
    //getImage2Details(): Promise<{url:string;statusCode:number}[]>;
    //getImage3Details(): Promise<{url:string;statusCode:number}[]>;

}