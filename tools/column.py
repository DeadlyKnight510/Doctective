import sys
from prettytable import PrettyTable

sysin = (len(sys.argv) <= 2)

column = 0
csvfile = ""
if(sysin):
	column = int(sys.argv[1])
	csvfile = sys.stdin
else:
	column = int(sys.argv[2])
	csvfile = open(sys.argv[1]) 
types = dict({})
with csvfile as f:
	for l in f:
		lt = l.split(",")
		r = lt[column]
		if(not types.has_key(r)):
			types[r] = 1
		else:
			types[r] = types[r] + 1
t = PrettyTable(['Column', 'Occurence'])
for key, value in types.iteritems():
	t.add_row([key, value])
print(t)
	

