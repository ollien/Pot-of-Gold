import random

def incrementHex(hexValue):
	if type(hexValue)!=str:
		raise ValueError
	hexValue=hexValue.upper()
	if hexValue=='FFFFFF':
		raise ValueError("Maxiumum Color code value")
	reversedValue=''.join(reversed(hexValue)) #Reverse the hex value
	tempValue=""
	for char,i in zip(reversedValue,range(len(reversedValue))):
		try:
			c=int(char)
			c+=1
			if c<10:
				c=str(c)
			else:
				c='A'
			tempValue+=c+reversedValue[(i+1):]
			break
			
		except ValueError:
			if char != 'F':
				if char=='A':
					c='B'
				elif char=='B':
					c='C'
				elif char=='C':
					c='D'
				elif char=='D':
					c='E'
				elif char=='E':
					c='F'
				tempValue+=c+reversedValue[(i+1):]
				break
			elif char=='F':
				c=0
				tempValue+=str(c)
	finalValue=''.join(reversed(tempValue))
	return finalValue

choices="0123456789ABCDEF"
hexValue=""
for i in range(6):
	hexValue+=random.choice(choices)
for i in range (10000):
	hexValue=incrementHex(hexValue)
	print hexValue
			