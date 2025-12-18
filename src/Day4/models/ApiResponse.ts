//@interface ApiResponse
interface ApiResponse
{
    code: number;
    type: string;
    message: string;
}

//Create an instance of a ApiResponse object.
const apiRes : ApiResponse ={
    code: 3421,
    type: "Error",
    message: "Failed with error"
}

//Logs the details of a ApiResponse to the console in a formatted string.
function printApiResponse(response: ApiResponse): void {
    console.log(`APi Response Details:
        Code: ${response.code},
        Type: ${response.type}, 
        Message: ${response.message}`
        );
    }

// Execute the function to display the ApiResponse information
printApiResponse(apiRes);