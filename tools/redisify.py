import sys
# name of program
sys.argv[0]
# filename
fname = sys.argv[1]
# col
col = int(sys.argv[2])

firstline = True

with open(fname) as file:
    for line in file:
        if not firstline:
            info = line.split(",")
            output = "SET " + info[col] + " \""
            for item in info:
                output += item.strip('"') + ","
            output = output[0:-2]
            output += "\""
            print(output)
        firstline = False
