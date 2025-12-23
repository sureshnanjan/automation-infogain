interface ApiResponse {
    code:number,
    type:string,
    message:string
}

 
// Displaying the values of the ApiResponse interface
// response: contains values for the interface ApiResponse

function displayApiResponse(response: ApiResponse):void{
    console.log(`API Response: ${response.code}, ${response.type}, ${response.message}`);
}
//intialize values for ApiResponse
let response : ApiResponse = {
    code:200, type: "OK", message: "Success"
}
//calling display API Response function
displayApiResponse(response);