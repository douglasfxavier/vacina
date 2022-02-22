function seringa() {
    var canvas = document.getElementById('vacina');
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
	ctx.rect(150, 50, 500, 150);
	ctx.stroke();
    ctx.moveTo(650,125);
	ctx.lineTo(800,125);
	ctx.stroke();

    ctx.moveTo(60, 125);
	ctx.lineTo(150,125);
	ctx.stroke();

	ctx.moveTo(60, 60);
	ctx.lineTo(60,190);
	ctx.stroke();

    
	var grd = ctx.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, "white");
	grd.addColorStop(1, "#40E0D0");

	ctx.fillStyle = grd;
	ctx.fillRect(300, 50, 350, 150);

	


    ctx.moveTo(650,125);
	ctx.lineTo(800,125);
	ctx.stroke();

	ctx.moveTo(60, 125);
    ctx.lineTo(150,125);
	ctx.stroke();

	ctx.moveTo(60, 60);
	ctx.lineTo(60,190);
	ctx.stroke();

	ctx.moveTo(170, 140);
	ctx.lineTo(170,70);
	ctx.stroke();

		

	ctx.moveTo(190, 130);
	ctx.lineTo(190,80);
	ctx.stroke();

	ctx.moveTo(210, 130);
	ctx.lineTo(210,80);
	ctx.stroke();

	ctx.moveTo(230, 130);
	ctx.lineTo(230,80);
	ctx.stroke();

	ctx.moveTo(250, 140);
	ctx.lineTo(250,70);
	ctx.stroke();

	ctx.moveTo(270, 130);
	ctx.lineTo(270,80);
	ctx.stroke();

	ctx.moveTo(290, 130);
	ctx.lineTo(290,80);
	ctx.stroke();

	ctx.moveTo(310, 130);
	ctx.lineTo(310,80);
	ctx.stroke();
		
	ctx.moveTo(330, 140);
	ctx.lineTo(330,70);
	ctx.stroke();

	ctx.moveTo(350, 130);
	ctx.lineTo(350,80);
	ctx.stroke();

	ctx.moveTo(370, 130);
	ctx.lineTo(370,80);
	ctx.stroke();

	ctx.moveTo(390, 130);
	ctx.lineTo(390,80);
	ctx.stroke();
		
	ctx.moveTo(410, 140);
	ctx.lineTo(410,70);
	ctx.stroke();

	ctx.moveTo(430, 130);
	ctx.lineTo(430,80);
	ctx.stroke();

	ctx.moveTo(450, 130);
	ctx.lineTo(450,80);
	ctx.stroke();

	ctx.moveTo(470, 130);
	ctx.lineTo(470,80);
	ctx.stroke();

	ctx.moveTo(490, 140);
	ctx.lineTo(490, 70);
	ctx.stroke();

    

}

function escrever() {
	var canvas = document.getElementById('vacina');
    var ctx = canvas.getContext('2d');

    texto = document.getElementById('ano').innerHTML

	ctx.font = "16px Arial";
    ctx.fillStyle = "#000000"
    // ctx.rotate(20 * Math.PI / 90);
	ctx.fillText(texto, 160, 160);
}
