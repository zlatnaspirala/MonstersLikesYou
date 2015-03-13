Array.prototype.unset = function(value) {
    if(this.indexOf(value) != -1) { // Make sure the value exists
        this.splice(this.indexOf(value), 1);
    }   
}



var lineLength = function(x, y, x0, y0){
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};



window.onresize = function(){
/*
 CANVAS.style.height = MONITOR.GET_EKRAN_H()*1.5;
 CANVAS.style.width = MONITOR.GET_EKRAN_W()*1.5;
 CANVAS_CAM.style.height = MONITOR.GET_EKRAN_H();
 CANVAS_CAM.style.width = MONITOR.GET_EKRAN_W();
 */
	//canvasSource.height = window.innerHeight;
	console.log("as" + holder_.style.width);
}





var CANVAS = E("indikator_canvas");
var CANVAS_CAM = E("canvas_source");

//alert(CANVAS.width)

var monitor_coder = {
get_W1000 : function(){return MONITOR.GET_W()/1000;},
get_H1000 : function(){return MONITOR.GET_H()/1000;}

};



window.onload = function(){

START();
};


function START(){

while (notes[99] !== undefined) {


}
DRAW();

}


var all_rock = new Array();
 
 this.getName = function () {
    // search through the global object for a name that resolves to this object
    for (var name in window)
      if (window[name] == this)
        return name;
  };

function ROCK(){
 this.DESTROY = function(){
 
 
 if (this.getName !== undefined) {
 
 
 all_rock.splice(all_rock.indexOf(this.getName()), 1);
 
 eval("this.getName()=undefined;");
 
 }
 
 
 };
  
  
    this.x = 0,
    this.y = 0,
    this.targetX = 0,
    this.targetY = 0,
    this.velX = 0,
    this.velY = 0,
    this.thrust = 55;
//
this.SET = function(xx,yy){
this.targetX = xx;
this.targetY = yy;
};

  this.DRAW = function(id){
  
    var tx = this.targetX - this.x,
        ty = this.targetY - this.y,
        dist = Math.sqrt(tx*tx+ty*ty);
      //  rad = Math.atan2(ty,tx),
       // angle = rad/Math.PI * 180;

    this.velX = (tx/dist)*this.thrust;
    this.velY = (ty/dist)*this.thrust;
  
  

    // stop the box if its too close so it doesn't just rotate and bounce
    if(dist > 15){this.x += this.velX;this.y += this.velY;  }else {
	this.DESTROY();
	
	}

	
	if (id == 10) {
	
    CRTAC.fillStyle="blue";
    CRTAC.fillRect(this.x, this.y, 21, 21);
    } else if(id==1){
	
	CRTAC.fillStyle="red";
    CRTAC.fillRect(this.x, this.y, 1, 1);
	
	}
	else if(id==2){
	CRTAC.fillStyle="lime";
    CRTAC.fillRect(this.x, this.y, 1, 1);
	
	
	}
	
	
    };
	
	
all_rock.push(this);

}


//var NIK = new ROCK();




setTimeout(function(){E("monsters").src = "../mly.html";} , 1522 );




