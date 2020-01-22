function f1(){
    console.log("function with no params and no return");

}
function f2(userName){
    console.log("function with params and no return");
    console.log("received" + userName);
}
function f3(userName){
    console.log("function with params and return");
    console.log("received" + userName);
    return "Hello" + userName;
    
}
f1();
f2("samadarshini");
console.log(f3("samadarshini"));