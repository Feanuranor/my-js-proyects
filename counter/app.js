let i=0;

let botones = (a) => {
    switch(a){
        case 0:
            i--;
            break;
        case 1:
            i++;
            break;
        case 2:
            i=0;
            break;
        case 3:
            i=Math.pow(i, 2);
        default:
            console.log("error");
    }

    if(i<0){
        document.getElementById("value").style.color="red";
    } else if(i>0){
        document.getElementById("value").style.color="green";
    } else {
        document.getElementById("value").style.color="black"; 
    }
    document.getElementById("value").innerHTML=i;
}
