# Expense Tracker 2.0 with Categories & Filtering

## Project Description
An enhanced Command Line Interface (CLI) application built to handle dynamic personal financial budgeting and data management. [cite_start]This version builds on top of structural file-handling pipelines to provide categorical data classification and clean reporting modules[cite: 156, 157].

[cite_start]The system writes records directly into flat CSV files using structured rows[cite: 156, 180]. [cite_start]It features optimized searching filters that extract records asynchronously based on string matching and integrates specialized aggregation loops that compute both category-specific metrics and overall monthly totals[cite: 157, 161, 166, 167].

---

## Author & Developer Profile
* **Lead Engineer:** Parth Jani
* **Role:** Python Programming Intern
* **Organization:** Maincrafts Technology
* **Project Context:** Internship Task 3 - Advanced CLI Tooling

---

## Functional Features Implemented

### 1. Categorized Data Capture
* [cite_start]Prompts users for structured parameters: description, numeric amount, and custom category group types (e.g., Food, Travel, Utilities)[cite: 159, 164, 179].
* [cite_start]Uses localized timestamp formatting objects to log dates matching standard execution times automatically[cite: 182].

### 2. Category Search & Specific Metric Aggregations
* [cite_start]Scans sequential database entries to cleanly isolate and print matching strings[cite: 165, 189].
* [cite_start]Uses running loops to process value arrays, yielding distinct group-specific total costs[cite: 166].

### 3. Chronological Monthly Accounting
* [cite_start]Filters the complete dataset using string prefix boundaries (Format: `YYYY-MM`)[cite: 199].
* [cite_start]Safely casts parsed row data structures into real floats to compute full monthly financial totals[cite: 195, 200].

---

## Directory Architecture
```text
Python_ExpenseTracker_Task3/
├── expense_tracker.py
└── expenses.csv