
year = int(input("Enter a year to check is a leap year or not:"))


if (year % 400 == 0) and (year % 100 == 0):
    print(f"{year} is a leap year ")

elif (year % 4 == 0) and (year % 100 != 0):
    print(f"{year} is a leap year ")

else:
    print(f"{year} is not a leap year ")  


    # other method 

# # wrong output
# year = int(input("enter a year :"))

# temp = year//100
# if temp % 4 == 0:
#     print("it is a leap year ")
# else:
#     print("not a leap year ")    
