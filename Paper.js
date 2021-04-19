class Paper class{

constructor(x,y){

    var options= {

        restitution:0.3,
        friction:0,
        density:1.2
 };

    this.body=Bodies.rectangle(x,y,20,20);
    this.width=20;
    this.height=20;
    this.image=loadImage("paper.png");
    World.add(world.this.body);
}
    
}
