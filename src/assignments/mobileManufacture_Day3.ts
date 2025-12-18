//declair the function
function getMobileManufature(manufacture : string){
let mobile: string[]

if (manufacture === "Samsung"){
    mobile =["galaxy","note16","sam-Galaxy"]
} else if(manufacture === "Oppo"){
    mobile =["reno6","A5Pro","F21"]
    
}else{
    mobile =["mobile not available of this brand"]
}
return mobile;

}
const result = getMobileManufature("Nokia");
console.log("Available models: "+result);
