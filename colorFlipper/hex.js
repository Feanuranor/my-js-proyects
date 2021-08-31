const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/*va creando en la var color el codigo hex, basandose en el array de letras y numeros
que estan en hex, el ciclo va armando el codigo letra a letra*/
let cambioColor = () => {
    let color="#";
    let num=0;
    for(let i=0; i<6; i++){
        
        num = Math.floor((Math.random() * 15));
        color+=String(hex[num]);
          
    }
    console.log(color);

    document.getElementById("fondo").style.backgroundColor=color;
    document.getElementById("letrero").innerHTML="Que color de fondo es? " + color;
}