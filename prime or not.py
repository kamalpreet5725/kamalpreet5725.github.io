# 1 to sivaye kise hor nall divide nhi hunde 

num = int(input("Enter a number here"))

if num == 1:
    print(f"{num} is not a prime number ") 

if num>1:
    for i in range(2,num):
        if num % i == 0:
            print(f"{num}  is not a prime number ") 
            break
    else:
     print(f"{num} is a prime number ") 



num = int(input("Enter a number here"))

if num >= 1:
    print(f"{num} is not a prime number ") 

    for i in range(2,num):
        if num % i == 0:
            print(f"{num}  is not a prime number ") 
            break
    else:
     print(f"{num} is a prime number ") 
            

# using math module  


import math

num = int(input("Enter a number here: "))

if num <= 1:  # Handles 0 and 1
    print(f"{num} is not a prime number")
else:
    for i in range(2, int(math.sqrt(num)) + 1):  # Check up to √num
        if num % i == 0:
            print(f"{num} is not a prime number")  
            break
    else:
        print(f"{num} is a prime number")
