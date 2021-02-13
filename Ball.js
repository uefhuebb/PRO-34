class Ball
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,	
            restitution	: 0,
            frictionAir: 0.005,
            density : 1.2	
			}
		this.x=x;
		this.y=y;
		this.r=r
		
        this.body=Bodies.circle(this.x, this.y, this.r , options);
		this.image=loadImage('images/Superhero-01.png')
        
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
            fill(128,128,128)
            imageMode(CENTER);
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}