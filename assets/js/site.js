// JavaScript source code
// window.onload = function () {

// 	var blue = '#2980b9';
// 	var l = Snap('#logo');
// 	var p = l.select('path');

// 	l.append(p);

// 	p.attr({
// 		fill: blue,
// 		stroke: '#0066CC',
// 	});

// 	setTimeout(function () {
// 		// modify this one line below, and see the result !
// 		var logoTitle = 'David Hatcher';
// 		var logoRandom = '';
// 		var logoTitleContainer = l.text(0, '98%', '');
// 		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
// 		logoTitleContainer.attr({
// 			fontSize: 185,
// 			fontFamily: 'Helvetica',
// 			fontWeight: '600'
// 		});

// 		function generateRandomTitle(i, logoRandom) {
// 			setTimeout(function () {
// 				logoTitleContainer.attr({  text : logoRandom });
// 				//debugger;
// 			}, i * 70);
// 		}


// 		for (var i = 0; i < logoTitle.length + 1; i++) {
// 			logoRandom = logoTitle.substr(0, i);
// 			for (var j = i; j < logoTitle.length; j++) {
// 				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));				
// 			}
// 			generateRandomTitle(i, logoRandom);
// 			logoRandom = '';
// 		}
// 		setTimeout(function (){			
// 			for (var i = logoTitle.length-1; i > 0; i--) {
// 				logoRandom = logoTitle.substr(0, i);
// 				for (var j = i; j <= logoTitle.length; j++) {
// 					logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
// 				}
// 				generateRandomTitle(i, logoRandom);
// 				logoRandom = '';
// 			}		
// 		}, 2000);

// 	}, 500);

// }
new TypeIt('#name', {
	strings: 'David Hatcher',	
	cursor:false,
	speed: 50,
	waitUntilVisible: true
}).go();
// setTimeout(function() {
// 	new TypeIt('#titles', {
// 		strings: ['Student','Junior Developer','Creator','Problem Solver'],
// 		breakLines: false,
// 		cursor: false,
// 		lifelike:true,
// 		speed: 100,
// 		waitUntilVisible: true,
// 		loop:true,
// 	}).go();
	
// }, 2000);

var titles = ["Student","Junior Developer","Creator","Problem Solver"];

feedtitles();

function titlesSequence(title){
  var currentTitle = title;
	for (var j = 0; j <= currentTitle.length +1; j++){
		var titleRandom = currentTitle.substr(0,j)
		for (var k = j ; k <= currentTitle.length; k++){				
			titleRandom += '█';				
		}
		setData(titleRandom,"titles",j);
		titleRandom="";			
	}
}

function titleClear(title){
	debugger;
	for (var i = title.length; i >= 0; i--){
		var titleNotRandom = title.substr(0,i)
  	for (var j = i; j < title.length; j++){
      titleNotRandom += '█';
    }
    setDataReverse(titleNotRandom,"titles",i);
    titleNotRandom = "";
	}

}
function feedtitles(){
	//var iteration = 0;
	titlesSequence(titles[0]);
	setInterval(function() {    
		//iteration += 1;
    var title = titles[0];
    debugger;
    titleClear(title);
    setTimeout(function() {
			titlesSequence(title)    
    },title.length*200);
	}, 5000);
}

function setDataReverse(data,dataspace,i){
	var timeStart = data.length;
	setTimeout(function() {
		document.getElementById(dataspace).innerHTML = data;
	}, (timeStart -i)*200);
}

function setData(data,dataspace,i){
	setTimeout(function() {
		document.getElementById(dataspace).innerHTML = data;
	}, i*100);
}
// 			for (var i = 0; i < logoTitle.length + 1; i++) {
// 			logoRandom = logoTitle.substr(0, i);
// 				for (var j = i; j < logoTitle.length; j++) {
// 					logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));				
// 				}
// 			generateRandomTitle(i, logoRandom);
// 			logoRandom = '';
// 		}
// }



// var example = ['A', 'B', 'C', 'D'];
// textSequence(0);
// function textSequence(i){
// 	if (example.length > i){
// 		setTimeout(function() {
// 			document.getElementById("sequence").innerHTML = example[i];
// 			textSequence(++i);
// 		},1000);
// 	} else if (example.length == i){
// 		textSequence(0);
// 	}
	
// }