def hello():
    return 'Hello, World!'

def prime(n):
    if n < 2:
        return 'Invalid input'
    for i in range(2, n):
        if n % i == 0:
            return 'Not prime'
    return 'Prime'