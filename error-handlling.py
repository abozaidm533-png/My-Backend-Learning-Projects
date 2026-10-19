try:
    number = int(input("enter your number: "))
    result = 10 / number
    print("the number you entered is: ", number)
    print("the result is: ", result)
except ValueError:
    print ("itis not a number")
except ZeroDivisionError:
    print("you cannot divide by zero")
finally:
    print("program finished")    
