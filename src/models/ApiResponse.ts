export interface ApiResponse {
    code:number,
    type:string,
    message:string
}
function displayApiResponse(response: ApiResponse):void{
    console.log(`API Response:
         ${response.code},
          ${response.type},
           ${response.message}`);
}
//intialize values for ApiResponse
let responseParam : ApiResponse = {
    code:200, type: "OK", message: "Success"
}
//calling displayApiResponse function
displayApiResponse(responseParam);