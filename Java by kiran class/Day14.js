var a = 45;

console.log(a);

// let arr =[1,5,9,6,4]
// console.log(arr)

// let e=["Mango","Pinaple","Orange"]

// console.log(e)

// document.getElementById("frt").innerHTML=arr;

let c =0;

let images =["image1.png" , "image2.png" , "image3.png"]

function changeimage(){
    c=c+1 % images.length;

    document.getElementById("imgchange").innerHTML = "<img src='"+images[c]+"'>"
    
}


