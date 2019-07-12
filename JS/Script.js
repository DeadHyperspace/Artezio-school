alert("It's alive! ALIVE!!! MUhAhAHAHAHAHAhahahHAHa");


var degree=0;
var r0=document.getElementById('radio0');
var r1=document.getElementById('radio1');
var sum=0;

for(var i=10; i<=20; i++){
	sum+=i;
	degree=Math.pow(i, 2);
	console.log(degree);
	console.log(sum);
}

function buttonClick(){
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	
	if(!x1 || !x2){
		alert("Поля x1 и x2 должны быть заполнены");
	}else if(Number.isNaN(x1) || Number.isNaN(x2)){
		alert("В поля x1 и x2 должны быть введены числовые значения.");
	}else{
		var resultDiv = document.getElementById('result');
		if(document.getElementById('radio1').checked){
			var res=1;
			if(x1 < x2){
				for(;x1 <= x2;x1++){
					res*=x1;
					document.getElementById("result").innerHTML = '';
					resultDiv.append(res);
				}
			}else if(x1 > x2){
				for( ; x2 <= x1;x2++){
					res*=x2;
					document.getElementById("result").innerHTML = '';
					resultDiv.append(res);
				}
			}
		}else if(document.getElementById('radio0').checked){
			var res=0;
			if(x1 < x2){
				for(;x1 <= x2;x1++){
					res+=x1;
					document.getElementById("result").innerHTML = '';
					resultDiv.append(res);
				}
			}else if(x1 > x2){
				for( ; x2 <= x1; x2++){
					res+=x2;
					document.getElementById("result").innerHTML = '';
					resultDiv.append(res);
				}
			}			
		}else{
			alert("Выберите режим");
		}
	}
	

}

function buttonClick_clear(){
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}

function SN(){
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	point:
	for( var i = x1; i <= x2; i++){
		for(var j = 2; j < i; j++){
			if( i%j == 0 ) continue point;
		}
		console.log(i," это простое число");
	}
}
