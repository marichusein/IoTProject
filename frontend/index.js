const firebaseConfig = {
    apiKey: "AIzaSyCL1YiihosH7HdGBgiA7suzHaK5IATjvYA",
    authDomain: "iot-connectedhouse-ib200001.firebaseapp.com",
    databaseURL: "https://iot-connectedhouse-ib200001-default-rtdb.firebaseio.com",
    projectId: "iot-connectedhouse-ib200001",
    storageBucket: "iot-connectedhouse-ib200001.appspot.com",
    messagingSenderId: "794512223865",
    appId: "1:794512223865:web:716d4c79f2675cba65eea8",
    measurementId: "G-YYFMEPKELX"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firebaseRef = firebase.database().ref("svjetlo");
var firebaseRef1 = firebase.database().ref("prozor");
var firebaseRef2 = firebase.database().ref("pozar");
var kodKuceAktivno = firebase.database().ref("aktivno");
var detektovan = firebase.database().ref("detektovano");



const database1 = firebase.database();
setInterval(function () {
    const ref = database1.ref("pozar");
    ref.once("value", function (snapshot) {
        console.log(snapshot.val());
        if (snapshot.val() == true) {
            alert("Požar detektovan");
            var pozarF = document.getElementById("pokret");
            pozarF.innerText = "Goriii";
            firebaseRef2.set(false);
        }
    });
}, 2000);
setInterval(function () {
    const ref = database1.ref("detektovano");
    ref.once("value", function (snapshot) {
        if (snapshot.val() == true) {
            alert("Neko je u kući");
            detektovan.set(false);
        }
    });
}, 2000);
function Svjetlo() {
    var dugme = document.getElementById("svjetlo");
    if (dugme.innerText === "Ugasi svjetlo") {
        dugme.innerText = "Upali svjetlo";
        firebaseRef.set(false);


    }
    else {
        dugme.innerText = "Ugasi svjetlo";
        firebaseRef.set(true);



    }
    // var test=document.getElementById("prozor");
    // alert(test.value);

}
var zakljucano = true;
var slider = document.getElementById("prozor");
slider.disabled = true;
slider.value = 0;
function Zakljucaj() {
    var prozor = document.getElementById("prozor");
    var dugme = document.getElementById("prozorZakljucaj");
    if (zakljucano == true) {

        slider.disabled = true;
        prozorZakljucaj.innerText = "Otključaj prozor";
    }
    else {
        slider.disabled = false;
        prozorZakljucaj.innerText = "Zaključaj prozor";


    }
    if (prozor.value == 0) {
        zakljucano = !zakljucano;
    }
    else {
        alert("Prvo zatvorite prozor");
    }
}
function NagibProzora() {


    firebaseRef1.set(parseInt(slider.value));

}
function KodKuce() {
    kodKuceAktivno.set(false);
}
function NismoKodKuce() {
    kodKuceAktivno.set(true);
}