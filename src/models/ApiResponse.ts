/**
 * Represents a standard API response structure
 */
interface ApiResponse{
    code:number,        // HTTP response code
    type: string;       // Response Status and type
    message: string;    // response message  
}