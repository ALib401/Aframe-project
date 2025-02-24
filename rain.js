
class Snowflake{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.7;
    this.recycle = true;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.1);
    this.obj.setAttribute("opacity",0.65);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  fall(){
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.recycle){
      this.y -= this.dy;
      if(this.y < 0){
        this.x = rnd(-150,150);
        this.y = rnd(20,100);
        this.z = rnd(-150,150);
      }
    }else{
      if(this.y > 0){
        this.y -= this.dy;
      }
    }
  }
}
