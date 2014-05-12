import random

def letterIncrement(letter):
	incrementNextValuePlace=False
	try:
		c=int(letter)
		c+=1
		if c>9:
			return ('A',incrementNextValuePlace)
		else:
			return (c,incrementNextValuePlace)
	except ValueError:
		c=None
		if letter != 'F':
			if letter=='A':
				c='B'
			elif letter=='B':
				c='C'
			elif letter=='C':
				c='D'
			elif letter=='D':
				c='E'
			elif letter=='E':
				c='F'
		elif letter == 'F':
			c=0
			incrementNextValuePlace=True
		if c is not None:
			return (c,incrementNextValuePlace)
def incrementHex(hexValue):
	if type(hexValue)!=str:
		raise ValueError
	hexValue=hexValue.upper()
	if hexValue[0]=='#':
		hexValue=hexValue[1:]
	if len(hexValue)!=6:
		raise ValueError("Invalid Color Code")
	if hexValue=='FFFFFF':
		raise ValueError("Maxiumum Color code value")
	rgb=[hexValue[i:i+2] for i in range (0,len(hexValue),2)] #Split the color code every two chars, for [R,G,B]
	newRgb=[]
	for value in rgb:
		if len(value)!=2:
			raise ValueError("Invalid color code")
		char=value[1]
		fc=value[0] #First character
		c=None #Char we check first
		resultC,increment=letterIncrement(char)
		c=str(resultC)
		if (increment):
			result2,increment2=letterIncrement(fc)
			fc=str(result2)
		newRgb.append(fc+c)
	newValue=""
	for item in newRgb:
		newValue+=item
	return newValue
		

choices="0123456789ABCDEF"
hexValue=""
for i in range(6):
	hexValue+=random.choice(choices)
print hexValue
for i in range (10000):
	hexValue=incrementHex(hexValue)
	print hexValue