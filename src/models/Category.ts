/**
 * Category interface representing a category Model.
 * @interface Category
 */

interface Category {
    id: number;
    name: string;
}

const category: Category = {
    id: 100,
    name: "Cats"
};
console.log(category);