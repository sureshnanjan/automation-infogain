//interface Tag
interface Tag
{
    id: number;
    name: string;
}

//enum for Pet Status
enum PetStatus
{
    available="available",
    pending="pending",
    sold="sold"
}

//interface Pet
interface Pet
{
    id: number;
    category: {
        id: number;
        name: string;
    }
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: PetStatus;
}

//Create an instance of a Pet object.
const pet: Pet =
{
    id: 33422,
    category: {
        id: 202,
        name: "Cats"
    },
    name: "Simba",
    photoUrls: ["https://petstore.swagger.io/photo1.jpg", "https://petstore.swagger.io/photo2.jpg"],
    tags: [
        {
            id: 101,
            name: "Energetic"
        },
        {
            id: 102,
            name: "playful"
        }
    ],
    status: PetStatus.available
}
//Logs the details of a pet to the console in a formatted string.
    function printPetInfo(pet: Pet): void   {
    console.log(`Pet Details:
    ID: ${pet.id}
    Category: ${pet.category.name} and ID is: ${pet.category.id}
    Name: ${pet.name}
    Photo URLs: ${pet.photoUrls.join(", ")}
    Tags: ${pet.tags.map(tag => tag.name)}
    Status: ${pet.status}`);
}

// Execute the function to display the pet information
printPetInfo(pet);