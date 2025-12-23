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