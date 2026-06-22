# Smart IoT Temperature Automation System

## Project Description
An embedded system simulation designed to establish real-world automated environmental control loops. The system integrates an analog temperature reading workflow with conditional automation pathways to modify output indicators automatically without manual human intervention.

---

## Author & Developer Profile
* **Lead Engineer:** Parth Jani
* **Role:** Embedded Systems & IoT Intern
* **Organization:** Maincrafts Technology
* **Project Context:** Internship Task 3 - Smart IoT Automation

---

## Technical System Operations (Working Explanation)
1. **Data Acquisition (Sensors):** The system continuously samples ambient thermal variables using an NTC Thermistor hardware module routed through the ESP32's 12-bit Analog-to-Digital Converter (ADC) profile on GPIO 36 (VP).
2. **Algorithmic Evaluation (Logic):** Microcontroller firmware evaluates continuous inputs using dedicated conditional runtime logic (`IF/ELSE` statements) against a fixed safety operating limit set to 30°C.
3. **Automated Actuation (Feedback):** If conditions cross safety limits, the system triggers active state power adjustments to GPIO 4, waking a physical visual alert indicator (LED) representing system fans. If boundaries fall back below threshold zones, the line closes down into standby power configurations.
4. **Telemetry Logging (Monitoring):** Live sensor performance indicators write continuously to the active Serial transmission pipeline for hardware debugging and system health diagnostics.