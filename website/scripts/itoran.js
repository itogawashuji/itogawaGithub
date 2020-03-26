var aside = document.getElementById('aside');
var btn = document.getElementById('nav-toggle');
btn.addEventListener('click',function(){
	this.classList.toggle('fa-times');
	aside.classList.toggle('aside-none');
}, false);

var cod = document.getElementById('acodion-header1');
cod.addEventListener('click',() => {
	document.getElementById('acodion-header11').classList.toggle('acodion-textbox-none');
	document.getElementById('fac').classList.toggle('fa-times');
});
var cod = document.getElementById('acodion-header2');
cod.addEventListener('click',() => {
	document.getElementById('acodion-header22').classList.toggle('acodion-textbox-none');
	document.getElementById('fac2').classList.toggle('fa-times');
});
var cod = document.getElementById('acodion-header3');
cod.addEventListener('click',() => {
	document.getElementById('acodion-header33').classList.toggle('acodion-textbox-none');
	document.getElementById('fac3').classList.toggle('fa-times');
});

var i = 0;
var img = document.getElementById('slide');
setInterval(function(){

	if(i%2===0){
		img.innerHTML = '<img src="images/3ef1931b644901119e86c28ae84902bf.jpg">'
	}else{
		img.innerHTML ='<img src="images/80_60.jpg">'
	}
	i++;
}, 2000);

console.log('AIzaSyBbR-GPk3eTl4Hqzzuo6O-iEihFVGaJbXc');
console.log('AIzaSyBhkSrte1Ho10X5Kf1jhYu4rdzC3fY7e78');

		function hoge(json){
        console.log(json);
        //console.log(json.status);
        /*var result = json['results'];
        if(result){
        //var result = json['results'];
        //console.log(result);
        var prefecture = document.getElementById('prefecture');
        prefecture.value = result[0].address1;
        var city = document.getElementById('city');
        city.value = result[0].address2;
        var address = document.getElementById('address');
        address.value = result[0].address3;
        }else{
            window.alert(json.message);
        }*/
    	};
