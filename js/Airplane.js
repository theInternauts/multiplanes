function Airplane( color ){
	this.color = (color) ? color : '0x0000FF'
}

Airplane.prototype.getColor = function(){ return this.color }