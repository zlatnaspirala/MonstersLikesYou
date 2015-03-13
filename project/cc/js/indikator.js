 
 function DRAW(){
 
 window["PROGRAM"] = setTimeout(draw , App.INTERVAL);
 //MONITOR.GET_EKRAN_H()
   CRTAC.fontSize = "40px";
 function draw(){
 
   CRTAC.fillStyle="black";
   CRTAC.fillRect(0,0,MONITOR.GET_EKRAN_W(),640);
 
 
 
 var a=0;
 
 for(var i=0;i<GUSTINA*GUSTINA;i++){

 
  try{
  
 if (_N_[i] == "0") {
 if (a > 12){ 
 
 window["NIK"].SET(notesPosX[i],notesPosY[i] );
 }
 
   
 
 /*
  for (var j=1;j<a;j++){
 CRTAC.fillStyle="white";
  //CRTAC.fillRect(notesPosX[i-j],notesPosY[i-j] , 1  , 1  );
   CRTAC.fillText(i,notesPosX[i-j],notesPosY[i-j] , notes[0].area.width , notes[0].area.height );
  }
  */

 a=0;
 //}
 //CRTAC.fillRect(notesPosX[i],notesPosY[i] , notes[0].area.width , notes[0].area.height );
 CRTAC.fillStyle="red";
  CRTAC.strokeStyle ="blue";
 // CRTAC.strokeRect(notesPosX[i],notesPosY[i] , 44 , 44 );
 if (i == 10) {
 CRTAC.fillText("Rotate  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 13) {
 CRTAC.fillText("Forward  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 15) {
 CRTAC.fillText("Attack  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 47) {
 CRTAC.fillText("Clear  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 
 
 }
//###############################
 else
 {//ACTIVE
 //###############################
 
 a++;
 //ACTIVE
 CRTAC.fillStyle="blue";
  CRTAC.strokeStyle ="red";
  
 CRTAC.strokeRect(notesPosX[i],notesPosY[i] , 44 , 44 );
 if (i == 10) {
 CRTAC.fillText("Rotate  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 13) {
 CRTAC.fillText("Forward  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 15) {
 CRTAC.fillText("Attack  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 if (i == 47) {
 CRTAC.fillText("Clear  ", notesPosX[i],notesPosY[i] , 44 , 44 );
 }
 //###############################
 }
 //###############################
 
 }catch(e){ }
 
 
 }
  
 
 
 // CRTAC.fillRect(notesPosX[120],notesPosY[120] , 11  , 11  );//napred
 // CRTAC.fillText("FORWARD",notesPosX[120] - 60,notesPosY[120] , 100 , 100 );
  
  
 // CRTAC.fillRect(notesPosX[1058],notesPosY[1058] , 11  , 11  );//rottate
//  CRTAC.fillText("Turn arround",notesPosX[1058],notesPosY[1058] , 100 , 100 );
  
  
  //CRTAC.fillRect(notesPosX[241],notesPosY[241] , 11  , 11  );
  //CRTAC.fillText("disable all",notesPosX[241]-20,notesPosY[241] , 100 , 100 );
 //CRTAC.fillRect(0,0,MONITOR.GET_W()/4,MONITOR.GET_H()/4);
 
 /*
  all_rock.pop();
   all_rock.pop();
 
 
 if (all_rock[0] !== undefined ) {
 for (var x=0; x<all_rock.length;x++){
 try{
 
 all_rock[x].DRAW(0);
 
 all_rock[x].DRAW(1);
  all_rock[x].DRAW(2);
 
}catch(e) { all_rock.pop();}
 }
  }
   
 */
 
 
 
 setTimeout(update , App.INTERVAL);
 }//
 
 
 
 function update(){
 
  
 
  draw();
 }
 
 
 
//#####################################
 }// end of DRAW 
//##################################### 
 
 
 

 