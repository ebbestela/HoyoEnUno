

// Crea la variable de canvas 
canvas = new fabric.Canvas('can')

//Establece las posiciónes para la pelota y el agujero.
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj)
	});
	// escribe el código para subir la imagen de golf al canvas
	new_image();
}

function new_image()
{
	// escribe el código para subir la imagen de la pelota al canvas
	fabric.Image.fromURL("ball.png" , function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50)
		ball_obj.scaleToHeight(50)
		ball_obj.set({
			top:ball_y,
			left:ball_x
	});
canvas.add(ball_obj);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	if ((ball_y == hole_y) && (ball_x == hole_x))
	{
canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML = "¡lo lograste!";
document.getElementById("can").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escribe el código para mover la pelota hacia arriba.
		ball_y = ball_y - block_image_height;
console.log("altura de la imagen" + block_image_height)
console.log("ball position X=" + ball_x + " Y=" + ball_y);
canvas.remove(ball_obj);
new_image();
	}

	function down()
	{
		 // Escribe el código para mover la pelota hacia abajo.
		 ball_y = ball_y + block_image_height;
console.log("altura de la imagen" + block_image_height)
console.log("ball position X=" + ball_x + " Y=" + ball_y);
canvas.remove(ball_obj);
new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("altura de la imagen" + block_image_width)
			console.log("ball position X=" + ball_x + " Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();		// Escribe el código para mover la pelota hacia la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("altura de la imagen" + block_image_width)
			console.log("ball position X=" + ball_x + " Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();// Escribe el código para mover la pelota hacia la derecha.
		}
	}
	
}

