#Decorators
#syntax

import time

def tic_toc(func):
    def wrapper():
    #code to calculate the execution time 
        t1 = time.time()
        func()
        t2 = time.time() - t1
        print(f'{func.__name__ } took {t2}')
    return wrapper
@tic_toc
def do_this():
    time.sleep(1)
@tic_toc
def do_that():
    time.sleep(1.4)

@tic_toc
def do_something():
    time.sleep(1.5)

do_this()
do_that()
do_something()
print('Finished!')
    