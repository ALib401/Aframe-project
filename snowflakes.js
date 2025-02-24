
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowflakes = [];

window.onload = function(){
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 700; i++){
    let x = rnd(-150, 150);
    let y = rnd(20, 120);
    let z = rnd(-150, 150);
    let snowflake = new Snowflake(x,y,z);
    snowflakes.push(snowflake);
  }

  loop();
}

function loop(){
  for(let snowflake of snowflakes){
    snowflake.fall();
  }
  window.requestAnimationFrame(loop);
}
