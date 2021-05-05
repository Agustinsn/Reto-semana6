let input= document.getElementById("input");
let btn=document.getElementById("btn");
let datos= [];

btn.addEventListener('click',function(){
     
     let inputval=input.value
     datos1= datos.push(inputval);
     console.log(datos);
     input.value= "";
});