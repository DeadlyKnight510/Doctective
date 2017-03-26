import sys
from prettytable import PrettyTable
csvfile = sys.argv[1]

substitutions = [
	["STREET", "ST"],
	["BOULEVARD", "BLVD"],
	["DRIVE", "DR"],
	["CIRCLE", "CIR"],
	["SUITE", "ST"],
	["FLOOR", "FL"],
	["APARTMENT", "APT"],
	["AVENUE", "AVE"],
	["COURT", "CT"],
	["LANE", "LN"],
	["MOUNT", "MT"],
	["MOUNTAIN", "MT"],
	["NORTH", "N"],
	["NORTHEAST", "NE"],
	["NORTHWEST", "NW"],
	["PLACE", "PL"],
	["ROAD", "RD"],
	["ROOM", "RM"],
	["SOUTH", "S"],
	["SOUTHEAST", "SE"],
	["SOUTHWEST", "SW"],
	["EAST", "E"],
	["WEST", "W"],
	["FORT", "FT"],
	["WEST", "W"]
]

	
with open(csvfile) as lines:
	for l in lines:
		lt = l.split(",")
		for idx, w in enumerate(lt):
			w = w.upper()
			for old, new in substitutions:
				w = w.replace(old, new)
			lt[idx] = w	
		print(",".join(lt))
		
	

