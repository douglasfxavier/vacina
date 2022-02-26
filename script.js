
function seringa() {
	var canvas = document.getElementById('vacina');
	var ctx = canvas.getContext('2d');

	// ctx.beginPath();
	// ctx.fillStyle = "#C1CDCD";
	// ctx.fillRect(140, 40, 520, 170);
	// ctx.stroke();

	
    // ctx.moveTo(650,125);
	// ctx.lineTo(800,125);
	// ctx.stroke();

    // ctx.moveTo(60, 100);
	// ctx.lineTo(150,100);
	// ctx.stroke();

	// ctx.moveTo(60, 150);
	// ctx.lineTo(150,150);
	// ctx.stroke();

	// ctx.moveTo(60, 60);
	// ctx.lineTo(60,190);
	// ctx.stroke();

	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(50, 50, 20, 150);
	

	


	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(70, 100, 80, 50);




    
	var grd = ctx.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, "white");
	grd.addColorStop(1, "#40E0D0");

	ctx.fillStyle = grd;
	ctx.fillRect(155, 55, 490, 145);


	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(650, 120, 150, 10);
	ctx.stroke();


    // ctx.moveTo(650,125);
	// ctx.lineTo(800,125);
	// ctx.stroke();

	// ctx.moveTo(60, 125);
    // ctx.lineTo(150,125);
	// ctx.stroke();

	// ctx.moveTo(60, 60);
	// ctx.lineTo(60,190);
	// ctx.stroke();

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

    ctx.beginPath();
    ctx.arc(60, 200, 10, 0, Math.PI*1);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(60, 50, 10, 10, Math.PI*1);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(800, 125, 5, 10, Math.PI*1);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(60, 100, 5, 10, Math.PI*1);
    ctx.fill();



}

function escrever() {
	var canvas = document.getElementById('vacina');
	var ctx = canvas.getContext('2d');
	
	texto = document.getElementById('ano').innerHTML
	
	ctx.rotate(90 * Math.PI / 180);
	ctx.fillStyle = "#000000"
    ctx.font = "16px times";
    ctx.fillText(texto, 150 , -165);
    ctx.restore()
}
