class SlingShot{
    constructor(bird,log){

      var  options = {
            bodyA: bird ,
            bodyB: log,
            length: 4,
            stiffness: 0.2
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

display(){
    var posA = this.sling.bodyA.position;
    var posB = this.sling.bodyB.position;
    push ();
    strokeWeight(4);
    line (posA.x,posA.y, posB.x, posB.y);
    pop ();
}

}