simpleGreetProvider=function(){
    return "Hello";
}
timelyGreetProvider=function(){
    greet="";
    hour=(new Date()).getHours();
    if(hour>=3 && hour<=11)greet="Good morning";
    else if(hour<=15)greet="Good Afternoon";
    else greet="Good Evening";
    return greet;
}
function greetUser(userName,greetProvider){
    return greetProvider()+""+userName;
}

console.log(greetUser("Sama",simpleGreetProvider));
console.log(greetUser("Sama",timelyGreetProvider));
console.log(greetUser("Sama",function(){return "sasrikal";}));
console.log(greetUser("Vicky",()=>"Namastey"));
console.log(greetUser("Sama",()=>"Vanakkam"));
console.log(greetUser("Sama",()=>"Namaskar"));
(function(){
    console.log("has to execute her right away..!");

})();