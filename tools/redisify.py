import sys
# name of program
sys.argv[0]

# file
fname = ""
# col
col = []

if(len(sys.argv) <= 2):
	fname = sys.stdin
	col = sys.argv[1].split(",")
else:
	fname = open(sys.argv[1])
	col = sys.argv[2].split(",")

for idx, c in enumerate(col):
	col[idx] = int(c)

firstline = True
with fname as file:
    for line in file:
        if not firstline:
            info = line.split(",")
            if(len(info) < max(col)):
                continue
            cols = []
            for c in col:	
                cols.append(info[c].strip('\"').strip())
            fullkey = True
            for i in cols: 
                if i.strip() == "": fullkey = False
            if(not fullkey): continue
            output = "SET \"" + (",".join(cols)).strip() + "\" \""
            for item in info:
                output += item.strip('"').strip() + ","
            output = output[0:-2].strip()
            output += "\""
            print(output.strip())
        firstline = False
