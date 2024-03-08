
board = ['','','','','','','','','']

def display_board():
    print("\n")
    print(f"{board[0]}   |  {board[1]}  |  {board[2]}")
    print("------------")
    print(f"{board[3]}   |  {board[4]}  |  {board[5]}")
    print("------------")
    print(f"{board[6]}   | {board[7]}   |  {board[8]}")
    print("\n")

def get_input(current_player):
    if current_player == "X":
        playerInput = int(input('Menashe: '))
        board[playerInput - 1] = 'X'
    elif current_player == "O":
        playerInput = int(input("Bot: "))
        board[playerInput - 1] = 'O'

def check_winner():
    if board[0] == board[1] == board[2] != '':
        print(f"{board[0]} is the winner!")
        return True
    elif board[3] == board[4] == board[5] != '':
        print(f'{board[3]} is the winner!')
        return True
    elif board[6] == board[7] == board[8] != '':
        print(f'{board[6]} is the winner!')
        return True
    elif board[0] == board[4] == board[8] != '':
        print(f'{board[0]} is the winner!')
        return True
    elif board[6] == board[4] == board[2] != '':
        print(f'{board[6]} is the winner!')
        return True
    elif board[0] == board[3] == board[6] != '':
        print(f'{board[0]} is the winner!')
        return True
    elif board[1] == board[4] == board[7] != '':
        print(f'{board[1]} is the winner!')
        return True
    elif board[2] == board[5] == board[8] != '':
        print(f'{board[2]} is the winner!')
        return True
    else:
        return False

def play():
    while '' in board:
        players = ['X', 'O']
        display_board()

        for player in players:
            get_input(player)
            display_board()
            if check_winner():
                return

            if '' not in board:
                print("It's a tie!")
                return

play()
