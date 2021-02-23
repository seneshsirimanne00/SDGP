import re
class SignUp:



    def __init__(self):
        """
        self.database = database
        self.userName = userName
        self.email = email
        self.password = password
        """
        return

    def signUpAccount(self):
        return


    #Validates and checks if the password matches the required criteria.
    # A password requires 8 plus characters and at least one number.
    def passwordValidate(self , password):

        if(len(password)>8 and any(elem.isdigit()) for elem in password):
            passwordStatus = "true"

        else:
            passwordStatus = "false"

    # Validates and checks if the email is in the correct format(example@xmail.com)
    def emailvalidate(self):
        text = "venurail.com"
        pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$'
        if re.fullmatch(pattern, text):
            print("Valid email")
        else:
            print("Filtered email")

        return

    def username(self):
        return





