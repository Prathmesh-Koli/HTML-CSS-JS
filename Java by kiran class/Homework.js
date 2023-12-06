a = 45

console.log(a)

function dom(){

  var h = document.getElementById("idHead");

  if(h.innerText == "HomeWork on Day 13 - HTML - CSS - JS"){
   
    h.innerText = h.innerText=  "Learning Dom Manipulation";

}   else{

    h.innerText = h.innerText = "HomeWork on Day 13 - HTML - CSS - JS" ;
}

  h.style.fontFamily ='monospace';


     // 2.  add shadow effect
     h.style.textShadow='5px 5x 10px rgba(0, 0, 0, 0.3)';

     //add 5 more style
     h.style.backgroundColor='lightblue';
     h.style.color="back";
     h.style.border="2px solid navy";
     h.style.borderRadius="10px";
     h.style.padding="10px";

}