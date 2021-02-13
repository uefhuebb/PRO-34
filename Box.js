class Box
{
	constructor(x,y)
	{
		var options={
            isStatic:false,	
            restitution	: 0.8,
            friction : 1,
            density : 1
			}
		this.x=x;
		this.y=y;
		this.r=55
		
        this.body=Bodies.rectangle(this.x, this.y, this.r,this.r , options);
        
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
            fill('red')
            rectMode(CENTER);
			rect(0,0,this.r,this.r);
			pop()
			
	}

}