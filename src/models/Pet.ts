/**
 * Pet interface representing Pet section in petstore.swagger.
 * @interface Pet
 */

interface Category{
    id:number;
    name: string;
}

/**
 * Tag interface representing a tag section. 
 * @interface Tag
 */
interface Tag {
    id:number;
    name:string;
}

/**
 * Pet interface representing a pet section.
 * @interface Pet
 */

interface Pet{
    id:number;
    category:Category;
    name:string;
    photoUrls:string[];
    tags:Tag[];
    status:Petstatus;
}

/**
 * Petstatus enum represents the possible status of a pet.
 * @enum Petstatus
 */

enum Petstatus{
    AVAILABLE = "available",
    PENDING = "pending",
    SOLD = "sold"
}

const pet:Pet={
    id:1,
    category:{id: 1, name: "Dogs"},
    name:"Jimmy",   
    photoUrls:["https://example.com/jimmy.jpg"],
    tags:[{id: 1, name: "groomed"}],
    status:Petstatus.AVAILABLE
};

function isAvailable(pet:Pet): boolean{
return pet.status ===Petstatus.AVAILABLE
}

const canBeDelivered = isAvailable(pet);
if(canBeDelivered)
    console.log("Pet is availbel and can be delivered")
else
    console.log("Pet is not availble and can not be delivered")