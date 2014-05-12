var rInc=false
var gInc=false
var bInc=false

function letterIncrement(letter){
	incrementNeeded=false
	var parsedChar=parseInt(letter)
	if (!isNaN(parsedChar)){
		parsedChar++
		if (parsedChar>9){
			parsedChar="A"
		}
		return {'char':parsedChar,'increment':incrementNeeded}
	}
	else{
		if (letter!='F'){
			if (letter=='A'){
				letter='B'
			}
			else if (letter=='B'){
				letter='C'
			}
			else if (letter=='C'){
				letter='D'
			}
			else if (letter=='D'){
				letter='E'
			}
			else if (letter=='E'){
				letter='F'
			}
			return {'char':letter,'increment':incrementNeeded}
		}
		else if (letter=='F'){
			letter=0
			incrementNeeded=true
			return {'char':letter,'increment':incrementNeeded}
		}

	}
}
function hexIncrement(hexValue){
	if (hexValue[0]=='#'){
		var newValue=""
		for (var i=1; i<hexValue.length; i++){
			newValue+=hexValue[i]
		}
		hexValue=newValue
	}
	if (hexValue.length!=6){
		return undefined
	}
	var rgb=""
	splitValues=hexValue.match(/.{1,2}/g)
	for (var i=0; i<splitValues.length; i++){
		
		if (splitValues[i].length!=2){
			return undefined
		}
		var inc;
		var firstChar=splitValues[i][0]
		var char=splitValues[i][1]
		if ((i==0 && !rInc) || (i==1 && !gInc) || (i==2 && !bInc)){
			var result=letterIncrement(char)
			char = result['char']
			inc = result['increment']
		}
		else{
			char='F'
		}
		if (inc==true){
			var result2=letterIncrement(firstChar)
			var prevFirstChar=firstChar
			firstChar=result2['char']
			if (prevFirstChar=='F' && firstChar==0){
				firstChar='F'
				if (i==0){
					rInc=true
					char='F'
				}
				else if (i==1){
					gInc=true
					char='F'
				}
				else if (i==2){
					bInc=true
					char='F'
				}
			}
		}
		rgb+=firstChar
		rgb+=char
	}
	return rgb
	
};
var v = ""
var choices = "123456789ABCDEF"
for (var i=0; i<6; i++){
	v+=choices[Math.floor(Math.random()*16)]
}
prev=""
$(document).ready(function(){
	for (var i=0; i<256; i++){
		v=hexIncrement(v)
		if (prev=="FFFFFF" && v=="FFFFFF"){
			break;
		}
		$('body').append("<div style=\" display:flex; height:50px; width:auto; background-color:"+v+";\"></div>")
		console.log("<span \"style=height:100px; width:auto; color:"+v+";\"/>")
		if (v==undefined){
			console.log("")
		}
		
		prev=v
		console.log(v)
	}	
	$('body').append("POT OF GOLD")
});
