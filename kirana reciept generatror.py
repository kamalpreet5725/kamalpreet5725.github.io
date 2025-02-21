# # 'list = []

# # item_price = int(input("Enter the items:"))

# # for i in item_price(12):
# #     total = list.append + item_price

# #     if total == 12:
# #         print("your total is ")


sum = 0 
while(True):
    userinput = input("Enter the item price or q to quit:\n")

    if(userinput!='q'):
        sum = sum + int(userinput)
        print(f"order total till is {sum}")

    else:
        print(f"your bill total is {sum} ")
        print("Thanks for shopping with us ")
        break


# Kirana store bill generator


sum = 0

