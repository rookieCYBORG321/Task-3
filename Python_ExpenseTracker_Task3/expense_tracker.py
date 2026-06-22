import csv
import os
from datetime import datetime

FILE_NAME = "expenses.csv"

# Initialize file with headers if it doesn't exist
def initialize_file():
    if not os.path.exists(FILE_NAME):
        with open(FILE_NAME, "w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(["Description", "Amount", "Category", "Date"])

# 1. Add expense with category
def add_expense():
    desc = input("Enter description (e.g., Lunch): ")
    try:
        amount = float(input("Enter amount: "))
    except ValueError:
        print("Invalid amount. Please enter a number.")
        return
    
    category = input("Enter category (e.g., Food, Travel, Bills): ").strip().title()
    date_str = datetime.now().strftime("%Y-%m-%d")

    with open(FILE_NAME, "a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([desc, amount, category, date_str])
    
    print(f"\n✅ Added: {desc} | ${amount} | {category} | {date_str}")

# 2. View all expenses
def view_expenses():
    print("\n--- All Expenses ---")
    with open(FILE_NAME, "r") as file:
        reader = csv.reader(file)
        next(reader) # Skip header row
        found = False
        for row in reader:
            print(f"[{row[3]}] {row[0]} - ${row[1]} ({row[2]})")
            found = True
        if not found:
            print("No expenses recorded yet.")

# 3. Search expenses by category
def search_category():
    target_category = input("Enter category to search for: ").strip().title()
    print(f"\n--- Expenses in Category: {target_category} ---")
    
    total_spent = 0.0
    with open(FILE_NAME, "r") as file:
        reader = csv.reader(file)
        next(reader) # Skip header row
        found = False
        
        for row in reader:
            if row[2] == target_category:
                print(f"[{row[3]}] {row[0]} - ${row[1]}")
                total_spent += float(row[1])
                found = True
                
        if not found:
            print("No expenses found in this category.")
        else:
            print("-" * 20)
            print(f"Total spent on {target_category}: ${total_spent:.2f}")

# 4. Calculate monthly spending
def monthly_total():
    target_month = input("Enter month to search (Format YYYY-MM, e.g., 2026-06): ").strip()
    total = 0.0
    
    with open(FILE_NAME, "r") as file:
        reader = csv.reader(file)
        next(reader) # Skip header row
        
        for row in reader:
            if row[3].startswith(target_month):
                total += float(row[1])
                
    print(f"\nTotal Spending for {target_month}: ${total:.2f}")

# Main execution loop
def main():
    initialize_file()
    
    while True:
        print("\n=== EXPENSE TRACKER 2.0 ===")
        print("1. Add New Expense")
        print("2. View All Expenses")
        print("3. Search by Category")
        print("4. View Monthly Total")
        print("5. Exit")
        
        choice = input("Select an option (1-5): ")
        
        if choice == "1":
            add_expense()
        elif choice == "2":
            view_expenses()
        elif choice == "3":
            search_category()
        elif choice == "4":
            monthly_total()
        elif choice == "5":
            print("Exiting Tracker. Goodbye!")
            break
        else:
            print("Invalid selection. Please choose 1-5.")

if __name__ == "__main__":
    main()