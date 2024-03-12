#Built in decorators
#Static

# @staticmethod

# class MyClass:

#     @staticmethod  # use with including self
#     def add(a, b):
#         return a + b


#classmethod

# class MyClass:
#     counter = 0

#     @classmethod
#     def add(cls, a):
#         cls.counter += a
#         return cls.counter
    
# MyClass().add(5)
# print(MyClass.counter)


class Circle:
    def __init__(self, radius, diameter):
        self.radius = radius
        self.diameter = diameter
    
    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius * 2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter / 2, diameter = diameter)

#circle_obj = Circle.from_radius(5)/ Circle.from_diameter(5)
circle_obj = Circle.from_radius(5)
print(circle_obj.diameter)
circle_obj = Circle.from_diameter(10)
print(circle_obj.radius)