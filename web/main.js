function reverseString(string){
	var rev=""
	for (var i=string.length-1; i>=0; i--){
		rev+=string[i]
	}
	return rev
}

function hexIncrement(hexValue){
	hexValue=hexValue.toUpperCase()
	if (hexValue=='FFFFFF'){
		return 'FFFFFF'
	}
	var reversedValue=reverseString(hexValue)
	var tempValue=""
	for (var i=0; i<reversedValue.length; i++){
		var char = reversedValue[i]
		var parsedChar=parseInt(char)
		if (!isNaN(parsedChar)){
			parsedChar++
			if (parsedChar>9){
				parsedChar="A"
			}
			tempValue+=parsedChar
			for (var j=i+1; j<reversedValue.length; j++){
				tempValue+=reversedValue[j]
			}
			break;
		}
		else{
			if (char!='F'){
				if (char=='A'){
					char='B'
				}
				else if (char=='B'){
					char='C'
				}
				else if (char=='C'){
					char='D'
				}
				else if (char=='D'){
					char='E'
				}
				else if (char=='E'){
					char='F'
				}
				tempValue+=char
				for (var j=i+1; j<reversedValue.length; j++){
					tempValue+=reversedValue[j]
				}
				break;
			}
			else if (char=='F'){
				char=0
				tempValue+=char
			}
		}
	}
	var finalValue=reverseString(tempValue)
	return finalValue
}
var v="F8301E"
$(document).ready(function(){
	for (var i=0; i<1000; i++){
		v=hexIncrement(v)
		$('body').append("<span style=\" display:inline-block; height:100px; width:auto; background-color:"+v+";\">YOOYOY</span><br />")
		console.log("<span \"style=height:100px; width:auto; color:"+v+";\"/>")
		console.log(v)
	}	
});
