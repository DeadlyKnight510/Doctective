import sys

sysin = (len(sys.argv) <= 1)

csvfile = ""

if(sysin):
	csvfile = sys.stdin
else:
	csvfile = open(sys.argv[1]) 

with csvfile as f:
	for l in f:
		lt = l.split(",")
		s = ""
		for i in range(len(lt)):
			lt[i].strip().replace("\"", "")
		for idx, obj in enumerate(lt):
			obj = obj.replace("-","")
			#check if zip code
			if ((len(obj) == 10 or len(obj) == 5) and obj.isdigit() and obj.count(".") == 0):
				
				lt[idx] = obj[:5]
				s += obj[:5]
			if(idx == 7):
				break
		if(s != ""):
			print(s + "," + ",".join(lt).strip())
				
				
	
	

