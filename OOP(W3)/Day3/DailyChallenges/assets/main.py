import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified.")

    def area(self):
        return math.pi * (self.radius ** 2)

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __repr__(self):
        return f"Circle(radius={self.radius})"


circle1 = Circle(radius=3)
circle2 = Circle(diameter=6)

print(circle1)  
print(circle1.area()) 

print(circle1 + circle2) 

print(circle1 < circle2)  
print(circle1 == circle2)  

circles = [Circle(radius=5), Circle(radius=2), Circle(radius=4)]
sorted_circles = sorted(circles)
print(sorted_circles)  
