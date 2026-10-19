def get_grade(score):
    if score >= 90:
        return "A - Excellent"
    elif score >= 80:
        return "B - Very Good"
    elif score >= 70:
        return "C - Good"
    elif score >= 60:
        return "D - Pass"
    else:
        return "F - Fail"

print("=== Student Grade System ===")
name = input("Enter student name: ")
score = float(input("Enter student score: "))
grade = get_grade(score)
print("Student:", name)
print("Score:", score)
print("Grade:", grade)
