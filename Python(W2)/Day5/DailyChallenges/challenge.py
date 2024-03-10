
matrix_string = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

print(matrix_string.split('\n'))

# matrix 2D list
# [[], [], []]
COLUMN = 3
ROWS = 8
rows = matrix_string.split('\n')

matrix = [list(row) for row in rows]
transposed_matrix = list(zip(*matrix))

transposed_message = [''.join(char) for char in transposed_matrix]
dec_message = ''
final_str = dec_message.join(transposed_message)
print(final_str)

decrypted_message = ''
for char in final_str:
    if char.isalpha():
        decrypted_message += char
    else: 
        decrypted_message += ' '
print(decrypted_message)
decrypted_message =' '.join(decrypted_message.split())
print(decrypted_message)
