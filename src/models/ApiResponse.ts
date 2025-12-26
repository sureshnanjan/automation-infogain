/**
 * ApiResponse interface representing a ApiResponse Model.
 * @interface ApiResponse
 */
interface ApiResponse {
    code: number;
    type: string;
    message: string;
}

const successResponse: ApiResponse = {
    code: 200,
    type: "success",
    message: "Record created successfully"
};

console.log(successResponse);