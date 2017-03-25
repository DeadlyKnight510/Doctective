import sys
csvfile = sys.argv[1]
with open(csvfile) as f:
	head = f.readline().strip()
	words = head.split(",")   
	for idx, w in enumerate(words):
		print(str(idx) + " " + w)
