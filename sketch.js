var gameState= "start";
var background;
var ObstacleImg1, ObstacleImg2,  ObstacleImg3;
var penguin_walking, penguin_collided;


function preload(){
  penguin_walking = loadAnimation("P1.png","P2.png","P3.png")
  penguin_collided = loadImage()
  ObstacleImg1 = loadImage("Obstacle1.png")
}


