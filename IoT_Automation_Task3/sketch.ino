// Smart IoT Temperature Automation
const int TEMP_PIN = 34;      // Analog sensor input
const int FAN_LED_PIN = 4;    // Digital alert output
const float TEMP_THRESHOLD = 30.0; // Automation trigger point

void setup() {
  Serial.begin(115200);       // Serial monitor for data logging
  pinMode(FAN_LED_PIN, OUTPUT);
}

void loop() {
  int analogValue = analogRead(TEMP_PIN);
  float celsius = (analogValue / 4095.0) * 100.0; // Temperature conversion

  // Monitor live data
  Serial.print("Current Temp: ");
  Serial.println(celsius);

  // Automation Logic: IF / ELSE decision-making
  if (celsius > TEMP_THRESHOLD) {
    digitalWrite(FAN_LED_PIN, HIGH); // Automation: Trigger Fan/Alert
  } else {
    digitalWrite(FAN_LED_PIN, LOW);  // Automation: Turn OFF
  }
  delay(1000); // Repeat the cycle
}