import sys
from prettytable import PrettyTable
column = int(sys.argv[2])
csvfile = sys.argv[1]
	

lines = []
with open(csvfile) as f:
    lines = f.read().splitlines()

types = dict({})
for l in lines:
	idx = 0
	for i in range(column):
	 	idx = l.index(",", idx) + 1
	substr = l[idx:l.index(",", idx)]
	if(not types.has_key(substr)):
		types[substr] = 1
	else:
		types[substr] = types[substr] + 1
t = PrettyTable(['Column', 'Occurence'])
for key, value in types.iteritems():
	t.add_row([key, value])
print(t)
	

