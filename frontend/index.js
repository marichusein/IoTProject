function Svjetlo() {
    var dugme = document.getElementById("svjetlo");
    if (dugme.innerText === "Ugasi svjetlo") {
        dugme.innerText = "Upali svjetlo";
    }
    else {
        dugme.innerText = "Ugasi svjetlo";
    }
    // var test=document.getElementById("prozor");
    // alert(test.value);

}
var zakljucano=true;
function Zakljucaj(){
    var test=document.getElementById("prozor");
    if(zakljucano==true){
        
    }
    if(test.value==0){
        zakljucano=!zakljucano;
    }
    else{
        alert("Prvo zatvorite prozor");
    }
}