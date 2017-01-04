var t_initial, ti, r_initial, ri, t_final, r_final;
var count;
function loaded(){
var table = document.getElementById("environment");
    var header = table.createTBody();
    
var r;   
var i;
for (r=0;r<15;r++){
var row = header.insertRow(0);
for (i = 0; i < 25; i++) {
     var cell = row.insertCell(0);
}}
obstruct();
target(0);
target(1);
count = easy_path(r_initial,t_initial,r_final,t_final); 

}


function obstruct(){
for (r=9;r<13;r++){
for (i = 2; i < 6; i++) {
     var o=document.getElementById("environment").rows[r].cells[i];
     o.style.backgroundImage="url('lib/texture/stone2.jpg')";
     o.style.border="none";
     o.style.backgroundColor="rgb(192, 185, 184)";
}}
for (r=9;r<13;r++){
for (i = 9; i < 13; i++) {
     var o=document.getElementById("environment").rows[r].cells[i];
     o.style.backgroundImage="url('lib/texture/stone2.jpg')";
     o.style.border="none";
     o.style.backgroundColor="rgb(192, 185, 184)";
}}
for (r=9;r<13;r++){
for (i = 16; i < 20; i++) {
     var o=document.getElementById("environment").rows[r].cells[i];
     o.style.backgroundImage="url('lib/texture/stone2.jpg')";
      o.style.border="none";
     o.style.backgroundColor="rgb(192, 185, 184)";
}}
for (r=3;r<7;r++){
for (i = 20; i < 24; i++) {
     var o=document.getElementById("environment").rows[r].cells[i];
     o.style.backgroundImage="url('lib/texture/stone2.jpg')";
     o.style.border="none";
     o.style.backgroundColor="rgb(192, 185, 184)";
}}
for (r=2;r<4;r++){
for (i = 2; i < 16; i++) {
     var o=document.getElementById("environment").rows[r].cells[i];
     o.style.backgroundImage="url('lib/texture/stone2.jpg')";
     o.style.border="none";
     o.style.backgroundColor="rgb(192, 185, 184)";
}}
}
function target(s){
var guess = true;
var guessr;// random row 
var guessc;// random cell
var f = Math.floor((Math.random() * 8));
var j = 0;//for keeping track of no. of times the while iterates
guessr = Math.floor((Math.random() * 14));
while(guess == true){
guessc = Math.floor((Math.random() * 24));
j = j+1;
if(guessr==2 && (guessc==2||guessc==3||guessc==4||guessc==5||guessc==6||guessc==7||guessc==8||guessc==9||guessc==10||guessc==11||guessc==12||guessc==13||guessc==14||guessc==15)){}
else if(guessr==3 && (guessc==2||guessc==3||guessc==4||guessc==5||guessc==6||guessc==7||guessc==8||guessc==9||guessc==10||guessc==11||guessc==12||guessc==13||guessc==14||guessc==15||guessc==20||guessc==21||guessc==22||guessc==23)){}
else if((guessr==4||guessr==5||guessr==6 )&& (guessc==20||guessc==21||guessc==22||guessc==23)){}
else if ((guessr==9||guessr==10||guessr==11||guessr==12) && (guessc==2||guessc==3||guessc==4||guessc==5||guessc==9||guessc==10||guessc==11||guessc==12||guessc==16||guessc==17||guessc==18||guessc==19)){}
else if(guessr == r_initial && guessc == t_initial){}
else{guess = false;}
if(j == 5){
switch (f) {
    case 0:
        guessc = 0;
        break;
    case 1:
        guessc = 1;
        break;
    case 2:
        guessc = 24;
        break;
    case 3:
        guessr = 0;
        break;
    case 4:
        guessr = 1;
        break;
    case 5:
        guessr = 7;
        break;
    case 6:
        guessr = 8; 
        break;
    case 7:
        guessr = 13;
        break;
    case 8:
        guessr = 14; 
} 
guess = false;}}
if(s==0){
t_initial = guessc;//start point cell
r_initial = guessr;// start point row
ti = guessc;
ri = guessr;
var k = document.getElementById("environment").rows[guessr].cells[guessc];
k.style.backgroundColor = "yellow";}else{
if(guessr == r_initial && guessc == t_initial){
location.reload();
}
t_final = guessc;//target cell
r_final = guessr;//target row
var k = document.getElementById("environment").rows[guessr].cells[guessc];
k.style.backgroundColor = "#13EEF1";}
}
var count_re = true;
function execute(){

document.getElementById("ebutton").disabled = true;
/*
0 - North 
1 - East 
2 - South 
3 - West
*/
var n = 0;
var time = 2;
var direction = 0 ;
var obstruction = false;
var q;
var code = document.getElementById("e").value;
var s = code.split(";");
var y;
var t = s.length - 1; 

for(y=0;y<=t;y++){
if(s[y].search("walk")!= -1){
var steps = s[y].split("(");
var last_split = steps[1].split(")");
var number = parseInt(last_split[0]);
n = n + number;
switch(direction){
case 0:
	for(q=1;q<= number;q++){
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animation = "comp 2s " + time.toString() +"s";
	r_initial = r_initial - 1;
	time = time + 1;}
	else{
	
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
	if(count_re == false){
	element.classList.remove("cla");  
	void element.offsetWidth;
 	element.classList.add("cla");}
	if(q == 1){
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "#FF5733";}
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	r_initial = r_initial - 1;
 	time = time + 1;}
	} 
	break;
case 1:
	for(q=1;q<= number;q++){
	var element = document.getElementById("environment").rows[r_initial].cells[t_initial+1];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	document.getElementById("environment").rows[r_initial].cells[t_initial+1].style.animation = "comp 2s " + time.toString() +"s";
	t_initial = t_initial + 1;
	time = time +1;}
	else{
	
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
	if(count_re == false){
	element.classList.remove("cla");  
	void element.offsetWidth;
 	element.classList.add("cla");}
	
	if(q == 1){
	document.getElementById("environment").rows[r_initial ].cells[t_initial].style.background = "#FF5733";}
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	t_initial = t_initial + 1;
 	time = time + 1;}
	} 
	break;
case 2:
	for(q=1;q<= number;q++){
	var element = document.getElementById("environment").rows[r_initial + 1].cells[t_initial];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	document.getElementById("environment").rows[r_initial + 1].cells[t_initial].style.animation = "comp 2s " + time.toString() +"s";
	r_initial = r_initial + 1;
	time = time +1;}
	else{
	
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
	if(count_re == false){
	element.classList.remove("cla");  
	void element.offsetWidth;
 	element.classList.add("cla");}
	if(q == 1){
	document.getElementById("environment").rows[r_initial ].cells[t_initial].style.background = "#FF5733";}
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	r_initial = r_initial + 1;
 	time = time + 1;}
	} 
	break;;
case 3:
	for(q=1;q<= number;q++){
	var element = document.getElementById("environment").rows[r_initial].cells[t_initial-1];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	document.getElementById("environment").rows[r_initial].cells[t_initial-1].style.animation = "comp 2s " + time.toString() +"s";
	t_initial = t_initial - 1;
	time = time +1;}
	else{
	
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
	if(count_re == false){
	element.classList.remove("cla");  
	void element.offsetWidth;
 	element.classList.add("cla");}
	if(q == 1){
	document.getElementById("environment").rows[r_initial ].cells[t_initial].style.background = "#FF5733";}
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	t_initial = t_initial - 1;
 	time = time + 1;}
	} 

}
}else if(s[y].search("turn")!= -1)
{
var steps = s[y].split("(");
var last_split = steps[1].split(")");
var dir = last_split[0];
switch(dir){
case "N":
	direction = 0;
	break;
case "E":
	direction = 1;
	break;
case "S":
	direction = 2;
	break;
case "W":
	direction = 3;}
}else if(s[y].search("end()")!= -1)
{
	if(r_initial==r_final && t_initial==t_final)
	{	var mess;
		var count_true = true;
		if((y+1) <= count)
		{
			mess = "Good Work";
			count_true = true;
		}else
		{
			mess = "Good work but you can do better. Try to reduce the size of the program";
			count_true = false;
			count_re = false;
		}
		setTimeout(function()
		{ 
			document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "white";
			document.getElementById("ebutton").disabled = false;
		}, n * 1000 + 2000);
	
	
		setTimeout(function(){ 
		messagebox(mess);
		if(count_true==false){
			document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
			t_initial = ti;
			r_initial = ri;
			document.getElementById("environment").rows[r_initial].cells[t_initial].style.backgroundColor = "yellow";
		}
		}, n * 1000 + 4000);
		break;
	}
	else
	{
	setTimeout(function(){ count_re = false;
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	document.getElementById("ebutton").disabled = false;}, n * 1000 + 2000);
	setTimeout(function(){ 
	messagebox("You have to reach the target");
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "#FF5733"
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	t_initial = ti;
	r_initial = ri;
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.backgroundColor = "yellow";}, n * 1000 + 4000);
	break;}
}
else{break;}

if(obstruction==true){
break;
}
}
}
function dis(){document.getElementById("ebutton").disabled = true;
}
function messagebox(l){
document.getElementById("message").style.visibility = "visible";
document.getElementById("con").innerHTML = l;
document.getElementById("content").style.opacity = "0.4";
document.getElementById("environment").style.opacity = "0.4";
document.getElementById("con").style.fontSize = "xx-large";
document.getElementById("con").style.textAlign = "center";
document.getElementById("con").style.position = "relative";
document.getElementById("con").style.top = "100px";
}
function messagebox_close(){
document.getElementById("message").style.visibility = "hidden";
document.getElementById("content").style.opacity = "1";
document.getElementById("environment").style.opacity = "1";
document.getElementById("content").style.opacity = "1";
}




function easy_path(x1,y1,x2,y2)
{
	


	var shortx = x2 - x1;
	var shorty = y2 - y1;
	var x3 = x1;
	var y3 = y1;
	var i;
	var breakx = false;


if(shortx>0)
{
	for(i=1;i<=shortx;i++)
	{
		x3 = x3 + 1;
		var element = document.getElementById("environment").rows[x1 + i].cells[y1];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
else if(shortx<0)
{

	for(i=Math.abs(shortx);i>=1;i--)
	{x3 = x3 - 1;
		var element = document.getElementById("environment").rows[x1 - i].cells[y1];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}

if(shorty>0)
{
	for(i=1;i<=shorty;i++)
	{
		y3 = y3 + 1;
		var element = document.getElementById("environment").rows[x3].cells[y1+i];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
else if(shorty<0)
{

	for(i=Math.abs(shorty);i>=1;i--)
	{y3 = y3 - 1;
		var element = document.getElementById("environment").rows[x3].cells[y1-i];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
if(x3==x2&&y2==y3){
breakx = true;
}else
{x3 = x1;
y3 = y1
if(shorty>0)
{
	for(i=1;i<=shorty;i++)
	{
		y3 = y3 + 1;
		var element = document.getElementById("environment").rows[x1].cells[y1+i];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
else if(shorty<0)
{

	for(i=Math.abs(shorty);i>=1;i--)
	{y3 = y3 - 1;
		var element = document.getElementById("environment").rows[x1].cells[y1-i];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}

if(shortx>0)
{
	for(i=1;i<=shortx;i++)
	{
		x3 = x3 + 1;
		var element = document.getElementById("environment").rows[x1 + i].cells[y3];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
else if(shortx<0)
{

	for(i=Math.abs(shortx);i>=1;i--)
	{x3 = x3 - 1;
		var element = document.getElementById("environment").rows[x1 - i].cells[y3];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			break;
		}
	}

}
if(x3==x2&&y3==y2){
breakx = true;
}


}






if(x1==x2||y1==y2){
return 3;
}else
if(breakx == true){
return 5;
}else
{
return 7;
}

}























































