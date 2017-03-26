import sys

if(len(sys.argv) >= 2):
	csvfile = open(sys.argv[1])
else:
	csvfile = sys.stdin

num = 0
firstrun = True
with csvfile as lines:
	for l in lines:
		lt = l.split(",")
		if firstrun:
			num = len(lt)
		if(len(lt) != num):
			print(l)
		
	

