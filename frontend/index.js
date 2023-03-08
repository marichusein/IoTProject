const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firebaseRef = firebase.database().ref("svjetlo");
var firebaseRef1 = firebase.database().ref("prozor");
var firebaseRef2 = firebase.database().ref("pozar");
var kodKuceAktivno = firebase.database().ref("aktivno");
var detektovan = firebase.database().ref("detektovano");
var rampica = firebase.database().ref("rampa");



const database1 = firebase.database();
setInterval(function () {
    const ref = database1.ref("pozar");
    ref.once("value", function (snapshot) {
        console.log(snapshot.val());
        if (snapshot.val() == true) {
            alert("Požar detektovan");
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
var prozor = document.getElementById("prozor");

var dugme = document.getElementById("prozorZakljucaj");
function Zakljucaj() {

    if (zakljucano == true) {

        slider.disabled = true;
        prozorZakljucaj.innerText = "Otključaj prozor";
    }
    else {
        slider.disabled = false;
        prozorZakljucaj.innerText = "Zaključaj prozor";


    }
    if (zakljucano == false) {
        if (prozor.value > 0) {

            alert("Zatvorite prozor kako biste ga zaključali");
        }
        else {
            zakljucano = true;
        }
    }
    else {

        zakljucano = false;
    }
}
function NagibProzora() {


    firebaseRef1.set(parseInt(slider.value));

}
function Rampa(){
    rampica.set(1);
}
function KodKuce() {
    kodKuceAktivno.set(false);
}
function NismoKodKuce() {
    kodKuceAktivno.set(true);
}