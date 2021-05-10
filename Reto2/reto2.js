let general=document.getElementById("general");
let input= document.getElementById("input");
let btn=document.getElementById("btn");
let tabla=document.getElementById("tabla");

btn.addEventListener("click",function(){
    console.log(input.value)
    var newRow =tabla.insertRow();
    tabla.appendChild(newRow)
    newRow.innerHTML =`
        <td>${input.value}</td>
        <td> <input type="checkbox" id="check"></td>`
    
    input.value="";
});







