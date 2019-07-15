var doc = document;

var ms = prompt('Enter The Milliseconds');

var elem = document.documentElement;

var t;

begin(ms, px);

function begin(ms, px){
	t = setInterval(function(){ 
		window.scrollBy(0, 1);
 	}, ms);
}


window.onscroll = function(){
var x = window.scrollY + window.innerHeight;
	if(elem.offsetHeight <= x){
clearInterval(t);
	}
}
