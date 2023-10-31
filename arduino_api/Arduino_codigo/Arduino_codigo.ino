#include <DHT.h>

#define DHTPIN A1
#define LM35PIN A0

DHT dht(DHTPIN, DHT11);

void setup(){
pinMode(DHTPIN, INPUT);
Serial.begin(9600);
dht.begin();
}
void loop(){
  
float lm35_temperatura = analogRead(LM35PIN);
lm35_temperatura = lm35_temperatura * 0.00488;
lm35_temperatura = lm35_temperatura * 100;
float dht11_umidade = dht.readHumidity();

Serial.print(dht11_umidade);
Serial.print(",");
Serial.println(lm35_temperatura);

delay(1000);
}