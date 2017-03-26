import sys

cols = []
csvfile = ""
if(len(sys.argv) >= 2):
	csvfile = open(sys.argv[1])
else:
	csvfile = sys.stdin

with csvfile as lines:
	for l in lines:
		if(l != "\n"):
			print(l)
		
	

