/**
 * Category interface representing a category entity.
 * 
 * @interface Category
 */

interface Category{
    id:number;
    name: string;
}

const category1 :Category={
    id:101,
    name:"Pets"
};
console.log(category1);