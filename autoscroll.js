var doc = document;

var px = prompt('Enter The Pixel Rate');
var ms = prompt('Enter The Milliseconds You Wish To Travel At');

var elem = document.documentElement;

var t;

begin(ms, px);

function begin(ms, px){
	t = setInterval(function(){ 
		window.scrollBy(0, px);
 	}, ms);
}


window.onscroll = function(){
var x = window.scrollY + window.innerHeight;
	if(elem.offsetHeight <= x){
clearInterval(t);
	}
}
