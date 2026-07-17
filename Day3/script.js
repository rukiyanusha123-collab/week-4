function login(callback){
    console.log("Login");
    setTimeout(()=>{
        console.log("Login success");
        callback();
    },3000);
}
login(function(){
    console.log("Burger Selected");
    console.log("payment Done");
});
