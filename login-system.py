users = {
    "mariam":"1234",
    "ahmed": "5678",
    "sara": "abcd"
}
print("===login system===")
username = input("Enter your username: ")
password = input("Enter your password: ")
if username in users and users[username] == password:
    print("welcome " + username + "!")
elif username in users:
    print("wrong password.")
else:
    print("username not found.")    
