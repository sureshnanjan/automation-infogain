//@interface Tag
interface Tag {
    id: number;
    name: string;
}

//Create an instance of a Tag object.
const tag: Tag = {
    id: 2342,
    name: "Small Tail"
};

//Logs the details of a tag to the console in a formatted string.
function printTag(tag: Tag): void {
    console.log(`Tag Details:
        Tag ID: ${tag.id},
        Tag Name: ${tag.name}`
    );
}

// Execute the function to display the tag information
printTag(tag);