import { Category } from "./Category";
import { Tag } from "./Tag";

interface Pet {
    id:number,
    category:Category,
    name:string,
    photoUrls:string[],
    tags:Tag[],
    status:PetStatus
}
//enum values created for passing to the interface
enum PetStatus{
     available, pending, sold
}

// Displaying the values of the Pet interface
// pet: contains values for the interface Pet

function displayPet(pet:Pet):void{
    console.log(`Pet details: ${pet.id},${pet.category.name},${pet.name},${pet.photoUrls.join(",")},${pet.tags.map(tag => tag.name).join(", ")},${pet.status[pet.status]}`);
}
//intialize values for Pets
let petValues : Pet = {
    id:101,
    category:{
        id:1,
        name:"Dog"
    },
    name:"Puppy",
    photoUrls:["www.puppy.com","www.petstore.com"],
    tags:[{id:1, name: "Julie"}],
    status:PetStatus.available
}
//calling displayPet function
displayPet(petValues);