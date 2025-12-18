/**
 * Tag interface representing Tag section in petstore.swagger.
 * @interface tag
 */
interface Tag {
    id: number;
    name: string;

}
const groomedTag:Tag = {
    id: 1,
    name: 'groomed'
}

console.log(groomedTag);