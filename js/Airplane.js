function Airplane( color ){
	var geometry = new THREE.CylinderGeometry( 0, 10, 100, 3 )
	var material = new THREE.MeshBasicMaterial()
	this.color = (color) ? color : '0x0000FF'
	this.mesh = new THREE.Mesh(geometry, material)
	this.moveState = { up: false, down: false, left: false, right: false, forward: false, back: false, pitchUp: false, pitchDown: false, yawLeft: false, yawRight: false, rollLeft: false, rollRight: false }

	//return airplane
}

Airplane.prototype.getColor = function(){ return this.color }