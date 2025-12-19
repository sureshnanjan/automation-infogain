import { Category } from './Category';
import { Tag } from './Tag';


export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

enum PetStatus {
  AVAILABLE = 'available',
  PENDING = 'pending',
  SOLD = 'sold',
}
function displayPet(pet:Pet):void{
    console.log(`Pet details: 
        ${pet.id},
        ${pet.category?.name},
        ${pet.name},
        ${pet.photoUrls.join(", ")},
        ${pet.tags?.map(tag => tag.name).join(", ")},
        ${pet.status}`);
}
//intialize values for Pets
let petValues : Pet = {
    id:117,
    category:{ id:1, name:"Dog"  },
    name:"tommy",
    photoUrls:["www.doggiee.com","www.petstore.com"],
    tags:[ {id:2, name: "cute puppy"} ],
    status:PetStatus.AVAILABLE
}
//calling displayPet function
displayPet(petValues);