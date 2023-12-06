

function validateEmail(){

   let e = document.querySelector(".email").value

   var emailRegex = /^\S+@\S+\.\S+/.test(e);

   if(!emailRegex){
    document.querySelector(".msg").innerHTML="Wrong Email";

   } else{
    document.querySelector(".msg").innerHTML="Log in succsefull";
   }
}

function change(){
   h=document.getElementById('head');

    if(h.innerText=="Day15-HTML-CSS-JS"){

        h.innerText = h.innerText="Learning Dom Manipulation";

    }else{

        h.innerText = h.innerText ="Day15-HTML-CSS-JS";

    }

}