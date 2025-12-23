/**
 * https://petstore.swagger.io/
 * 
 * @author: Manikandan Selvam
 * @interface: Creating Models for petstore APIs
 */
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
/** @description: Display the values of the Pet interface
* @param pet: contains values for the interface Pet
*/
function displayPet(pet:Pet):void{
    console.log(`Pet details: ${pet.id},${pet.category},${pet.name},${pet.photoUrls},${pet.tags},${pet.status}`);
}
//intialize values for Pets
let petValues : Pet = {
    id:117,
    category:{
        id:1,
        name:"Dog"
    },
    name:"Max",
    photoUrls:["www.max.com","www.petstore.com"],
    tags:[{id:2, name: "milo"}],
    status:PetStatus.available
}
//calling displayPet function
displayPet(petValues);