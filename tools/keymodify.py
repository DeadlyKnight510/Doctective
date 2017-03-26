import sys

sysin = (len(sys.argv) <= 1)

csvfile = ""

if(sysin):
	csvfile = sys.stdin
else:
	csvfile = open(sys.argv[1]) 

with csvfile as f:
	for l in f:
		keystart = 4
		keyend = l.index("\"", keystart + 1, len(l))
		key = l[keystart:keyend].strip("\"")
		terms = key.split(",")
		zipcode = terms[-1]
		terms[-1] = zipcode[:5]
		for i in range(len(terms)):
			terms[i].strip("\"")
		print(l[:keystart] + "\"" + ",".join(terms) + l[keyend:])
	

