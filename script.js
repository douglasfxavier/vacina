
function seringa() {
	var canvas = document.getElementById('vacina');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(50, 50, 20, 150);
	
	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(70, 100, 80, 50);

	ctx.fillStyle = "#40E0D0";
	ctx.fillRect(155, 55, 490, 145);

	ctx.fillStyle = "#C1CDCD";
	ctx.fillRect(650, 120, 150, 10);

}
function draw() {
	var canvas = document.getElementById('vacina');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ano1 = document.getElementById('1796').innerHTML
		ano2 = document.getElementById('1955').innerHTML

		linha(ctx,170, 140, 170,70);
		linha(ctx,190, 130, 190,80);
		linha(ctx,210, 130, 210,80);
		linha(ctx,230, 130, 230,80);
		linha(ctx,250, 140, 250,70);

		linha(ctx,270, 130, 270,80);
		linha(ctx,290, 130, 290,80);
		linha(ctx,310, 130, 310,80);
		linha(ctx,330, 140, 330,70);
		linha(ctx,350, 130, 350,80);
		linha(ctx,370, 130, 370,80);

		linha(ctx,390, 130, 390,80);
		linha(ctx,410, 140, 410,70);
		linha(ctx,430, 130, 430,80);
		linha(ctx,450, 130, 450,80);

		linha(ctx,470, 130, 470,80);
		linha(ctx,490, 140, 490, 70);
		linha(ctx,510, 130, 510, 80);
		linha(ctx,530, 130, 530, 80);
		linha(ctx,550, 130, 550, 80);
		linha(ctx,570, 140, 570, 70);

		linha(ctx,590, 130, 590, 80);
		linha(ctx,610, 130, 610, 80);
		linha(ctx,630, 130, 630, 80);





		circulos(ctx,60, 200, 10, 0);
		circulos(ctx,60, 50, 10, 10);
	
		
		roundedRect(ctx,150,50,500,150,26);
		
		escrever(ctx, ano2, 145, -245)
		escrever(ctx, ano2, -175, 185)
		}
	}




//função para escrever no canvas
function escrever(ctx, texto, posX, posY) {
	
	ctx.rotate(90 * Math.PI / 180);
	ctx.fillStyle = "#000000"
    ctx.font = "16px times";
    ctx.fillText(texto, posX , posY);
	


}

//função para desenhar linhas no canvas
function linha(ctx, AntX, AntY, x, y) {

	ctx.moveTo(AntX, AntY);
	ctx.lineTo(x,y);
	ctx.stroke();

}

//função para desenhar circulos no canvas
function circulos(ctx,x,y,r,sAngle) {

	ctx.beginPath();
    ctx.arc(x, y, r, sAngle, Math.PI*1);
    ctx.fill();

}

//função para desenhar retangulos com pontas arredondadas
function roundedRect(ctx,x,y,width,height,radius){
				
	ctx.beginPath();
	ctx.strokeStyle = "#C1CDCD";
	ctx.lineWidth = 10;
	ctx.lineCap = "butt";
	ctx.moveTo(x,y+radius);
	ctx.lineTo(x,y+height-radius);
	ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
	ctx.lineTo(x+width-radius,y+height);
	ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
	ctx.lineTo(x+width,y+radius);
	ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
	ctx.lineTo(x+radius,y);
	ctx.quadraticCurveTo(x,y,x,y+radius);
	
	ctx.stroke();
}
