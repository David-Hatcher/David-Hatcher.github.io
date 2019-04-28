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
setTimeout(function() {
	new TypeIt('#titles', {
		strings: ['Student','Junior Developer','Creator','Problem Solver'],
		breakLines: false,
		cursor: false,
		lifelike:true,
		speed: 100,
		waitUntilVisible: true,
		loop:true,
	}).go();
	
}, 2000);
