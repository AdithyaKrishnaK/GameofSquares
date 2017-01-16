var t_initial, ti, r_initial, ri, t_final, r_final;
var no_lines;
var nav_t, nav_r;
var no_linesre = true;
var no_linestrue = false;
var no_moves,no_lines;
var next, next1;
function loaded(){
var table = document.getElementById("environment");
    var header = table.createTBody();
    
var r;   
var i;
var x_dir;
var y_dir;
for (r=0;r<15;r++){
var row = header.insertRow(0);
for (i = 0; i < 25; i++) {
     var cell = row.insertCell(0);
}}
obstruct();
target(0);
target(1);
easy_path(r_initial,t_initial,r_final,t_final);

if(no_moves === undefined||no_lines === undefined){
		location.reload();}
else{			
document.getElementById("lin").innerHTML = no_lines.toString();
document.getElementById("num").innerHTML = no_moves.toString();}
if (Math.floor((Math.random() * 50)+1)%2==0) {
	document.getElementById("rc").innerHTML = "Row : "+r_final.toString();
} else {
	document.getElementById("rc").innerHTML = "Column : "+t_final.toString();
}

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
k.style.backgroundColor = "yellow";}else if(s==1){
if(guessr == r_initial && guessc == t_initial){
location.reload();
}
t_final = guessc;//target cell
r_final = guessr;//target row
var k = document.getElementById("environment").rows[guessr].cells[guessc];
k.style.backgroundColor = "#13EEF1";
k.style.visibility ="hidden";
}
}

function execute(){
document.getElementById("ebutton").disabled = true;
document.getElementById("ebutton").style.opacity = "0.5";
/*
0 - North 
1 - East 
2 - South 
3 - West
*/
var p_cross;
var n = 0;
var time = 2;
var direction = 0 ;
var obstruction = false;
var q;
var code = document.getElementById("e").value;
var s = code.split(";");
var t = s.length - 1; 
var check_if =false;
for(y=0;y<=t;y++){
if(s[y].search("walk")!= -1){
var steps = s[y].split("(");
var last_split = steps[1].split(")");
var number = parseInt(last_split[0]);
n = n + number;
switch(direction){
case 0:
	for(q=1;q<= number;q++){
		if (r_initial ==0 ) {
			obstruction =true;
					setTimeout(function(){ 
	messagebox("You went out of the board");
	}, q * 1000 + 2000);
			break;
		}
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_final].cells[t_final].style.visibility = "visible";
	}, time * 1000 );
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animation = "comp 2s " + time.toString() +"s";
	r_initial = r_initial - 1;
	time = time + 1;}
	else if(color == "rgb(227,20,142)"){
		document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla1");
		document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
		var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
		if(no_linesre == false){
		element.classList.remove("cla1");  
		void element.offsetWidth;
		element.classList.add("cla1");}
		p_cross = true;
		 r_initial = r_initial - 1;
 		time = time + 1;
	}
	else{
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial - 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial - 1].cells[t_initial];
	if(no_linesre == false){
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
		if (t_initial == 24) {
			obstruction =true;
			setTimeout(function(){ 
	messagebox("You went out of the board");
	}, q * 1000 + 2000);
			
			break;
		}
	var element = document.getElementById("environment").rows[r_initial].cells[t_initial+1];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_final].cells[t_final].style.visibility = "visible";
	}, time * 1000 );
	document.getElementById("environment").rows[r_initial].cells[t_initial+1].style.animation = "comp 2s " + time.toString() +"s";
	t_initial = t_initial + 1;
	time = time +1;}
	else if(color == "rgb(227,20,142)"){
		document.getElementById("environment").rows[r_initial ].cells[t_initial +1].classList.add("cla1");
		document.getElementById("environment").rows[r_initial ].cells[t_initial +1].style.animationDelay = time.toString()+"s";
		var element = document.getElementById("environment").rows[r_initial ].cells[t_initial+1];
		p_cross = true;
		if(no_linesre == false){
		element.classList.remove("cla1");  
		void element.offsetWidth;
 		element.classList.add("cla1");}
		 t_initial = t_initial + 1;
 		time = time + 1;
	}
	else{
	
	document.getElementById("environment").rows[r_initial ].cells[t_initial+1].classList.add("cla");
	document.getElementById("environment").rows[r_initial ].cells[t_initial+1].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial ].cells[t_initial+1];
	if(no_linesre == false){
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
		if ( r_initial == 14) {
			obstruction =true;
					setTimeout(function(){ 
	messagebox("You went out of the board");
	}, q * 1000 + 2000);
			break;
		}
	var element = document.getElementById("environment").rows[r_initial + 1].cells[t_initial];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
			setTimeout(function(){ 
	document.getElementById("environment").rows[r_final].cells[t_final].style.visibility = "visible";
	}, time* 1000 );
	document.getElementById("environment").rows[r_initial + 1].cells[t_initial].style.animation = "comp 2s " + time.toString() +"s";
	r_initial = r_initial + 1;
	time = time +1;}
	else if(color == "rgb(227,20,142)"){
		document.getElementById("environment").rows[r_initial + 1].cells[t_initial].classList.add("cla1");
		document.getElementById("environment").rows[r_initial + 1].cells[t_initial].style.animationDelay = time.toString()+"s";
		var element = document.getElementById("environment").rows[r_initial -+ 1].cells[t_initial];
		p_cross = true;
		if(no_linesre == false){
		element.classList.remove("cla1");  
		void element.offsetWidth;
 		element.classList.add("cla1");
		r_initial = r_initial + 1;
 	time = time + 1;}
	}
	else{
	
	document.getElementById("environment").rows[r_initial + 1].cells[t_initial].classList.add("cla");
	document.getElementById("environment").rows[r_initial + 1].cells[t_initial].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial + 1].cells[t_initial];
	if(no_linesre == false){
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
		if (t_initial == 0) {
			obstruction =true;
					setTimeout(function(){ 
	messagebox("You went out of the board");
	}, q * 1000 + 2000);
			break;
		}
	var element = document.getElementById("environment").rows[r_initial].cells[t_initial-1];
    	var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
    	if(color == "rgb(192, 185, 184)"){
	obstruction = true;
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	messagebox("Obstruction");}, q * 1000 + 2000);
	break;
	}else if(color=="rgb(19, 238, 241)"){
	setTimeout(function(){ 
	document.getElementById("environment").rows[r_final].cells[t_final].style.visibility = "visible";
	}, time * 1000);
	document.getElementById("environment").rows[r_initial].cells[t_initial-1].style.animation = "comp 2s " + time.toString() +"s";
	t_initial = t_initial - 1;
	time = time +1;}
	else if(color == "rgb(227,20,142)"){
		document.getElementById("environment").rows[r_initial ].cells[t_initial- 1].classList.add("cla1");
		document.getElementById("environment").rows[r_initial ].cells[t_initial- 1].style.animationDelay = time.toString()+"s";
		var element = document.getElementById("environment").rows[r_initial ].cells[t_initial - 1];
		p_cross = true;
		if(no_linesre == false){
		element.classList.remove("cla1");  
		void element.offsetWidth;
 		element.classList.add("cla1");}
		 t_initial = t_initial - 1;
 	time = time + 1;
	}
	else{
	
	document.getElementById("environment").rows[r_initial ].cells[t_initial -1].classList.add("cla");
	document.getElementById("environment").rows[r_initial ].cells[t_initial-1].style.animationDelay = time.toString()+"s";
	var element = document.getElementById("environment").rows[r_initial].cells[t_initial-1];
	if(no_linesre == false){
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
		if((y+1) <= no_lines)
		{
			if(p_cross==true && next1 == true){
				messagebox("Good work");
				break;
			}
			next = true;
			mess = "Good Work and Good luck in the next level";
			no_linestrue = true;
		}else
		{
			mess = "Good work but you can do better. Try to reduce the size of the program";
			no_linestrue = false;
			no_linesre = false;
		}
		setTimeout(function()
		{ 
			document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "white";
			document.getElementById("ebutton").disabled = false;
		}, n * 1000 + 2000);
	
	
		setTimeout(function(){ 
		messagebox(mess);
		document.getElementById("ebutton").disabled = false;
		document.getElementById("ebutton").style.opacity = "1";
		if(no_linestrue==false){
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
	setTimeout(function(){ no_linesre = false;
	no_linestrue = false;
	
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "yellow";
	document.getElementById("ebutton").disabled = false;
	document.getElementById("ebutton").style.opacity = "1";}, n * 1000 + 2000);
	setTimeout(function(){ 
	messagebox("You have not reached the target");
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "#FF5733"
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	t_initial = ti;
	r_initial = ri;
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.backgroundColor = "yellow";}, n * 1000 + 4000);
	break;}
}
else{
	messagebox("Syntax error:command does not exist")
	obstruction = true;
	break;}

if(obstruction==true){
	document.getElementById("ebutton").disabled = false;
document.getElementById("ebutton").style.opacity = "1";
setTimeout(function(){ 
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.background = "#FF5733"
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#13EEF1";
	t_initial = ti;
	r_initial = ri;
	document.getElementById("environment").rows[r_initial].cells[t_initial].style.backgroundColor = "yellow";}, n * 1000 + 4000);
break;
}
}
}

function dis(){
	var tr = false;
	document.getElementById("ebutton").disabled = true;
	var code = document.getElementById("e").value;
	var s = code.split(";");
	for(var i = 0; i<s.length;i++){
		if (s[i].search("end()")!= -1) {
			tr = true;
		}
	}
	if(tr == false){
		messagebox("end() missing");
		document.getElementById("ebutton").disabled = false;
		return ;
		}else{execute();}
		
		
		
}
var n_click = 0;
function hint()
{
	if (n_click==0) {
		document.getElementById("environment").rows[r_final].cells[t_final].style.visibility ="visible";
		setTimeout(function(){
		document.getElementById("environment").rows[r_final].cells[t_final].style.visibility ="hidden";}, 2000);
		document.getElementById("show_button").classList.remove("img3"); 
	}
	n_click += 1;
}




function messagebox(l){
	if (next == true ) {
	document.getElementById("quit_button").style.visibility = "visible";	
}
document.getElementById("message_content").style.visibility = "hidden";
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
if (next == true ) {
	document.getElementById("quit_button").style.visibility = "hidden";
	next = false;
	next1 =true;
	next_level();
	
}else{
document.getElementById("message").style.visibility = "hidden";
document.getElementById("content").style.opacity = "1";
document.getElementById("environment").style.opacity = "1";
document.getElementById("content").style.opacity = "1";
}
document.getElementById("message_content").style.visibility = "hidden";
}



function easy_path(x1,y1,x2,y2)
{
	var break1 = false, break2 = false, break3 = false, break4 = false;
	var shortx = x2 - x1;
	var shorty = y2 - y1;
	var x3 = x1;
	var y3 = y1;
	var i;
	var breakx = false;

if(shortx>0)
{y_dir = 1;
	for(i=1;i<=shortx;i++)
	{
		
		var element = document.getElementById("environment").rows[x1 + i].cells[y1];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
		
			break1 = true;
			break;
			
		}else{x3 = x3 + 1;
			}
	}

}
else if(shortx<0)
{y_dir = -1;
var l = 1;
	for(i=Math.abs(shortx);i>=1;i--)
	{
		var element = document.getElementById("environment").rows[x1 - l].cells[y1];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		l= l+1;
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break1 = true;
			
			break;
		}else{x3 = x3 - 1;
		}
	}

}
if(break1==false){
if(shorty>0)
{x_dir = 1;
	
	for(i=1;i<=shorty;i++)
	{
		
		var element = document.getElementById("environment").rows[x3].cells[y1+i];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break2 = true;
			break;
		}else{y3 = y3 + 1;
			}
	}

}
else if(shorty<0)
{x_dir = - 1;
var l = 1;

	for(i=Math.abs(shorty);i>=1;i--)
	{ 
		var element = document.getElementById("environment").rows[x3].cells[y1-l];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		l=l+1
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break2 = true;
			break;
		}else{y3 = y3 - 1;
			}
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
		
		var element = document.getElementById("environment").rows[x1].cells[y1+i];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break3 = true;
			break;
		}else{y3 = y3 + 1;}
	}

}
else if(shorty<0)
{
var l = 1;
	for(i=Math.abs(shorty);i>=1;i--)
	{
		var element = document.getElementById("environment").rows[x1].cells[y1-l];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		l = l+1;
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break3 = true;
			break;
		}else{y3 = y3 - 1;}
	}

}
if(break3==false){
if(shortx>0)
{
	for(i=1;i<=shortx;i++)
	{
		
		var element = document.getElementById("environment").rows[x1 + i].cells[y3];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		
		
		if(color == "rgb(192, 185, 184)")
		{
			
			break4 = true;
			break;
		}else{x3 = x3 + 1;}
	}

}
else if(shortx<0)
{var l = 1;

	for(i=Math.abs(shortx);i>=1;i--)
	{
		var element = document.getElementById("environment").rows[x1 - l].cells[y3];
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			l=l+1;
		if(color == "rgb(192, 185, 184)")
		{
			
			break4 = true;
			break;
		}else{x3 = x3 - 1;}
	}

}
}
if(x3==x2&&y3==y2){
breakx = true;
}


}


for (var i = 2; i < 16; i++) {
	for (var g = 0; g < 2; g++) {
		document.getElementById("environment").rows[g].cells[i].style.fontSize = "20px";
	}
	
}
for (var i = 2; i < 24; i++) {
	for (var g = 13; g < 15; g++) {
		document.getElementById("environment").rows[g].cells[i].style.fontSize = "20px";
	}
	
}

for (var i = 20; i < 24; i++) {
	for (var g = 8; g < 15; g++) {
		document.getElementById("environment").rows[g].cells[i].style.fontSize = "21px";
	}
	
}
for (var i = 20; i < 24; i++) {
	for (var g = 0; g < 3; g++) {
		document.getElementById("environment").rows[g].cells[i].style.fontSize = "21px";
	}
}
if (shortx == 0) {
	var gh = y1;
	var tr = false;
	for(var g = y1;g<=y1+Math.abs(shorty);g++){
		var element = document.getElementById("environment").rows[x1].cells[gh];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			tr=true;
			break;
		}if (shorty < 0) {
			gh=gh-1;
		}else{gh=gh+1;}
	}
	if (tr==false) {
	no_moves = Math.abs(shorty);	
	no_lines =  3;
	}
	
} else if(shorty == 0)	{
	var gh = x1;
	var tr = false;
	for(var g = x1;g<=x1+Math.abs(shortx);g++){
		
		var element = document.getElementById("environment").rows[gh].cells[y1];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			tr=true;
			break;
		}if (shortx < 0) {
			gh=gh-1;
		}else{gh=gh+1;}
	}
	if (tr==false) {
	no_moves = Math.abs(shortx);	
	no_lines = 3 ;
	}
	
}else if ((break1==false && break2==false)||(break3==false && break4==false)) {
	no_moves = Math.abs(shortx)+Math.abs(shorty);
	no_lines =  5;
}else{scan2(x1,y1,x2,y2);}

}

function next_level()
{
	document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#FF5733";
	
	r_initial = 0;
	t_initial = 0;
	r_final = 0;
	t_final = 0;
	n_click = 0;
	no_lines = 0;
	ri =0 ;
	ti = 0;
	no_linesre = true;
	no_linestrue = false;
	no_moves = 0;
	document.getElementById("e").value = "";
	target(0);
	target(1);
	 easy_path(r_initial,t_initial,r_final,t_final);

	

	 if (no_moves === undefined || no_lines === undefined||no_lines<6||isNaN(no_lines)||isNaN(no_moves)) {
		 document.getElementById("environment").rows[r_initial].cells[t_initial].style.backgroundColor = "#FF5733";
		 document.getElementById("environment").rows[r_final].cells[t_final].style.backgroundColor = "#FF5733";
		target(0);
		target(1);
		easy_path(r_initial,t_initial,r_final,t_final);
	 }
	 

	document.getElementById("lin").innerHTML = no_lines.toString();
	document.getElementById("num").innerHTML = no_moves;
	
	if (Math.floor((Math.random() * 50)+1)%2==0) {
		document.getElementById("rc").innerHTML = "Row : "+r_final.toString();
	} else {
		document.getElementById("rc").innerHTML = "Column : "+t_final.toString();
	}
	

}
var n_repeat = 0;
function scan2(x1,y1,x2,y2)
{
	n_repeat = n_repeat +1;
	no_lines = 0;
	shortx =x2 - x1;
	shorty = y2 - y1;
	var gh = x1;
	var tr = false;
	var turn = 1;
	if(shortx<0){y_dir = -1;}else{y_dir = 1}
var stepsv = 0;
var stepsh = 0;
	var xd,yd;
	if (shorty>0) {
		xd = 1;
	}else{xd = -1;}
	if (shortx>0) {
		yd = 1;
	}else{yd = -1;}
if (xx ==yy && xx == "21px"){
			var ax = true;
			scan("y",x1,y1,Math.abs(shorty),xd,yd,ax);
			return ;
		}
		
		
	for(var g = x1;g<=x1+Math.abs(shortx)-1;g++){
		var element = document.getElementById("environment").rows[gh+y_dir].cells[y1];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			tr = true;
			break;
		}else{}
		stepsv = stepsv+1;
		if (y_dir < 0) {
			gh=gh-1;
		}else{gh=gh+1;}
	}
	var row_n = gh;
	var ob = false;

	var m = 0;
	if (tr == true) {	
	for(var i = 1;i<=Math.abs(shorty);i++){
			if (xd < 0) {
			m=m-1;
		}else{m=m+1;}
		var element = document.getElementById("environment").rows[row_n].cells[y1 + m ];
		
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
		
			ob = true;
			break;
		}else{stepsh = stepsh +1;
			}
	}

	if (ob==false) {
var ob2=false;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[y2];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob2 = true;
			break;
		}else{}
		stepsv = stepsv +1;
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if(ob2==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2){
		no_lines = 7;
		no_moves = Math.abs(shortx)+Math.abs(shorty);
	}else{
		var ww=0;
		for(var g = 1;g<=stepsh;g++){
			stepsh = stepsh -1;
		var element = document.getElementById("environment").rows[x1+(stepsv*yd)+yd].cells[y2+ww];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{			
			
		}else{ob2 = true;
			break;}
			
		if (xd < 0) {
			ww=ww+1;
			
		}else{ww=ww-1;}
	}
	m = stepsh*xd;
		var ob3=false;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[	y1 +(m-xd)];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{			
			ob3 = true;
			break;
		}else{}
		stepsv = stepsv +1;
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if (ob3==false) {
		var ob4 = false;
		var j =0;
		for(var g = stepsh;g<=Math.abs(shorty)-1;g++){
		if (xd < 0) {
			j=j-1;
		}else{j=j+1;}
		var element = document.getElementById("environment").rows[gh].cells[y1 +(m-xd)+j];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			ob4 = true;
			break;
		}else{stepsh +=1;}

	}


	if (ob4==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {
		no_lines = 9;
		no_moves = Math.abs(shortx)+Math.abs(shorty);
		}

	}else{
		var ob5 = false;
		var j =0;
		for(var g = stepsh;g<=Math.abs(shorty)-1;g++){
		if (xd < 0) {
			j=j-1;
		}else{j=j+1;}
		var element = document.getElementById("environment").rows[gh].cells[y1 +(m-xd)+j];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob5 = true;
			break;
		}else{stepsh +=1;}

	}
	if (ob5==false) {
		var ob6=false;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[y2];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob6 = true;
			break;
		}else{stepsv +=1;}
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if (ob6==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {
	no_lines = 9;
	no_moves = Math.abs(shortx)+Math.abs(shorty);
	}
	}
	}
	}
	///
	///
	///
	}else{if(stepsv ==0){var nine_seven = false;}else{var nine_seven = true;}
	var ob3=false;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[	y1 +(m-xd)];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{			
			ob3 = true;
			break;
		}else{}
		stepsv = stepsv +1;
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if (ob3==false) {
		var ob4 = false;
		var j =0;
		for(var g = stepsh;g<=Math.abs(shorty)-1;g++){
		if (xd < 0) {
			j=j-1;
		}else{j=j+1;}
		var element = document.getElementById("environment").rows[gh].cells[y1 +(m-xd)+j];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			ob4 = true;
			break;
		}else{stepsh = stepsh +1;}

	}


	if (ob4==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {
		if(nine_seven ==false){
		no_lines = 7;
		no_moves = Math.abs(shortx)+Math.abs(shorty);
		} else{
		no_lines = 9;
		no_moves = Math.abs(shortx)+Math.abs(shorty);
		}
		}

	}else{
		var ob5 = false;
		var j =0;
		for(var g = stepsh;g<=Math.abs(shorty)-1;g++){
		if (xd < 0) {
			j=j-1;
		}else{j=j+1;}
		var element = document.getElementById("environment").rows[gh].cells[y1 +(m-xd)+j];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob5 = true;
			break;
		}else{
	stepsh = stepsh +1;}

	}
	if (ob5==false) {
		var ob6=false;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[y2];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob6 = true;
			break;
		}else{
	stepsv = stepsv +1;}
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if (ob6==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {

	no_lines = 9;
	no_moves = Math.abs(shortx)+Math.abs(shorty);
	}
	}



	}
	}
}else{
	var m = 0;
	var mn = 0;
		for(var i = 1;i<=Math.abs(shorty);i++){
			if (xd < 0) {
			m=m-1;
		}else{m=m+1;}
		var element = document.getElementById("environment").rows[x2].cells[y1 + m ];
		
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
		
			ob = true;
			break;
		}else{mn=mn+1;
			stepsh +=1;
			}
	}
	if (ob==true){
		var ob2=false;
		gh = x2;
		for(var g = 1;g<=Math.abs(x2-x1)-1;g++){
			stepsv = stepsv -1;
		var element = document.getElementById("environment").rows[gh-yd].cells[y1+xd+(xd*mn)];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{			
			
		}else{ob2 = true;
			break;}
			
		if (y_dir < 0) {
			gh=gh+1;
			
		}else{gh=gh-1;}
	}
if (ob2 == true) {
		var m = 0;
		var ob3 = false;
		for(var i = 1;i<=Math.abs(shorty);i++){
			if (xd < 0) {
			m=m-1;
		}else{m=m+1;}
		var element = document.getElementById("environment").rows[x1+(stepsv*y_dir)].cells[y1 + m ];
		
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
		
			ob3 = true;
			break;
		}else{
		stepsh = stepsh+1;	}
	}
		if (ob3==false) {
			var rowr = y2;
		} else {
			var rowr = y1 +m;
			
		}
		
		var ob4=false;
		gh = (stepsv*y_dir) + x1;
		for(var g = stepsv;g<=Math.abs(x2-x1)-1;g++){
		var element = document.getElementById("environment").rows[gh+yd].cells[rowr];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob4 = true;
			break;
		}else{stepsv +=1;}
		if (y_dir < 0) {
			gh=gh-1;
			
		}else{gh=gh+1;}
	}
	if (ob3==false) {
	if (ob4==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {
	no_lines = 7;
	no_moves = Math.abs(shortx)+Math.abs(shorty);
	}
	}else{
		var j =0;
		for(var g = stepsh;g<=Math.abs(shorty)-1;g++){
		if (xd < 0) {
			j=j-1;
		}else{j=j+1;}
		var element = document.getElementById("environment").rows[gh].cells[y1 +(m-xd)+j];			
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		if(color == "rgb(192, 185, 184)")
		{
			
			ob4 = true;
			break;
		}else{stepsh +=1; }

	}
	if (ob4==false&&x1+(stepsv*y_dir)==x2&&y1+(stepsh*xd)==y2) {
	no_lines = 7;
	no_moves = Math.abs(shortx)+Math.abs(shorty);
	}
	}
}

}

}

if (no_lines ==0&&n_repeat ==1) {
	scan2(x2,y2,x1,y1);
	if (no_lines==0) {no_lines = 7;
		var xx =document.getElementById("environment").rows[x1].cells[y1].style.fontSize;
		var yy = document.getElementById("environment").rows[x2].cells[y2].style.fontSize;
		if(xx == yy &&yy=="20px")
		{
		var n_cells2 = x1 -1;
		var n_cells1 = 24-x1;
	if ((yd>0 && xd<0)||(yd<0 && xd>0)) {
		n_cells1 = n_cells1 + 2 + n_cells1 + Math.abs(shorty) ;
		n_cells2 = n_cells2 + 2 + n_cells2 - Math.abs(shorty) ;
	} else {
		n_cells1 = n_cells1 + 2 + n_cells1 - Math.abs(shorty) ;
		n_cells2 = n_cells2 + 2 + n_cells2 + Math.abs(shorty) ;
	}
		if (n_cells1>n_cells2) {
		no_moves =  n_cells2 + Math.abs(shortx) ;
	}else{no_moves = n_cells1 + Math.abs(shortx);}
		}else{
			if (x2>x1) {
				yd = 1;
			} else {
				yd = -1;
			}
			if (y2>y1) {
				xd = 1;
			} else {
				xd = -1;
			}
		scan("y",x1,y1,Math.abs(shorty),xd,yd,ax);}
		if (no_moves>0) {
		no_moves += Math.abs(shortx);
		no_lines = 9;	}
		}

		if(no_moves <= 0){
			scan("x",x1,y1,Math.abs(shortx),xd,yd,ax);
			if (no_moves>0 ) {
			no_moves += Math.abs(shorty);
			no_lines = 9;
			}

			if(no_moves == 0||no_moves === undefined||no_lines === undefined){location.reload();}
			}
	}



}
function scan(l,r,t,d,dirx,diry,ax)
{
	var n_cells1 = 0 , n_cells2 = 0;
	if(l=="y")
	{
		for (var i = 0; i < 14; i++)
		 {
			 if (r==13) {
				 break;
			 }
			var element = document.getElementById("environment").rows[r + diry].cells[t];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");

			if(color == "rgb(192, 185, 184)")
			{
				
				break;
			}else{
				r = r + diry;}
		}
	
		for (var i = 1; i < 14; i++)
		 {
			 if (t+i>24||t+i==0) {
				 break;
			 }
			var element = document.getElementById("environment").rows[r+diry].cells[t+i];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			
			if(color == "rgb(192, 185, 184)")
			{ 
				n_cells1 = n_cells1 + 1;
				
			}else{break;}
		}
		for (var i = 1; i < 14; i++)
		 {
			 	 if (t-i>24||t-i==0) {
				 break;
			 }
			var element = document.getElementById("environment").rows[r+diry].cells[t-i];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			if(color == "rgb(192, 185, 184)")
			{
						
				n_cells2 = n_cells2 + 1;
				
			}else{break;}
		}
		
	if ((diry>0 && dirx<0)||(diry<0 && dirx>0)||(diry>0 && dirx>0)) {
		n_cells1 = n_cells1 + 2 + n_cells1 - d ;
		n_cells2 = n_cells2 + 2 + n_cells2 + d ;
	} else {
		n_cells1 = n_cells1 + 2 + n_cells1 + d ;
		n_cells2 = n_cells2 + 2 + n_cells2 - d ;
	}
	
	if (n_cells1>n_cells2) {
		no_moves =  n_cells2 ;
	}else{no_moves = n_cells1;}
	if (ax == true) {
		no_moves = n_cells1;
	}

}else
	if(l=="x")
	{ var t_actual = t;
		for (var i = 0; i < 14; i++)
		 {
			var element = document.getElementById("environment").rows[r].cells[t+dirx];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			if(color == "rgb(192, 185, 184)")
			{
				break;
			}else{
				t = t + dirx;}
		}
		
		for (var i = 1; i < 14; i++)
		 {
			var element = document.getElementById("environment").rows[r + i].cells[t + dirx];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			if(color == "rgb(192, 185, 184)")
			{
				
				n_cells1 = n_cells1 + 1;
				
			}else{break;}
		}
		for (var i = 1; i < 14; i++)
		 {
			var element = document.getElementById("environment").rows[r-i].cells[t + dirx];			
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			if(color == "rgb(192, 185, 184)")
			{
				
				n_cells2 = n_cells2 + 1;
			
			}else{break;}
		}
		
		
	if ((dirx<0 && diry>0)||(diry<0&&dirx>0)) {
		n_cells1 = n_cells1 + 2 + n_cells1 - d ;
		n_cells2 = n_cells2 + 2 + n_cells2 + d ;
	} else {
		n_cells1 = n_cells1 + 2 + n_cells1 + d ;
		n_cells2 = n_cells2 + 2 + n_cells2 - d ;

	}

	
	if (n_cells1>n_cells2) {
		no_moves = n_cells2 + Math.abs(d);
	}else{no_moves = n_cells1+ Math.abs(d);}

	}


}
var x = 0;
function help(){
document.getElementById("message").style.visibility = "visible";
document.getElementById("content").style.opacity = "0.4";
document.getElementById("environment").style.opacity = "0.4";
document.getElementById("message_content").style.visibility = "visible";
document.getElementById("con").style.visibility = "hidden";
}
function compass_show(){
	
	if(x % 2==0){
	document.getElementById("co").style.visibility = "visible";
	document.getElementById("compass_logo").style.backgroundColor = "#1DBAF5";}else{
	document.getElementById("co").style.visibility = "hidden";
	document.getElementById("compass_logo").style.backgroundColor = "#AEAAAC"
	}x = x + 1;
}

function game_quit(){
	window.close();
}


