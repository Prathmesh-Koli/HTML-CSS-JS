// a=32;

// while(a<=40){
//    a+=6
// }
// console.log(a)

// function validate(){

//     u=document.getElementById("user").value;
//     p=document.getElementById("pass").value;

//     if(u=='jbk'  && p =='123') {

//         window.location.href= "Login.html"
        
//     } else{
//         document.getElementById("errormessege").innerHTML="Invalid username";
//     }
   

// }

// validate()


function validate(){
    u = document.getElementById("Uname").value
    
    p = document.getElementById("passwd").value

    if(u=="Prathmesh" && p==12345678){

        window.location.href='Login.html'

    } else{
        document.querySelector("#err").innerText='Invalid Username & Password'
    }
}

validate();