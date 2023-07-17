canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Crea el array "nasa_mars_images_array" y almacena todos los archivos de imágenes.


//Genera un número aleatorio y almacénalo en la varible "random_number"


console.log(random_number);
rover_width = 100;
rover_height = 90;

/*Pasa este número aleatorio como índice al array y actualiza la variable background_image 
con lo siguiente*/


//Agrega a la consola esta variable background_image para ver cuando las imágenes aparece la imagen, cada vez que refresquemos la página. 



rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // establece una función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable con una nueva imagen
	rover_imgTag.onload = uploadrover; // establece una función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
  if(rover_y >=0)

rover_y = rover_y - 10;
console.log("cuando se prosione la flecha arriba, x= "+ rover_x +"| y ="+rover_y);
uploadBackground();
uploadrover();




function right()
{
  if(rover_x <=700)
rover_x = rover_x + 10;
console.log("cuando se prosione la flecha derecha, x = "+ rover_x +"| y ="+rover_y);
uploadBackground();
uploadrover();
}




function left()
{
  if(rover_x >=0)
rover_x = rover_x - 10;
console.log("cuando se prosione la flecha izquierda, x = "+ rover_x +"| y ="+rover_y);
uploadBackground();
uploadrover();
}






//Agrega el código para la función right()::












//Actividad adicional
//Agrega el código para la función left()::








	