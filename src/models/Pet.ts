
/**
 * Category interface representing a category entity.
 * 
 * @interface Category
 */

interface Category{
    id:number;
    name: string;
}

/**
 * Tag interface representing a tag entity. 
 * @interface Tag
 */
interface Tag{
    id:number;
    name:string;
}

/**
 * Pet interface representing a pet entity.
 * 
 * @interface Pet
 */

interface Pet{
    id:number;
    name:string;
    category:Category;
    photoUrls:string[];
    tags:Tag[];
    status:Petstatus;
}

/**
 * Petstatus enum represents the possible statuses of a pet.
 * @enum Petstatus
 */

enum Petstatus{
    available,
    pending,
    sold
}

const dog:Pet={
    id:1,
    name:"Tommy",   
    category:{id:1, name:"Dog"},
    photoUrls:["Tommy: https://example.com/dog.jpg"],
    tags:[{id:1, name:"Tommy"}],
    status:Petstatus.available
};
console.log(dog);