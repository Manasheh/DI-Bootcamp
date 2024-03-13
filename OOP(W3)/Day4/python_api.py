#Api

import requests
import json
response = requests.get('https://api.chucknorris.io/jokes/random')
# dir_path = os.path.dirname(os.path.realpath(__file__))

#200 means success
#300 means redirect
#400 means error / not available
#404 means not found
print(response.text)

# jokes = []
# for i in range(10):
#     response = requests.get('https://api.chucknorris.io/jokes/random')
#     data = response.json()['value']
#     jokes.append(data)

# print(jokes)

