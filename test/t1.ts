function f1() :never{
    throw new Error("This function never returns");
}   


let var1: never;var1 = f1();

let var2: number|string|never|boolean = 10;