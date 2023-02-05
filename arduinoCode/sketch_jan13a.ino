#include <ESP8266WiFi.h>
#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>

#include<SoftwareSerial.h>


int dioda = D1;
const int senzorPozara = A0;
#define pirPin D4

#define FIREBASE_HOST "iot-connectedhouse-ib200001-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "XcETyyWkegVXpk5E31B1ZzK0LBB7Cy95OUK2aEBh"
#define WIFI_SSID "mojatv_full_9997"                
#define WIFI_PASSWORD "123456123456" 
void setup() {
pinMode(dioda, OUTPUT);
pinMode(pirPin, INPUT);
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
  delay(30000);
}
void loop() {
     bool vrijednost=Firebase.getBool("svjetlo");
     int ocitanjeAnalogno=analogRead(senzorPozara);
      int motionDetected = digitalRead(pirPin);
  Serial.println("_______SENZOR____________");
  Serial.println(motionDetected);
  Serial.println("_________KRAJ____________");
  if (motionDetected == HIGH) {
    Serial.println("Motion detected");
  }
  else {
    Serial.println("No motion");
  }
     Serial.println(ocitanjeAnalogno);
     if(ocitanjeAnalogno<1000){
      Serial.println("Pozar detektovn");
      Firebase.setBool("pozar", true);
     }
     else{
      Firebase.setBool("pozar", false);
     }
     if(vrijednost==true){
       digitalWrite(dioda, HIGH);
     }
     else{
      digitalWrite(dioda, LOW);
     }
           
     delay(1500);
}
