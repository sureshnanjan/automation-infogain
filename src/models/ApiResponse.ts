/**
 * https://petstore.swagger.io/
 * 
 * @author: Manikandan Selvam
 * @interface: Creating Models for petstore APIs
 */

interface ApiResponse {
    code:number,
    type:string,
    message:string
}
/**
* @description: Display the values of the ApiResponse interface
* @param response: contains values for the interface ApiResponse
*/
function displayApiResponse(response: ApiResponse):void{
    console.log(`API Response: ${response.code}, ${response.type}, ${response.message}`);
}
//intialize values for ApiResponse
let responseParam : ApiResponse = {
    code:200, type: "OK", message: "Success"
}
//calling displayApiResponse function
displayApiResponse(responseParam);