/**
 * Represents a ApiResponse in the system.
 *
 * Provides basic information such as code, type and message
 *
 * @interface ApiResponse
 */

interface ApiResponse{
    code :number;
    type : string;
    message : string;
}

const result: ApiResponse = {
    code: 200,
    type: "success",
    message: "Operation completed successfully"
};

console.log(result);

