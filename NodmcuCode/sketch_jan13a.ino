#include <ESP8266WiFi.h>
#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>
#include<Servo.h>
#include<SoftwareSerial.h>

Servo prozor;
int dioda = D1;
const int senzorPozara = A0;
#define senzorPokreta D0

#define FIREBASE_HOST "iot-connectedhouse-ib200001-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "XcETyyWkegVXpk5E31B1ZzK0LBB7Cy95OUK2aEBh"
#define WIFI_SSID "Redmi Note 9 Pro"
#define WIFI_PASSWORD "husohuso12"
void setup() {
  pinMode(dioda, OUTPUT);
  pinMode(senzorPokreta, INPUT);
  prozor.attach(D3);
  // Debug console
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WIFI_SSID);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  if (Firebase.failed()) {
    Serial.print(Firebase.error());
  } else {
    Serial.println("Firebase Connected");
    Serial.print(Firebase.error());
  }
}
void loop() {
  bool kodKuce = Firebase.getBool("aktivno");
  Serial.println("Kod kuce: ");
  Serial.println(kodKuce);
  if (kodKuce == 1) {
    int motionDetected = digitalRead(senzorPokreta);
    if (motionDetected == 0) {
      Firebase.setBool("detektovano", true);
    }
    Serial.println("_______SENZOR____________");
    Serial.println(motionDetected);
    Serial.println("_________KRAJ____________");
  }
  else {
    Firebase.setBool("detektovano", false);
  }
  bool vrijednost = Firebase.getBool("svjetlo");
  int ocitanjeAnalogno = analogRead(senzorPozara);
  int motionDetected = digitalRead(senzorPokreta);
  int brojStepeni = Firebase.getInt("prozor");
  Serial.println("STEPNI");
  Serial.println(brojStepeni);
  prozor.write(brojStepeni);
  Serial.println(ocitanjeAnalogno);
  if (ocitanjeAnalogno < 1000) {
    Serial.println("Pozar detektovn");
    Firebase.setBool("pozar", true);
  }
  else {
    Firebase.setBool("pozar", false);
  }
  if (vrijednost == true) {
    digitalWrite(dioda, HIGH);
  }
  else {
    digitalWrite(dioda, LOW);
  }

  delay(1500);
}
