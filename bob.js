class bob{
constructor(x,y,r){
var options={
isStatic:true,
restitution:1,
friction:0,
density:1.2

}
this.body = Bodies.circle(x, y, r/2, options);
this.x = x;
this.y = y;
this.r = r;
World.add(world, this.body);

}
display(){
var pos = this.body.position
push();
translate(pos.x, pos.y);
ellipse(0,0,this.r, this.r);
pop();
}



}