def get_grade(score):
    if score >= 90:
        return "A - Excellent"
    elif score >=80:
        return "B - Good"
    elif score >=70:
        return "C - Average"
    elif score >=60:
        return "D - Below Average"
    else:
        return "F - Fail"
    
students = []
print("student management system")

while True:
    print("1. add student")
    print("2. view students")
    print("3. show average score")
    print("4. exit")
    Input = input("Enter your choice: ")
    if Input == "1":
        name = input("Enter student name: ")
        score = float(input("Enter student score: "))
        grade = get_grade(score)
        students.append({"name": name, "score": score, "grade": grade})
        print("Student added successfully.")

    elif Input == "2":
        if students:
            for student in students:
                print(student["name"], "-", student["score"], "-", student["grade"])
        else:
            print("No students added yet.")

    elif Input == "3":
        if students:
            total = 0
            for student in students:
                total = total + student["score"]
            average = total / len(students)
            print("Average score:", average)
        else:
            print("No students added yet.")


    elif Input =="4":
        print("Exiting the program.")
        break    



