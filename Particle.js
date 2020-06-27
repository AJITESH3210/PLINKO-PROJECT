class Particle{
    constructor(x, y, r){
        var options ={
            restitution : 0.4
        }
        this.r = r;
    
        this.body = Bodies.circle(this.x, this.y, r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(po.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
        for(var j = 40; j <= width; j = j+50){
            plinkos.push(new Plinko(j,75));
          }
          for(var j = 15; j <= width; j = j+50){
            plinkos.push(new Plinko(j,175));
          }
    }
}

