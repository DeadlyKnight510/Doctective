import sys

sysin = (len(sys.argv) <= 1)

csvfile = ""

if(sysin):
	csvfile = sys.stdin
else:
	csvfile = open(sys.argv[1]) 

with csvfile as f:
	zc = ""
	zc_val = ""
	for l in f:
		curr_zc = l[:5]				
		if(curr_zc != zc):
			st = "SET \"" + zc + "\" \""
			print(st + zc_val + "\"")
			zc = curr_zc
			zc_val = ""
		#don't repeat zip code value
		zc_val += (l[6:].strip() + ":")
				
	
	
	

