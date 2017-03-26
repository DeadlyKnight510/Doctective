import sys
import csv

cols = 2
csvfile = open(sys.argv[1])

labelers = dict({})
with csvfile as lines:
	for l in lines:
		if(l.strip() == ""): continue
		lt = l.split(",")
		nt = []
		if(not labelers.has_key(lt[cols])):
			labelers[lt[cols]] = [(lt[0], lt[1])]
		else:
			labelers[lt[cols]].append((lt[0], lt[1]))

	
#it = iter((dict.iteritems()))	
for key, value in labelers.iteritems():
	st = "SET \"" + str(key) + "\" \""
	for idx, ob in enumerate(value):
		st += (str(ob[0]) + ",")
		st += (str(ob[1]))
		if(idx != len(value) - 1): st += ","
		else: st += "\""
	print(st)
