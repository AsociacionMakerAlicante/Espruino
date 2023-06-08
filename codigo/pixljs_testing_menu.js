// Ejemplo practico de menu v 20230508
var mainmenu = {
  "" : {
    "title" : "-- Menus en un Espruino --",
	"fontHeight": 8, //default is 6
  },
  "Backlight On" : function() { LED1.set(); 
      console.log("Luz activada");},
  "Backlight Off" : function() { LED1.reset(); 
	  console.log("Luz desactivada");},
  "Anuncio" : function() { E.showMenu(anuncio); },
  "Hardware" : function() { E.showMenu(hardware); },
  "Exit" : function() { E.showMenu(); }
};

// Submenu
var anuncio = {
  "" : {
    "title" : "-- Menu Anuncios/activ --",
	"fontHeight": 8, //default is 6	
	//limpiar tras textos graficos previos
	"predraw": function(gfx) {
		g.clear();
	    console.log("clearscreen antes de menu");}
  },
  "Taller Espruino" : function() {   
      g.clear();
      g.setFontVector(15);
      g.drawString("Taller Espruino",10,5);
	  g.setFontVector(10);
      g.drawString("Jueves 8 Junio 18:00",10,20);      
	  g.setFontVector(8);
      g.drawString("MakerALC - Las Cigarreras",10,50);
      g.flip(); 
  }, 
  "REPAIRCAFE" : function() { 
      g.clear();
      g.setFontVector(13);
      g.drawString("REPAIRCAFE ALC",10,5);
	  g.setFontVector(10);
      g.drawString("Martes 13 Junio 18:30",10,20);      
	  g.drawString("MakerALC ",10,40);
      g.drawString("Las Cigarreras",10,55);
      g.flip(); 
  }, 
  "< Back" : function() {g.clear(); g.reset();console.log("vuelta a Menu principal"); E.showMenu(mainmenu); }
};
var hardware = {
  "" : {
    "title" : "-- Hardware specs --",
	"fontHeight": 8, //default is 6
	"predraw": function(gfx) {
		  g.clear();
	      console.log("clearscreen antes de menu");
	}
  },  
  "Pixl.JS info" :  function() {   
      g.clear();
      g.setFontVector(10);
      g.drawString("placa :"+process.env.BOARD+" FW: "+process.env.VERSION,10,5);
	  g.setFontVector(8);
      g.drawString("RAM "+process.env.RAM+" STORE : "+process.env.STORAGE,10,20);      
      g.drawString("Free :"+process.memory().free+" Temp: "+E.getTemperature(),10,40);
      g.flip(); 
  },   
  "< Back" : function() {g.clear(); g.reset(); E.showMenu(mainmenu); }
};

console.log("Main - menu");
g.clear();  //clean screen from previous graphs
g.reset(); 
E.showMenu(mainmenu);