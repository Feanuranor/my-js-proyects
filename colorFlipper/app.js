const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "white", "blue"];
let i=0;

/*va recorriendo el arreglo colors y cada valor lo asigna al fondo del elemento fondo*/
let cambioColor = () => {
    if(i>5){
        i=0;
    }
    console.log(i);
    document.getElementById("fondo").style.backgroundColor=colors[i];
    document.getElementById("letrero").innerHTML="Que color de fondo es? " + colors[i];
    console.log("hecho");
    i++;
}