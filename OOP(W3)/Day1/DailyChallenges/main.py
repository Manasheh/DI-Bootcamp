class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    def add_animal(self, animal, count = 1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
    
    def dict_listing(self):
        print(f"{self.name}'s farm \n") 
        for animal, count in self.animals.items():
            print(f"{animal} : {count} \n")
        print(f"\n   E-I-E-I-O")
   
    def get_animal_types(self):
        print(f"{self.name}'s farm")
        for animal, count in sorted(self.animals.items()):
            print(f"{animal} : {count} \n")
        print(f"\n   E-I-E-O-U")
       


my_farm = Farm('McDonald')
my_farm.add_animal('cow', 5)
my_farm.add_animal('sheep')
my_farm.add_animal('sheep')
my_farm.add_animal('goat', 12)
my_farm.dict_listing()
my_farm.get_animal_types()



