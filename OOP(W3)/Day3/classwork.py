# # #Encapsulaton



# class AtmAccount:

#     available_number = 500
#     def __init__(self, holder):  # Corrected method name here
#                 self._balance = 100.0  
#                 self.__holder = holder  # This becomes a "private" variable
#                 self.__account_number = AtmAccount.available_number
#                 AtmAccount.available_number += 1
#     @property
#     def balance(self):
#             return self.balance
#     @property
#     def holder(self):
#             return self.__holder

#     def deposit(self, amount):
#             self.deposit += amount

            

# account1 = AtmAccount('John Doe')
# account2 = AtmAccount('John ')
# account3 = AtmAccount(' Doe')
# print(account1.balance)
# print(account1.deposit(200))
# print(account1._AtmAccount__account_number)
# print(account2._AtmAccount__account_number)
# print(account3._AtmAccount__account_number)
# print(account1._balance)           # This will print 100.0 correctly
# # print(account1.__holder)         # This line will cause an error if uncommented
# print(account1._AtmAccount__holder) # Correct way to access __holder due to name mangling


# #exercise


# # class Circle:
# #     color = "red"

# #     def __init__(self, diameter):
# #         self.diameter = diameter

# #     def grow(self, factor=2):
# #         self.diameter = self.diameter * factor

# #     def get_color(self):
# #        return Circle.color
    
# # circle1 = Circle(2)
# # print(circle1.color)
# # print(Circle.color)
# # print(circle1.get_color())
# # circle1.grow(3)
# # print(circle1.diameter)


class User():
    def sign_in(self):
        print('logged in')

class Wizard(User):
    def __init__(self, name, power):
        self.name = name
        self.power = power





    



class Archer(User):
    pass

wizard1 = Wizard()
print(wizard1.sign_in())