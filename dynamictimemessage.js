setInterval(message,1000);
var c;
var hrs;
var min;
var sec;
var ampm;
var a;
function message(){
	var a=document.getElementById('output');
	var b=new Date();

	var hrs=b.getHours();
	var min=b.getMinutes();
	var sec=b.getSeconds();
	var ampm;

	if(hrs<=12){
		ampm='AM';
	}
	else{
		ampm='PM';
	}
	if(hrs>12){
		hrs=hrs-12;
	}
	if(hrs==0){
		hrs=12;
	}
	if(hrs<10){
		hrs='0'+hrs;
	}
	if(min<10){
		min='0'+min;
	}
	if(sec<10){
		sec='0'+sec;
	}
	 c=hrs+':'+min+':'+sec+' '+ampm ;
}

// if(c>=5 && c<12){
// 		console.log('Good Morning!');
// 		document.write('Good Morning!');
// 	}
// 	else if(c>=12 && c<5){	
// 		console.log('Good Afternoon!');
// 		document.write('Good Afternoon!');
// 	}
// 	else if(c>=5 && c<5){
// 		console.log('Good Evening!');
// 		document.write('Good Evening!');
// }

if(hrs>=5 && min==0 && sec==0 && ampm=='AM'){
		console.log('Good Morning!');
		a.innerHTML='Good Morning!';
	}
	else if(hrs>=12 && min==0 && sec==0 && ampm=='PM'){	
		console.log('Good Afternoon!');
		a.innerHTML='Good Afternoon!';
	}
	else if(hrs>=5 && min==0 && sec==0 && ampm=='PM'){
		console.log('Good Evening!');
		a.innerHTML='Good Evening!';
	}