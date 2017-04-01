function setup() { 
  createCanvas(400, 400);
} 
var x = 50
var y = 50
function draw() { 
	background('cyan');
  
	
  //arc(180,50,80,80,2,7.2,PIE);
	if(x<90) {ellipse(100,50,15,15)};
	
	
 if(x<200)
	arc(x,50,80,80,.5,5.6,PIE);
	if(x<130) {ellipse(140,50,15,15)}
	
	//{arc(x,50,80,80,.5,5.6,PIE);}
	if(x<165) {ellipse(180,50,15,15)}
	
	//arc(x,y,80,.5,5.6,PIE)

		
	x=x+1
	y=y+1
}

