var jet,jetImg;
var asteroidImg;
var coinImg,coinGroup;
var distance = 0;
var asteroidGroup;
var bg;
var gameState = "play";

function preload()
{
  jetImg = loadImage("jet.png");
  asteroidImg = loadImage("asteroid.png");
  coinImg = loadImage("coin.png");
}

function setup()
{
  canvas = createCanvas(400,400);

  jet = createSprite(200,200,50,20);
  jet.addImage(jetImg);
  jet.scale = 0.5;

  asteroidGroup = new Group();
  coinGroup = new Group();

}

function draw() 
{  

 background("white");

  camera.position.x=jet.x;
  camera.position.y=jet.y;

  jet.velocityX=0;
  jet.velocityY=0;


  if(keyDown(UP_ARROW))
  {
    jet.velocityY=-3;
    distance++
  }

  if(keyDown(RIGHT_ARROW))
  {
    jet.velocityX=3;
  }

  if(keyDown(LEFT_ARROW))
  {
    jet.velocityX=-3;
  }

  spawnObstacles();



    drawSprites();
   
}

  function spawnObstacles()
  {
    if(frameCount % 100 === 0)
    {
    var asteroid = createSprite(random(0,300),0,20,20);
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.5;
    asteroid.lifetime=200;
    asteroid.velocityY=3;
    asteroidGroup.add(asteroid);
    }
  }