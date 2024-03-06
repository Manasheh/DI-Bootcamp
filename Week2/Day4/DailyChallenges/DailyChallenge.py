string_list= [
    '7ii',
    'Tsx',
    'h%?',
    'i #',
    'sM ',
    '$a ',
    '#t%',
    '^r!'
]
matrix = [list(x) for x in string_list]

# print(matrix)
matrix_t = list(zip(*matrix))
matrix_t_strings = [''.join(x) for x in matrix_t]
full_string = ''.join(matrix_t_strings)
full_string_dcoded = ''.join([x for x in full_string if x.lower() in 'abcdefghijklmnopqrstuvwxyz '])
print(full_string_dcoded)
