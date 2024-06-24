//My sketch: a fall bike ride through the kokosing gap trail on acid
//My ode to the gap trail and fall at Kenyon
//And an ode to vivid colors
//with fractal trees, fractal sky, and patterns in the grass. 
//sunlight

//sunset may be a better call with green trees
//https://www.google.com/search?q=gap+trail+kokosing&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjl8P6m-j7AhWJpXIEHV7NBMAQ_AUoAnoECAIQBA&biw=2560&bih=1360&dpr=2#imgrc=YLndFqj5otS2gM

//TWEAK: full beige + no path 


function setup() {
	createCanvas(600, 850);
	background(255);
	colorMode(HSB);
	frameRate(5);
}

function draw() {

	//background('#002E02');
	background('#EAE0C8');
	
	/*
	fill('#EAE0C8');
	beginShape();
	vertex(0, 0);
	vertex(600, 0);
	vertex(600, 425);
	vertex(0, 425);
	endShape();
	*/


	for (let i = 0; i < 60; i++) {
		if (i % 2 == 1) {
			fill('orange');
		} else {
			fill('red');
		}
		circle(300, 365, 600 - 10 * i);
	}

	fill('#EBD224');
	circle(300, 365, 90);

	//the trail
	//we should make this a triangle. 
	//this is an every waking hour until friday thing. Thats how the cookie has crumbled. 
	//lets work. 



	/*
	fill('#8B8B8B');
	beginShape();
	vertex(85, 850);
	vertex(250, 470);
	vertex(330, 470);
	vertex(515, 850);
	endShape();

	fill('#BEB1A1');
	noStroke();
	beginShape();
	vertex(269, 508);
	vertex(349, 509);
	vertex(351, 512);
	vertex(269, 512);
	endShape();

	beginShape();
	vertex(262, 518);
	vertex(352, 518);
	vertex(354, 522);
	vertex(262, 525);
	endShape();

	beginShape();
	vertex(359, 529);
	vertex(362, 533);
	vertex(337, 533);
	vertex(328, 529);
	endShape();


	beginShape();
	vertex(262, 555);
	vertex(274, 563);
	vertex(379, 574);
	vertex(373, 558);
	endShape();

	beginShape();
	vertex(418, 651);
	vertex(463, 746);
	vertex(123, 763);
	vertex(201, 583);
	endShape();

	beginShape();
	vertex(418, 651);
	vertex(463, 746);
	vertex(123, 763);
	vertex(201, 583);
	endShape();

	beginShape();
	vertex(491, 806);
	vertex(436, 806);
	vertex(421, 816);
	vertex(471, 826);
	endShape();

	beginShape();
	vertex(491, 806);
	vertex(436, 806);
	vertex(421, 816);
	vertex(471, 826);
	endShape();

	fill('#8B8B8B');
	beginShape();
	vertex(165, 668);
	vertex(264, 668);
	vertex(308, 684);
	vertex(158, 684);
	endShape();
	*/

	//continue to do this to give the illusion of sunlight. Simply grunt work. 

	//next, lets make the bridge. Well, at least the light part of the thing. As a triangle. Then we can make the sky. 


	/*
	fill('#E6E2D9')
	beginShape();
	vertex(250, 470);
	vertex(330, 470);
	vertex(290, 365);
	endShape();

	push();
	stroke('#B8BCC7')
	line(255, 456, 323, 456);
	line(260, 441, 318, 441);
	line(265, 428, 311, 428);
	line(270, 417, 309, 417);
	line(276, 406, 306, 406);
	line(280, 394, 298, 394);


	pop();
	*/
	//next, lets make the sky



	stroke(50);
	push();

	//trees on the left 
	translate(150, 500);
	branch(100);

	translate(-70, 200);
	branch(100);
	translate(-70, 200);
	branch(100);
	translate(-70, 200);
	branch(100);
	translate(-70, 200);
	branch(100);
	noLoop();
	//trees on the right
	translate(650, 200);
	branch(100);
	translate(-20, -150);
	branch(100);
	translate(-20, -150);
	branch(100);
	translate(-20, -100);
	branch(100);
	translate(-20, -100);
	branch(100);
	pop();
	//filling in the glaring holes 
	push();
	fill("black");
	//if you have the right side, subtract 65 from mouseX
	text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX - 65, mouseY);
	pop();



}

function branch(len) {
	angle = PI / random(9);
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 2) {
		if (len < 3) {
			strokeWeight(2);
			stroke('green');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.8);
			pop();

		} else if (len < 4) {
			strokeWeight(2);
			stroke('#9DBE53');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.8);
			pop();

		} else if (len < 5) {
			strokeWeight(2);
			stroke('#536A40');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.8);
			pop();

		} else if (len < 6) {
			strokeWeight(2);
			stroke('#DBE197');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.8);
			pop();

		} else if (len < 7) {
			strokeWeight(2);
			stroke('#464B2D');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.8);
			pop();

		} else {
			strokeWeight(3);
			stroke('#414D27');
			push();
			rotate(angle);
			branch(len * 0.75);
			pop();
			push();
			rotate(-angle);
			branch(len * 0.7);
			pop();
		}
	}
}
