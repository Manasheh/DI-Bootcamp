
import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open (dir_path + '\\file.json', 'r') as f:
    family = json.load(f)
    # print(family)
    jane_children = family['children']
    # print(jane_children)
    colors = ['blue', 'green']
    for child in jane_children:
        # print(child)
        for i , color in zip(jane_children, colors):
            i['favorite_color'] = color
print(family)

with open (dir_path + '\\file.json', 'w') as f:
    json.dump(family, f, indent= 2)





