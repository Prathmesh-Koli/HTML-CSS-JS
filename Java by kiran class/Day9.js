a="hello.js"

console.log(a)

function validfun(name,age){

    console.log(" name : " +name+",  age : "+age)
}
validfun("Prathmesh", 23)

for(i=1;i<=5;i++){

    console.log("I am simple for loop")

}

 fruits = ["apple","banana","orange","pineapple","watermelor"]

 for(var frt in fruits){                    // when we used in then it means it will took index number

      let f = document.getElementById("idfruit") //Select the parent tag ---- in this case <ol>

      let l = document.createElement("li")    //  Create child tag   --- in this case <li>

      l.textContent = fruits[frt];  // provid econtent to child tag

      f.appendChild(l)  // provide perent child relation

    console.log(fruits[frt])

    
 }
 
 cities=["MUMBAI","PUNE","SATARA","SOLAPURE"]
 
for(var city of cities){          // follow only values


    let f = document.getElementById("idcity")

    let l = document.createElement("li")

    l.textContent = city;

    f.appendChild(l)

  console.log(fruits[frt])

  console.log(city)                       //directly variable call //ECMAscript 6 feature
}





