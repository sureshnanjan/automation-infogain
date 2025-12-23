//interface Category
interface Category
{
    id: number;
    name: string;
}

//Create an instance of a Category object.
const category: Category = {
    id: 12321,
    name: "Birds"
}

//Logs the details of a category to the console in a formatted string.
function printCategory(category:Category):void{
    console.log(`Category Details:
        Category ID: ${category.id},
        Category Name: ${category.name}`
    );
}

// Execute the function to display the category information
printCategory(category);