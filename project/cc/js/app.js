
var MONITOR = {
GET_W : function(){return window.innerWidth;},
GET_H : function(){return window.innerHeight;},
GET_EKRAN_H : function(){return window.innerHeight/2;},
GET_EKRAN_W : function(){return window.innerWidth/3;},
GETSEQUENCEW : function(){return this.GET_EKRAN_W()/8; }
};

var GUSTINA = 8;

var _N_ = new Array();






(function() {

//#######################################################
//#######################################################
window.CONTROLN = 0;


//#######################################################
//#######################################################
	function hasGetUserMedia() {
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}
	if (hasGetUserMedia()) {
    console.log("ok");
	
	} else {
		return;
	}

	var webcamError = function(e) {
		alert('Webcam error!', e);
	};

	var video = $('#webcam')[0];

	if (navigator.getUserMedia) {
		navigator.getUserMedia({audio: true, video: true}, function(stream) {
			video.src = stream;
			initialize();
		}, webcamError);
	} else if (navigator.webkitGetUserMedia) {
		navigator.webkitGetUserMedia({audio: true, video: true}, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			initialize();
		}, webcamError);
	} else {
		//video.src = 'somevideo.webm'; // fallback.
	}

	var AudioContext = (
		window.AudioContext ||
		window.webkitAudioContext ||
		null
	);

	
     //window["notesPosY"] = [0, 82, 159, 238, 313, 390, 468, 544  ,   0, 82, 159, 238, 313, 390, 468, 544   ,    0, 82, 159, 238, 313, 390, 468, 544  ];
	 
	 window["notesPosY"]=[];
	 window["notesPosX"]=[];
	 
	 for (var j=0;j<GUSTINA;j++) {
	 
	 for (var d=0;d<GUSTINA;d++) {
	 
	 _N_.push("0"); 
	 notesPosX.push(d* MONITOR.GETSEQUENCEW());
	 
	 notesPosY.push(j* MONITOR.GETSEQUENCEW());
	 
	 
	 }
	 
	 }
	 
	
	 
	 //
	 
	 
	 
	 
	//#############################################################
     // window["notesPosX"] =  [0, 0, 0, 0, 0, 0, 0, 0,      80, 80, 80, 80, 80, 80, 80, 80, 80, 80,  159, 159, 159, 159, 159, 159, 159, 159, 159, 159,];
	//############################################################# 
	 
	var timeOut, lastImageData;
	var canvasSource = $("#canvas_source")[0];
	var canvasBlended = $("#canvas-blended")[0];

	//canvasSource.width =  window.innerWidth;
	//canvasSource.height = window.innerHeight;
	
	var contextSource = canvasSource.getContext('2d');
	var contextBlended = canvasBlended.getContext('2d');

	var soundContext;
	var bufferLoader;
	window["notes"] = [];

	// mirror video
	contextSource.translate(canvasSource.width, 0);
	contextSource.scale(-1, 1);

	var c = 5;

	function initialize() {
		if (!AudioContext) {
			alert("AudioContext not supported!");
		}
		else {
			loadSounds();
		}
	}

	
	window["ARRAY_SOUND"] = [];
	for (var s=0 ; s<1; s++) {
	
	ARRAY_SOUND.push('sounds/note1.mp3');
	
	}
	
	function loadSounds() {
		soundContext = new AudioContext();
		bufferLoader = new BufferLoader(soundContext,ARRAY_SOUND
			,
			finishedLoading
		);
		bufferLoader.load();
	}

	function finishedLoading(bufferList) {
			var source = soundContext.createBufferSource();
		 
			source.buffer = bufferList[0];
			 
			source.connect(soundContext.destination);
		
		for (var i=0;  i<GUSTINA*GUSTINA; i++) {
		
			
			var note = {
				note: source,
				ready: true,
				visual: $("#note" + 1)[0]
			};
			          			
		 
			note.area = {x:notesPosX[i], y:notesPosY[i], width:MONITOR.GET_EKRAN_W()/20, height:MONITOR.GET_EKRAN_H()/10};//ori
			notes.push(note); 
		 
			
			
			
			//note.area = {x:notesPosX[i], y:0, width:100, height:note.visual.width};//ori
			
	//		notes.push(note); 
			
		 
		}
		start();
	}

	function playSound(obj) {
		if (!obj.ready) return;
		var source = soundContext.createBufferSource();
		source.buffer = obj.note.buffer;
		source.connect(soundContext.destination);
		source.noteOn(0);
		obj.ready = false;
		// throttle the note
		setTimeout(setNoteReady, 400, obj);
	}

	function setNoteReady(obj) {
		obj.ready = true;
	}

	function start() {
	//	$(canvasSource).show();
	//	$(canvasBlended).show();
	//	$("#xylo").show();
		//$("#message").hide();
		$("#description").show();
		update();
			//$(canvasBlended).hide(); // modi by Nikola Lukic
	}

	function update() {
		drawVideo();
		blend();
		checkAreas();
		timeOut = setTimeout(update, 1);
	}

	function drawVideo() {
		contextSource.drawImage(video, 0, 0, video.width, video.height);
	}

	function blend() {
		var width = canvasSource.width;
		var height = canvasSource.height;
		// get webcam image data
		var sourceData = contextSource.getImageData(0, 0, width, height);
		// create an image if the previous image doesn’t exist
		if (!lastImageData) lastImageData = contextSource.getImageData(0, 0, width, height);
		// create a ImageData instance to receive the blended result
		var blendedData = contextSource.createImageData(width, height);
		// blend the 2 images
		differenceAccuracy(blendedData.data, sourceData.data, lastImageData.data);
		// draw the result in a canvas
		contextBlended.putImageData(blendedData, 0, 0);
		// store the current webcam image
		lastImageData = sourceData;
	}

	function fastAbs(value) {
		// funky bitwise, equal Math.abs
		return (value ^ (value >> 31)) - (value >> 31);
	}

	function threshold(value) {
		return (value > 0x15) ? 0xFF : 0;
	}

	function difference(target, data1, data2) {
		// blend mode difference
		if (data1.length != data2.length) return null;
		var i = 0;
		while (i < (data1.length * 0.25)) {
			target[4*i] = data1[4*i] == 0 ? 0 : fastAbs(data1[4*i] - data2[4*i]);
			target[4*i+1] = data1[4*i+1] == 0 ? 0 : fastAbs(data1[4*i+1] - data2[4*i+1]);
			target[4*i+2] = data1[4*i+2] == 0 ? 0 : fastAbs(data1[4*i+2] - data2[4*i+2]);
			target[4*i+3] = 0xFF;
			++i;
		}
	}

	function differenceAccuracy(target, data1, data2) {
		if (data1.length != data2.length) return null;
		var i = 0;
		while (i < (data1.length * 0.25)) {
			var average1 = (data1[4*i] + data1[4*i+1] + data1[4*i+2]) / 3;
			var average2 = (data2[4*i] + data2[4*i+1] + data2[4*i+2]) / 3;
			var diff = threshold(fastAbs(average1 - average2));
			target[4*i] = diff;
			target[4*i+1] = diff;
			target[4*i+2] = diff;
			target[4*i+3] = 0xFF;
			++i;
		}
	}

	function checkAreas() {
		// loop over the note areas
		for (var r=0; r<GUSTINA*GUSTINA; ++r) {
			// get the pixels in a note area from the blended image
			var blendedData = contextBlended.getImageData(notes[r].area.x, notes[r].area.y, notes[r].area.width, notes[r].area.height);
			var i = 0;
			var average = 0;
			// loop over the pixels
			while (i < (blendedData.data.length * 0.25)) {
				// make an average between the color channel
				average += (blendedData.data[i*4] + blendedData.data[i*4+1] + blendedData.data[i*4+2]) / 3;
				++i;
			}
			// calculate an average between of the color values of the note area
			average = Math.round(average / (blendedData.data.length * 0.25));
			if (average > 10) {
				// over a small limit, consider that a movement is detected
				// play a note and show a visual feedback to the user
			//	playSound(notes[r]);
			//	notes[r].visual.style.display = "block";
			//	$(notes[r].visual).fadeOut();
				
				
				//###############################
				//eval("CONTROLN=r+1;");
				
				_N_[r] = "1";
				DESTROY(r);
				
				
				MAP(r);
				
				
				
				  //console.log(CONTROLN);
				//###############################
				
			}
		}
	}


})();



function MAP(ee){

try{

if (ee == 13) {

 

E("monsters").contentWindow.window.controls.moveForward = true;

}

else if (ee == 10) {

E("monsters").contentWindow.window.controls.moveLeft = true;
setTimeout(function(){
E("monsters").contentWindow.window.controls.moveLeft = false;
} , 10);


}

else if (ee == 47) {

E("monsters").contentWindow.window.controls.moveLeft = false; 
E("monsters").contentWindow.window.controls.moveBackward = false;
E("monsters").contentWindow.window.controls.moveForward = false;


}
else if (ee == 15) {

E("monsters").contentWindow.window.controls.attack = true;


setTimeout(function(){
E("monsters").contentWindow.window.controls.attack = false;
} , 11);

}




}catch(e){}


}




function DESTROY(index){

window["T"+index] = setTimeout(function(){ _N_[index] = "0"; }, 1333);

}

//####################################################
//bonus
function E(name){return document.getElementById(name);}

var canvasSource = E("canvas_source");
var canvasBlended = E("canvas-blended");
var indikator_dom =  E("xylo");
var holder_ =  E("WWWW"); 
var crtac_ =  E("indikator_canvas"); 


 



