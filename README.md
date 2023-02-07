# IoTProject
Design and development of IoT projects - my project // FIT@UNMO

A project made for a college course. The goal of the course was to familiarize students with basic concepts in the field of IoT projects. The goal of this project is to create some semblance of a "smart house" or rather a connected house with the help of readily available sensors.
With the help of sensors and the executive side, the following functionalities were achieved: turning on and off the light, detecting movement if the house is empty, detecting fire, locking and opening windows from 0 to 180 degrees.
Initially, the project was supposed to have a much larger scope, however, due to the lack of voltage (the node works on 3V), the maximum was extracted from its voltage.
This project is highly upgradeable due to its simple design. In addition, due to other faculty obligations, the control side was made as a small desktop application, and the goal would be to make a mobile application, which would make more sense for this purpose (or at least a responsive web application).

Summary of the project:

•	Equipment: NodeMCU ESP8266, LED Diode, IR flame sensor, IR motion sensor, Servo Motor

•	Control side: HTML, CSS, JavaScript

•	Executive side: C/C++ in ArduinoIDE with ESP Library (v 2.7.4.)

•	All connected to Firebase

