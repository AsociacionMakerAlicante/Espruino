//test de salida a pantalla

var vModel=process.env.BOARD;
//center of the screen E.showMessage

E.showMessage("mensaje centrado en un "+vModel);


setWatch(function() {
  E.showMessage("mensaje BTN4...");  
},BTN4,{repeat:true});

setWatch(function() {
  E.showMessage("mensaje BTN1...");  
},BTN1,{repeat:true});

setWatch(function() {
  E.showMessage("mensaje BTN2...");  
},BTN2,{repeat:true});

setWatch(function() {
  E.showMessage("mensaje BTN3...");  
},BTN3,{repeat:true});