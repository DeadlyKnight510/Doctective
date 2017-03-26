import sys

cols = []
if(len(sys.argv) >= 3):
	csvfile = open(sys.argv[1])
	cols = sys.argv[2].split(",")
else:
	cols = sys.argv[1].split(",")
	csvfile = sys.stdin

for idx, c in enumerate(cols):
	cols[idx] = int(c)

with csvfile as lines:
	for l in lines:
		lt = l.split(",")
		#print(str(len(lt)))
		nt = []
		for idx, w in enumerate(lt):
			if(cols.count(idx) == 0):
				nt.append(w.strip("\""))
	
		print(",".join(nt).strip())
		
	

