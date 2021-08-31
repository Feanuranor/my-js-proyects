
let cambioColor = () => {
    let r, g, b, color;

    r=Math.floor((Math.random() * 255));
    g=Math.floor((Math.random() * 255));
    b=Math.floor((Math.random() * 255));
    console.log("rgb("+ r +", "+ g + ", " + b + ")");

    document.getElementById("fondo").style.backgroundColor="rgb("+ r +", "+ g + ", " + b + ")";
    document.getElementById("letrero").innerHTML="Que color de fondo es? rgb("+ r +", "+ g + ", " + b + ")";
}