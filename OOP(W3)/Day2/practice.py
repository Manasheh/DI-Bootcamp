# class Animal():
#     def __init__(self, type, number_legs, sound) -> None:
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f'i am an animal, and i love saying {self.sound}')

# class Dog(Animal):
#     def fetch_ball(self):
#         print('i love fetching ball')

# browny = Animal('dog', 4, 'woof')
# print(browny.type, browny.number_legs, browny.sound)
# blacky = Dog('blacky', 2, 'meow')
# print(f'sound of cat {blacky.sound}')


# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)


# class Animal():
#     def __init__(self, type, number_legs, sound) -> None:
#         self.type = type
#         self.number_leg = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f'I am an animal i like to make {self.sound}')

# class Dog(Animal):
#     def fetch_ball(self, color):
#         self.color = color
#         print(f'I am a dog, i love to fetch balls and my color is {color}')

#     def make_sound(self):
#         print('i am a dogggg!! woooffff')

# rex = Dog('rex', 4, 'woooff')
# rex.make_sound()
# rex.fetch_ball('red')


#use super()
# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound
# class Dog(Animal):
#     def __init__(self, type, number_legs, sound, fetch_ball):
#         super().__init__(type, number_legs, sound)
#         self.fetch_ball = fetch_ball

# rex = Dog('dog', 4, 'woof', True)
# print(rex.type)
# print('this dog has', rex.number_legs, 'legs')

# class MyClass(object):
#     def func(self):
#         print('im being called from the parent class')

# class ChildClass(MyClass):
#     def func(self):
#         print('im actuall called from the child class')
#         print('but...')
#         super(ChildClass, self).func()
# my_instance2 = ChildClass()
# my_instance2.func()

#Exercise 

# class Door:
#     def __init__(self, is_opened = True):
#         self.is_opened = is_opened
    
#     def open_door(self):
#         self.is_opened = True
#         print('The door is open')
#     def close_door(self):
#         self.is_opened = False
#         print('The door is closed')
    
# class BlockedDoor(Door):
#     def open_door(self):
#         raise Exception('Open door cannot be open')


#     def close_door(self):
#         raise Exception('Closed door cannot be close')

        

# door1 = Door(False)
# door1.close_door()

# door2 = BlockedDoor()
# door2.close_door()


# class Alien():
#     def __init__(self, name, planet):
#         self.name = name
#         self.planet = planet
#     def fly(self):
#         print(self.name, 'is flying!')
#     def sleep(self):
#         print("Aliens don't sleep")
# class Animal():
#     def __init__(self, name) -> None:
#         self.name = name
    
#     def sleep(self):
#         print('zzzzZZZZZ')
# class Dog(Animal):
#     def bark(self):
#         print("{} bark, WAF!".format(self.name))
  
# class AlienDog(Alien, Dog):
#     def bark(self):
#         print("{} barked, )ul10u10u (that's how aliens dogs bark..)".format(self.name))


# # my_normal_dog = Dog('Roger')
# # my_normal_dog.sleep()

# # my_normal_dog.bark()
# my_alien_dog = AlienDog("Rex", "Neptune")
# print(my_alien_dog.planet)
# my_alien_dog.fly()
# my_alien_dog.sleep()


# class A():

#     def dothis(self):
#         print("doing this in A")


# class B(A):
#     def dothis(self):
#         print('doing this from B')



# class C():
#     def dothis(self):
#         print("doing this in C")


# class D(B, C):
#     pass

# d_instance = D()
# d_instance.dothis()

# class Book():
#     def __init__(self, title, author, publication_date, price):
#         self.title = title
#         self.author = author
#         self.publication_date = publication_date
#         self.price = price
#     def present(self):
#         print(f"Title : {self.title}")
# class Fiction(Book):
#     def __init__(self, title, author, publication_date, price, is_awesome):
#         super().__init__(title, author, publication_date, price)
#         self.is_awesome = is_awesome
#         if self.is_awesome:
#             self.bored = False
#             print('Woow this is an awesome book')
#         else:
#             self.bored = True
#             print('I am very bored')

# foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
# foundation.present()
# print(foundation.price)
# print(foundation.bored)
# boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
# print(boring_book.bored)




# def age():
#     try:
#         user_age = int(input('How old are you ? \n'))   
#         print('correct format')
#     except ValueError:
#         print('not correct format')
#         user_age = 0
#     print(f'next year you will be {user_age+1}')

# age()

# while True:
#     user_input = input("Enter a number: ")
#     if user_input.isdigit():
#         break
#     else:
#         print("Invalid input! Please enter a valid number.")

# Given a list of numbers, write a function that returns the sum of every number. BUT you 
# can have a malicious string inside the list.

# my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
# def sum_in_list(bunch):
#     total = 0
#     for item in bunch:
#         try:
#             total += int(item)
#         except ValueError:
#             print('Not a number')
#     return total
# print(sum_in_list(my_list))

valid_flag = True
while valid_flag:
    user_age = input('Enter Your Age ')
    try:
        user_age = int(user_age)
        print(f'your age next year will be {user_age + 1}')
    except:
        print('Wrong age')
    else: 
        valid_flag = False
