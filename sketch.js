var background,red_angrybird,red_angrybird1,red_angrybird2,red_angrybird3,yellow_angrybird,bricksgray,bricksgray1,brick1,blackbrick,blackbrick1,monstor1,invisiblelayer,gameover,backsong,monstor2,monstor3,monstor4,wood1,wood2,wood3,wood4,wood5,wood6,wood,ground;

var score = 0 ;

var chancesleft = 4 ;

var gameState  = 1 ;

var play = 1 ; 

var end = 1 ; 

function preload(){
  red_angrybirdimage = loadImage("angrybirdimage.png");
  background_image = loadImage("back.jpg");
  shot_image = loadImage("sin.png"); 
  wood1_image = loadImage("wood1.png");
  wood2_image = loadImage("wood2.png");
  wood3_image = loadImage("wood3.png");
  tnt1_image = loadImage("tnt1.png");
  tnt2_image = loadImage("tnt2.png");
  monstor1_image = loadImage("monstor1.png");
  monstor2_image = loadImage("monstor2.png");
  monstor3_image = loadImage("monstor3.png");
  monstor4_image = loadImage("monstor4.png");
  bricksgray_image = loadImage("bricksgray.png");
  brick1_image = loadImage("brick1.png");
  blackbrick_image = loadImage("blackbrick.png");
  gameover_image = loadImage("gameover.png");
  image_1 = loadImage("1st.png");
  image_2 = loadImage("2nd.png");
  image_3 = loadImage("3rd.png");
  image_4 = loadImage("4th.png");
  // first_image = loadImage("first.JPG");
  // hand_image = loadImage("hand.png");
  // sinback = loadImage("sinart.png");
  backsong = loadSound("music.mp3");
  gameoversound = loadSound("gameoversound.mp3")
}

function setup() {
  createCanvas(1100,580);
  backsong.play();
  background = createSprite(500,260,10,10);
  background.addImage(background_image);
  background.scale = 4.2 ;
  gameover = createSprite(500,200,10,10);
  gameover.addImage(gameover_image);
  gameover.scale = 2 ;
  gameover.visible = false ;
  ground = createSprite(600,550,100000,20);
  ground.visible = false ;
  red_angrybird = createSprite(200,403,10,10);
  red_angrybird.addImage(red_angrybirdimage);
  red_angrybird1 = createSprite(150,500,10,10);
  red_angrybird1.addImage(red_angrybirdimage);
  red_angrybird1.scale = 0.1 ;
  red_angrybird2 = createSprite(100,500,10,10);
  red_angrybird2.addImage(red_angrybirdimage);
  red_angrybird2.scale = 0.1 ;
  red_angrybird3 = createSprite(50,500,10,10);
  red_angrybird3.addImage(red_angrybirdimage);
  red_angrybird3.scale = 0.1 ;
  red_angrybird.scale = 0.1 ;
  shot = createSprite(225,450,10,10);
  shot.addImage(shot_image);
  shot.scale = 0.5 ;
  tnt1 = createSprite(880,355,10,10);
  tnt1.addImage(tnt1_image);
  tnt1.scale = 0.3 ;
  tnt2 = createSprite(670,470,10,10);
  tnt2.addImage(tnt2_image);
  tnt2.scale = 0.5 ;
  wood1 = createSprite(905,195,10,10);
  wood1.addImage(wood1_image);
  wood1.scale = 1 ;
  wood1copy1 = createSprite(825,195,10,10);
  wood1copy1.addImage(wood1_image);
  wood1copy1.scale = 1 ;
  wood1copy2 = createSprite(825,100,10,10);
  wood1copy2.addImage(blackbrick_image);
  wood1copy2.scale = 1 ;
  wood2 = createSprite(635,420,10,10);
  wood2.addImage(wood2_image);
  wood2.scale = 1 ;
  wood2copy1 = createSprite(950,420,10,10);
  wood2copy1.addImage(wood2_image);
  wood2copy1.scale = 1 ;
  wood2copy2 = createSprite(930,300,10,10);
  wood2copy2.addImage(wood2_image);
  wood2copy2.scale = 1 ;
  wood2copy3 = createSprite(650,300,10,10);
  wood2copy3.addImage(wood2_image);
  wood2copy3.scale = 1 ;
  wood2copy4 = createSprite(755,100,10,10);
  wood2copy4.addImage(blackbrick_image);
  wood2copy4.scale = 1 ;
  wood2copy5 = createSprite(925,100,10,10);
  wood2copy5.addImage(blackbrick_image);
  wood2copy5.scale = 1 ;
  wood2copy6 = createSprite(845,67,10,10);
  wood2copy6.addImage(blackbrick_image);
  wood2copy6.scale = 0.8 ;
  wood3 = createSprite(790,470,10,10);
  wood3.addImage(wood3_image);
  wood3.scale = 1 ;
  wood3copy1 = createSprite(890,470,10,10);
  wood3copy1.addImage(wood3_image);
  wood3copy1.scale = 1 ;
  wood3copy2 = createSprite(990,470,10,10);
  wood3copy2.addImage(wood3_image);
  wood3copy2.scale = 1 ;
  wood3copy3 = createSprite(882,440,10,10);
  wood3copy3.addImage(wood3_image);
  wood3copy3.scale = 1.2 ;
  bricksgray = createSprite(900,400,10,10);
  bricksgray.addImage(bricksgray_image);
  bricksgray.scale = 1 ;
  bricksgray1 = createSprite(1000,400,10,10);
  bricksgray1.addImage(bricksgray_image);
  bricksgray1.scale = 1 ;
  bricksgray2 = createSprite(1100,400,10,10);
  bricksgray2.addImage(bricksgray_image);
  bricksgray2.scale = 1 ;
  bricksgray3 = createSprite(1200,400,10,10);
  bricksgray3.addImage(bricksgray_image);
  bricksgray3.scale = 1;
  brick1 = createSprite(1000,495,10,10);
  brick1.addImage(brick1_image);
  brick1.scale = 1;
  brick2 = createSprite(880,495,10,10);
  brick2.addImage(brick1_image);
  brick2.scale = 1;
  blackbrick = createSprite(740,200,10,10);
  blackbrick.addImage(blackbrick_image);
  blackbrick.scale = 1.2 ; 
  blackbrick1 = createSprite(925,200,10,10);
  blackbrick1.addImage(blackbrick_image);
  blackbrick1.scale = 1.2 ; 
  monstor1 = createSprite(865,985,10,10);
  monstor1.addImage(monstor1_image);
  monstor1.scale = 0.2 ;
  monstor2 = createSprite(890,265,10,10);
  monstor2.addImage(monstor2_image);
  monstor2.scale = 0.4 ;
  monstor3 = createSprite(780,395,10,10);
  monstor3.addImage(monstor3_image);
  monstor3.scale = 0.3 ;
  monstor3copy1 = createSprite(1000,395,10,10);
  monstor3copy1.addImage(monstor3_image);
  monstor3copy1.scale = 0.3 ;
  monstor4 = createSprite(885,250,10,10);
  monstor4.addImage(monstor4_image);
  monstor4.scale = 1.2 ;
  monstor4copy1 = createSprite(885,480,10,10);
  monstor4copy1.addImage(monstor4_image);
  monstor4copy1.scale = 1.2 ;
  monstor4copy2 = createSprite(785,575,10,10);
  monstor4copy2.addImage(monstor4_image);
  monstor4copy2.scale = 1.2 ;
  monstor4copy3 = createSprite(985,575,10,10);
  monstor4copy3.addImage(monstor4_image);
  monstor4copy3.scale = 1.2 ;
  invisiblelayer = createSprite(280,435,200,10);
  invisiblelayer.visible = false ;

}

function draw() {
  
    // first = createSprite(550,280,10,10);
    // first.addImage(first_image);
    // first.scale = 0.7 ;
  
    // if(mousePressedOver(first)){
      // reset(); 
    // }
    
    // button = createSprite(300,300,20,20);
    
    // hand = createSprite(300,400,10,10);
    // hand.addImage(hand_image);
    // hand.scale = 0.1 ;
    
  if(gameState === play){

    if(red_angrybird.isTouching(tnt2)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird1.isTouching(tnt2)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird2.isTouching(tnt2)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird3.isTouching(tnt2)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird.isTouching(tnt1)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird1.isTouching(tnt1)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird2.isTouching(tnt1)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird3.isTouching(tnt1)){
      wood1.velocityY = -60 ;
      wood1copy1.velocityY = -80 ;
      wood1copy2.velocityY = -40 ;
      wood2.velocityY = -90 ;
      wood2copy1.velocityY = -100 ;
      wood2copy2.velocityY = -120 ;
      wood2copy3.velocityY = -200 ;
      wood2copy4.velocityY = -55 ;
      wood2copy5.velocityY = -65 ;
      wood2copy6.velocityY = -95 ;
      wood3.velocityY = -85 ;
      wood3copy1.velocityY = -45 ;
      wood3copy2.velocityY = -70 ;
      wood3copy3.velocityY = -75 ;
      bricksgray.velocityY = -85 ;
      bricksgray1.velocityY = -95 ;
      bricksgray2.velocityY = -68 ;
      bricksgray3.velocityY = -74 ;
      brick1.velocityY = -70 ;
      brick2.velocityY = -90 ;
      blackbrick.velocityY = -93 ;
      blackbrick1.velocityY = -100 ;
      monstor1.velocityY = -69 ;
      monstor2.velocityY = -59 ;
      monstor3.velocityY = -89 ;
      monstor3copy1.velocityY = -65 ;
      monstor4.velocityY = -99 ; 
      monstor4copy1.velocityY = -125 ;
      monstor4copy2.velocityY = -135 ;
      monstor4copy3.velocityY = -124 ;
      tnt1.velocityY = -90 ;
      tnt2.x = 900000000 ;
      tnt2.y = 900000000 ;
      
    }
    
    if(red_angrybird.isTouching(wood1)){
      wood1.addImage(image_2);
      wood1.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood1copy1)){
      wood1copy1.addImage(image_3);
      wood1copy1.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood1copy2)){
      wood1copy2.addImage(image_4);
      wood1copy2.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2)){
      wood2.addImage(image_1);
      wood2.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy1)){
      wood2copy1.addImage(image_2);
      wood2copy1.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy2)){
      wood2copy2.addImage(image_3);
      wood2copy2.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy3)){
      wood2copy3.addImage(image_4);
      wood2copy3.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy4)){
      wood2copy4.addImage(image_1);
      wood2copy4.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy5)){
      wood2copy5.addImage(image_2);
      wood2copy5.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood2copy6)){
      wood2copy6.addImage(image_3);
      wood2copy6.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood3)){
      wood3.addImage(image_4);
      wood3.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood3copy1)){
      wood3copy1.addImage(image_1);
      wood3copy1.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood3copy2)){
      wood3copy2.addImage(image_2);
      wood3copy2.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(wood3copy3)){
      wood3copy3.addImage(image_3);
      wood3copy3.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(bricksgray)){
      bricksgray.addImage(image_4);
      bricksgray.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(bricksgray1)){
      bricksgray1.addImage(image_1);
      bricksgray1.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(bricksgray2)){
      bricksgray2.addImage(image_2);
      bricksgray2.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(bricksgray3)){
      bricksgray3.addImage(image_3);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(brick1)){
      brick1.addImage(image_4);
      brick1.velocityX = -5 ; 
    }
    
    if(red_angrybird.isTouching(brick2)){
      brick2.addImage(image_1);
      brick2.velocityX = -5 ; 
    }
    
    if(red_angrybird.isTouching(blackbrick)){
      blackbrick.addImage(image_2);
      blackbrick.velocityX = -5 ;
    }
    
    if(red_angrybird.isTouching(blackbrick1)){
      blackbrick1.addImage(image_3);
      blackbrick1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood1)){
      wood1.addImage(image_1);
      wood1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood1copy1)){
      wood1copy1.addImage(image_2);
      wood1copy1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood1copy2)){
      wood1copy2.addImage(image_3);
      wood1copy2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2)){
      wood2.addImage(image_4);
      wood2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy1)){
      wood2copy1.addImage(image_1);
      wood2copy1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy2)){
      wood2copy2.addImage(image_2);
      wood2copy2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy3)){
      wood2copy3.addImage(image_3);
      wood2copy3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy4)){
      wood2copy4.addImage(image_4);
      wood2copy4.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy5)){
      wood2copy5.addImage(image_1);
      wood2copy5.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood2copy6)){
      wood2copy6.addImage(image_2);
      wood2copy6.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood3)){
      wood3.addImage(image_3);
      wood3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood3copy1)){
      wood3copy1.addImage(image_4);
      wood3copy1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood3copy2)){
      wood3copy2.addImage(image_1);
      wood3copy2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(wood3copy3)){
      wood3copy3.addImage(image_2);
      wood3copy3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(bricksgray)){
      bricksgray.addImage(image_3);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(bricksgray1)){
      bricksgray1.addImage(image_4);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(bricksgray2)){
      bricksgray2.addImage(image_1);
      bricksgray2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(bricksgray3)){
      bricksgray3.addImage(image_2);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(brick1)){
      brick1.addImage(image_3);
      brick1.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(brick2)){
      brick2.addImage(image_4);
      brick2.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(blackbrick)){
      blackbrick.addImage(image_1);
      blackbrick.velocityX = -5 ;
    }
    
    if(red_angrybird1.isTouching(blackbrick1)){
      blackbrick1.addImage(image_2);
      blackbrick1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood1)){
      wood1.addImage(image_4);
      wood1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood1copy1)){
      wood1copy1.addImage(image_1);
      wood1copy1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood1copy2)){
      wood1copy2.addImage(image_2);
      wood1copy2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2)){
      wood2.addImage(image_3);
      wood2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy1)){
      wood2copy1.addImage(image_4);
      wood2copy1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy2)){
      wood2copy2.addImage(image_1);
      wood2copy2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy3)){
      wood2copy3.addImage(image_2);
      wood2copy3.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy4)){
      wood2copy4.addImage(image_3);
      wood2copy4.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy5)){
      wood2copy5.addImage(image_4);
      wood2copy5.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood2copy6)){
      wood2copy6.addImage(image_1);
      wood2copy6.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood3)){
      wood3.addImage(image_2);
      wood3.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood3copy1)){
      wood3copy1.addImage(image_3);
      wood3copy1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood3copy2)){
      wood3copy2.addImage(image_4);
      wood3copy2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(wood3copy3)){
      wood3copy3.addImage(image_3);
      wood3copy3.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(bricksgray)){
      bricksgray.addImage(image_2);
      bricksgray.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(bricksgray1)){
      bricksgray1.addImage(image_1);
      bricksgray1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(bricksgray2)){
      bricksgray2.addImage(image_2);
      bricksgray2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(bricksgray3)){
      bricksgray3.addImage(image_3);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(brick1)){
      brick1.addImage(image_4);
      brick1.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(brick2)){
      brick2.addImage(image_1);
      brick2.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(blackbrick)){
      blackbrick.addImage(image_2);
      blackbrick.velocityX = -5 ;
    }
    
    if(red_angrybird2.isTouching(blackbrick1)){
      blackbrick1.addImage(image_2);
      blackbrick1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood1)){
      wood1.addImage(image_3);
      wood.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood1copy1)){
      wood1copy1.addImage(image_4);
      wood1copy1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood1copy2)){
      wood1copy2.addImage(image_1);
      wood1copy2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2)){
      wood2.addImage(image_2);
      wood2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy1)){
      wood2copy1.vaddImage(image_1);
      wood2copy1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy2)){
      wood2copy2.addImage(image_4);
      wood2copy2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy3)){
      wood2copy3.addImage(image_3);
      wood2copy3.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy4)){
      wood2copy4.addImage(image_2);
      wood2copy4.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy5)){
      wood2copy5.addImage(image_1);
      wood2copy5.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood2copy6)){
      wood2copy6.addImage(image_4);
      wood2copy6.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood3)){
      wood3.addImage(image_3);
      wood3.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood3copy1)){
      wood3copy1.addImage(image_2);
      wood3copy1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood3copy2)){
      wood3copy2.addImage(image_1);
      wood3copy2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(wood3copy3)){
      wood3copy3.addImage(image_4);
      wood3copy3.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(bricksgray)){
      bricksgray.addImage(image_4);
      bricksgray.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(bricksgray1)){
      bricksgray1.addImage(image_3);
      bricksgray1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(bricksgray2)){
      bricksgray2.addImage(image_2);
      bricksgray2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(bricksgray3)){
      bricksgray3.addImage(image_1);
      bricksgray3.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(brick1)){
      brick1.addImage(image_4);
      brick1.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(brick2)){
      brick2.addImage(image_3);
      brick2.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(blackbrick)){
      blackbrick.addImage(image_2);
      blackbrick.velocityX = -5 ;
    }
    
    if(red_angrybird3.isTouching(blackbrick1)){
      blackbrick1.addImage(image_1);
      blackbrick1.velocityX = -5 ;
    }
    
    if(wood1.y < -1700){
       wood1.velocityY = 50 ;
    }
    
    if(wood1copy1.y < -1700){
       wood1copy1.velocityY = 100 ;
    }
    
    if(wood1copy2.y < -1700){
       wood1copy2.velocityY = 50 ;
    }
    
    if(wood2.y < -1700){
       wood2.velocityY = 50 ;
    }
    
    if(wood2copy1.y < -1700){
       wood2copy1.velocityY = 50 ;
    }
    
    if(wood2copy2.y < -1700){
       wood2copy2.velocityY = 50 ;
    }
    
    if(wood2copy3.y < -1700){
       wood2copy3.velocityY = 50 ;
    }
    
    if(wood2copy4.y < -1700){
       wood2copy4.velocityY = 50 ;
    }
    
    if(wood2copy5.y < -1700){
       wood2copy5.velocityY = 50 ;
    }
    
    if(wood2copy6.y < -1700){
       wood2copy6.velocityY = 50 ;
    }
    
    if(wood3.y < -1700){
       wood3.velocityY = 50 ;
    }
    
    if(wood3copy1.y < -1700){
       wood3copy1.velocityY = 50 ;
    }
    
    if(wood3copy2.y < -1700){
       wood3copy2.velocityY = 50 ;
    }
    
    if(wood3copy3.y < -1700){
       wood3copy3.velocityY = 50 ;
    }
    
    if(bricksgray.y < -1700){
       bricksgray.velocityY = 50 ;
    }
    
    if(bricksgray1.y < -1700){
       bricksgray1.velocityY = 50 ;
    }
    
    if(bricksgray2.y < -1700){
       bricksgray2.velocityY = 50 ;
    }
    
    if(bricksgray3.y < -1700){
       bricksgray3.velocityY = 50 ;
    }
    
    if(brick1.y < -1700){
       brick1.velocityY = 50 ;
    }
    
    if(brick2.y < -1700){
       brick2.velocityY = 50 ;
    }
    
    if(blackbrick.y < -1700){
       blackbrick.velocityY = 50 ;
    }
    
    if(blackbrick1.y < -1700){
       blackbrick1.velocityY = 50 ;
    }
    
    if(monstor1.y < -1700){
       monstor1.velocityY = 50 ;
    }
    
    if(monstor2.y < -1700){
       monstor2.velocityY = 50 ;
    }
    
    if(monstor3.y < -1700){
       monstor3.velocityY = 50 ;
    }
    
    if(monstor3copy1.y < -1700){
       monstor3copy1.velocityY = 50 ;
    }
    
    if(monstor4.y < -1700){
       monstor4.velocityY = 50 ;
    }
    
    if(monstor4copy1.y < -1700){
       monstor4copy1.velocityY = 50 ;
    }
    
    if(monstor4copy2.y < -1700){
       monstor4copy2.velocityY = 50 ;
    }
    
    if(monstor4copy3.y < -1700){
       monstor4copy3.velocityY = 50 ;
    }
    
    if(wood1.y > 450){
       wood1.y = 450 ;
    }
    
    if(wood1copy1.y > 450){
       wood1copy1.y = 450 ;
    }
    
    if(wood1copy2.y > 450){
       wood1copy2.y = 450 ;
    }
    
    if(wood2.y > 450){
       wood2.y = 450 ;
    }
    
    if(wood2copy1.y> 450){
       wood2copy1.y = 450 ;
    }
    
    if(wood2copy2.y > 450){
       wood2copy2.y = 450 ;
    }
    
    if(wood2copy3.y > 450){
       wood2copy3.y = 450 ;
    }
    
    if(wood2copy4.y > 450){
       wood2copy4.y = 450 ;
    }
    
    if(wood2copy5.y > 450){
       wood2copy5.y = 450 ;
    }
    
    if(wood2copy6.y > 450){
       wood2copy6.y = 450 ;
    }
    
    if(wood3.y > 450){
       wood3.y = 450 ;
    }
    
    if(wood3copy1.y > 450){
       wood3copy1.y = 450 ;
    }
    
    if(wood3copy2.y > 450){
       wood3copy2.y = 450 ;
    }
    
    if(wood3copy3.y > 450){
       wood3copy3.y = 450 ;
    }
    
    if(bricksgray.y > 450){
       bricksgray.y = 450 ;
    }
    
    if(bricksgray1.y .y > 450){
       bricksgray1.y = 450 ;
    }
    
    if(bricksgray2.y .y > 450){
       bricksgray2.y = 450 ;
    }
    
    if(bricksgray3.y .y > 450){
       bricksgray3.y = 450 ;
    }
    
    if(brick1.y .y > 450){
       brick1.y = 450 ;
    }
    
    if(brick2.y .y > 450){
       brick2.y = 450 ;
    }
    
    if(blackbrick.y > 450){
       blackbrick.y = 450 ;
    }
    
    if(blackbrick1.y > 450){
       blackbrick1.y = 450 ;
    }
    
    if(monstor1.y > 490){
       monstor1.y = 490 ;
    }
    
    if(monstor2.y > 450){
       monstor2.y = 450 ;
    }
    
    if(monstor3.y > 450){
       monstor3.y = 450 ;
    }
    
    if(monstor3copy1.y > 450){
       monstor3copy1.y = 450 ;
    }
    
    if(monstor4.y > 450){
       monstor4.y = 450 ;
    }
    
    if(monstor4copy1.y > 450){
       monstor4copy1.y = 450 ;
    }
    
    if(monstor4copy2.y > 575){
       monstor4copy2.y = 575 ;
    }
    
    if(monstor4copy3.y > 575){
       monstor4copy3.y = 575 ;
    }

    if(keyDown("space")){ 
      red_angrybird.velocityY = -13;
      red_angrybird.velocityX = 13;
    }
    red_angrybird.velocityY = red_angrybird.velocityY + 0.8 ;
    if(red_angrybird3.x > 180){
    if(keyDown("space")){ 
      red_angrybird3.velocityY = -13;
      red_angrybird3.velocityX = 13;
     }
     red_angrybird3.velocityY = red_angrybird3.velocityY + 0.8 ;
  }
    if(red_angrybird2.x > 180){
    if(keyDown("space")){ 
      red_angrybird2.velocityY = -13;
      red_angrybird2.velocityX = 13;
     }
     red_angrybird2.velocityY = red_angrybird2.velocityY + 0.8 ;
  }
    if(red_angrybird1.x > 180){
    if(keyDown("space")){ 
      red_angrybird1.velocityY = -13;
      red_angrybird1.velocityX = 13;
     }
     red_angrybird1.velocityY = red_angrybird1.velocityY + 0.8 ;
    }
  
    if(red_angrybird.isTouching(monstor1)){
   monstor1.x = 5000 ;
   monstor1.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird.isTouching(monstor2)){
   monstor2.x = 5000 ;
   monstor2.y = 5000 ;
   score = score+5 ;
 }
    if(red_angrybird.isTouching(monstor3)){
   monstor3.x = 5000 ;
   monstor3.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird.isTouching(monstor3copy1)){
   monstor3copy1.x = 5000 ;
   monstor3copy1.y = 5000 ;
   score = score+10 ;
 } 
    if(red_angrybird.isTouching(monstor4)){
   monstor4.x = 5000 ;
   monstor4.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird.isTouching(monstor4copy1)){
   monstor4copy1.x = 5000 ;
   monstor4copy1.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird.isTouching(monstor4copy2)){
   monstor4copy2.x = 5000 ;
   monstor4copy2.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird.isTouching(monstor4copy3)){
   monstor4copy3.x = 5000 ;
   monstor4copy3.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird.isTouching(ground)){
    red_angrybird.y = -500000000000000;
    red_angrybird3.x = 200 ;
    red_angrybird3.y = 420 ;
    chancesleft = 3 ;
  }
  
    if(red_angrybird3.isTouching(monstor1)){
   monstor1.x = 5000 ;
   monstor1.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird3.isTouching(monstor2)){
   monstor2.x = 5000 ;
   monstor2.y = 5000 ;
   score = score+5 ;
 }
    if(red_angrybird3.isTouching(monstor3)){
   monstor3.x = 5000 ;
   monstor3.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird3.isTouching(monstor3copy1)){
   monstor3copy1.x = 5000 ;
   monstor3copy1.y = 5000 ;
   score = score+10 ;
 } 
    if(red_angrybird3.isTouching(monstor4)){
   monstor4.x = 5000 ;
   monstor4.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird3.isTouching(monstor4copy1)){
   monstor4copy1.x = 5000 ;
   monstor4copy1.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird3.isTouching(monstor4copy2)){
   monstor4copy2.x = 5000 ;
   monstor4copy2.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird3.isTouching(monstor4copy3)){
   monstor4copy3.x = 5000 ;
   monstor4copy3.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird3.isTouching(ground)){
    red_angrybird3.y = -5000000000000000 ;
    red_angrybird2.x = 200 ;
    red_angrybird2.y = 420 ;
    chancesleft = 2 ;
  }
  
    if(red_angrybird2.isTouching(monstor1)){
   monstor1.x = 5000 ;
   monstor1.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird2.isTouching(monstor2)){
   monstor2.x = 5000 ;
   monstor2.y = 5000 ;
   score = score+5 ;
 }
    if(red_angrybird2.isTouching(monstor3)){
   monstor3.x = 5000 ;
   monstor3.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird2.isTouching(monstor3copy1)){
   monstor3copy1.x = 5000 ;
   monstor3copy1.y = 5000 ;
   score = score+10 ;
 } 
    if(red_angrybird2.isTouching(monstor4)){
   monstor4.x = 5000 ;
   monstor4.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird2.isTouching(monstor4copy1)){
   monstor4copy1.x = 5000 ;
   monstor4copy1.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird2.isTouching(monstor4copy2)){
   monstor4copy2.x = 5000 ;
   monstor4copy2.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird2.isTouching(monstor4copy3)){
   monstor4copy3.x = 5000 ;
   monstor4copy3.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird2.isTouching(ground)){
    red_angrybird2.y = -500000000000000 ;
    red_angrybird1.x = 200 ;
    red_angrybird1.y = 420 ;
    chancesleft = 1 ;
  } 
  
    if(red_angrybird1.isTouching(monstor1)){
   monstor1.x = 5000 ;
   monstor1.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird1.isTouching(monstor2)){
   monstor2.x = 5000 ;
   monstor2.y = 5000 ;
   score = score+5 ;
 }
    if(red_angrybird1.isTouching(monstor3)){
   monstor3.x = 5000 ;
   monstor3.y = 5000 ;
   score = score+10 ;
 }
    if(red_angrybird1.isTouching(monstor3copy1)){
   monstor3copy1.x = 5000 ;
   monstor3copy1.y = 5000 ;
   score = score+10 ;
 } 
    if(red_angrybird1.isTouching(monstor4)){
   monstor4.x = 5000 ;
   monstor4.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird1.isTouching(monstor4copy1)){
   monstor4copy1.x = 5000 ;
   monstor4copy1.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird1.isTouching(monstor4copy2)){
   monstor4copy2.x = 5000 ;
   monstor4copy2.y = 5000 ;
   score = score+15 ;
 }
    if(red_angrybird1.isTouching(monstor4copy3)){
   monstor4copy3.x = 5000 ;
   monstor4copy3.y = 5000 ;
   score = score+15 ;
 }
  }
  
  if(red_angrybird1.y > 600){
    red_angrybird1.visible = false ;
    chancesleft = 0 ;
    gameover.visible = true ;
    song();
  }  

  red_angrybird.collide(invisiblelayer);
  red_angrybird1.collide(invisiblelayer);
  red_angrybird2.collide(invisiblelayer);
  red_angrybird3.collide(invisiblelayer);
  
  // wood1.collide(wood1);
  // wood1.collide(wood1copy1);
  // wood1.collide(wood1copy2);
  // wood1.collide(wood2);
  // wood1.collide(wood2copy1);
  // wood1.collide(wood2copy2);
  // wood1.collide(wood2copy3);
  // wood1.collide(wood2copy4);
  // wood1.collide(wood2copy5);
  // wood1.collide(wood2copy6);
  // wood1.collide(wood3);
  // wood1.collide(wood3copy1);
  // wood1.collide(wood3copy2);
  // wood1.collide(bricksgray);
  // wood1.collide(bricksgray1);
  // wood1.collide(bricksgray2);
  // wood1.collide(bricksgray3);
  // wood1.collide(brick1);
  // wood1.collide(brick2);
  // wood1.collide(blackbrick);
  // wood1.collide(blackbrick1);
  
  // wood1copy1.collide(wood1);
  // wood1copy1.collide(wood1copy1);
  // wood1copy1.collide(wood1copy2);
  // wood1copy1.collide(wood2);
  // wood1copy1.collide(wood2copy1);
  // wood1copy1.collide(wood2copy2);
  // wood1copy1.collide(wood2copy3);
  // wood1copy1.collide(wood2copy4);
  // wood1copy1.collide(wood2copy5);
  // wood1copy1.collide(wood2copy6);
  // wood1copy1.collide(wood3);
  // wood1copy1.collide(wood3copy1);
  // wood1copy1.collide(wood3copy2);
  // wood1copy1.collide(bricksgray);
  // wood1copy1.collide(bricksgray1);
  // wood1copy1.collide(bricksgray2);
  // wood1copy1.collide(bricksgray3);
  // wood1copy1.collide(brick1);
  // wood1copy1.collide(brick2);
  // wood1copy1.collide(blackbrick);
  // wood1copy1.collide(blackbrick1)
  
  // wood1copy2.collide(wood1);
  // wood1copy2.collide(wood1copy1);
  // wood1copy2.collide(wood1copy2);
  // wood1copy2.collide(wood2);
  // wood1copy2.collide(wood2copy1);
  // wood1copy2.collide(wood2copy2);
  // wood1copy2.collide(wood2copy3);
  // wood1copy2.collide(wood2copy4);
  // wood1copy2.collide(wood2copy5);
  // wood1copy2.collide(wood2copy6);
  // wood1copy2.collide(wood3);
  // wood1copy2.collide(wood3copy1);
  // wood1copy2.collide(wood3copy2);
  // wood1copy2.collide(bricksgray);
  // wood1copy2.collide(bricksgray1);
  // wood1copy2.collide(bricksgray2);
  // wood1copy2.collide(bricksgray3);
  // wood1copy2.collide(brick1);
  // wood1copy2.collide(brick2);
  // wood1copy2.collide(blackbrick);
  // wood1copy2.collide(blackbrick1);
  
  // wood2.collide(wood1);
  // wood2.collide(wood1copy1);
  // wood2.collide(wood1copy2);
  // wood2.collide(wood2);
  // wood2.collide(wood2copy1);
  // wood2.collide(wood2copy2);
  // wood2.collide(wood2copy3);
  // wood2.collide(wood2copy4);
  // wood2.collide(wood2copy5);
  // wood2.collide(wood2copy6);
  // wood2.collide(wood3);
  // wood2.collide(wood3copy1);
  // wood2.collide(wood3copy2);
  // wood2.collide(bricksgray);
  // wood2.collide(bricksgray1);
  // wood2.collide(bricksgray2);
  // wood2.collide(bricksgray3);
  // wood2.collide(brick1);
  // wood2.collide(brick2);
  // wood2.collide(blackbrick);
  // wood2.collide(blackbrick1);
  
  // wood2copy1.collide(wood1);
  // wood2copy1.collide(wood1copy1);
  // wood2copy1.collide(wood1copy2);
  // wood2copy1.collide(wood2);
  // wood2copy1.collide(wood2copy1);
  // wood2copy1.collide(wood2copy2);
  // wood2copy1.collide(wood2copy3);
  // wood2copy1.collide(wood2copy4);
  // wood2copy1.collide(wood2copy5);
  // wood2copy1.collide(wood2copy6);
  // wood2copy1.collide(wood3);
  // wood2copy1.collide(wood3copy1);
  // wood2copy1.collide(wood3copy2);
  // wood2copy1.collide(bricksgray);
  // wood2copy1.collide(bricksgray1);
  // wood2copy1.collide(bricksgray2);
  // wood2copy1.collide(bricksgray3);
  // wood2copy1.collide(brick1);
  // wood2copy1.collide(brick2);
  // wood2copy1.collide(blackbrick);
  // wood2copy1.collide(blackbrick1);
  
  // wood2copy2.collide(wood1);
  // wood2copy2.collide(wood1copy1);
  // wood2copy2.collide(wood1copy2);
  // wood2copy2.collide(wood2);
  // wood2copy2.collide(wood2copy1);
  // wood2copy2.collide(wood2copy2);
  // wood2copy2.collide(wood2copy3);
  // wood2copy2.collide(wood2copy4);
  // wood2copy2.collide(wood2copy5);
  // wood2copy2.collide(wood2copy6);
  // wood2copy2.collide(wood3);
  // wood2copy2.collide(wood3copy1);
  // wood2copy2.collide(wood3copy2);
  // wood2copy2.collide(bricksgray);
  // wood2copy2.collide(bricksgray1);
  // wood2copy2.collide(bricksgray2);
  // wood2copy2.collide(bricksgray3);
  // wood2copy2.collide(brick1);
  // wood2copy2.collide(brick2);
  // wood2copy2.collide(blackbrick);
  // wood2copy2.collide(blackbrick1);
    
  // wood2copy2.collide(wood1);
  // wood2copy2.collide(wood1copy1);
  // wood2copy2.collide(wood1copy2);
  // wood2copy2.collide(wood2);
  // wood2copy2.collide(wood2copy1);
  // wood2copy2.collide(wood2copy2);
  // wood2copy2.collide(wood2copy3);
  // wood2copy2.collide(wood2copy4);
  // wood2copy2.collide(wood2copy5);
  // wood2copy2.collide(wood2copy6);
  // wood2copy2.collide(wood3);
  // wood2copy2.collide(wood3copy1);
  // wood2copy2.collide(wood3copy2);
  // wood2copy2.collide(bricksgray);
  // wood2copy2.collide(bricksgray1);
  // wood2copy2.collide(bricksgray2);
  // wood2copy2.collide(bricksgray3);
  // wood2copy2.collide(brick1);
  // wood2copy2.collide(brick2);
  // wood2copy2.collide(blackbrick);
  // wood2copy2.collide(blackbrick1);
  
  // monstor1.collide(wood1);
  // monstor1.collide(wood1copy1);
  // monstor1.collide(wood1copy2);
  // monstor1.collide(wood2);
  // monstor1.collide(wood2copy1);
  // monstor1.collide(wood2copy2);
  // monstor1.collide(wood2copy3);
  // monstor1.collide(wood2copy4);
  // monstor1.collide(wood2copy5);
  // monstor1.collide(wood2copy6);
  // monstor1.collide(wood3);
  // monstor1.collide(wood3copy1);
  // monstor1.collide(wood3copy2);
  // monstor1.collide(wood3copy3);
  // monstor1.collide(blackbrick);
  // monstor1.collide(wood3copy2);
  // monstor1.collide(wood3copy3);
  
  // monstor2.collide(wood1);
  // monstor2.collide(wood1copy1);
  // monstor2.collide(wood1copy2);
  // monstor2.collide(wood2);
  // monstor2.collide(wood2copy1);
  // monstor2.collide(wood2copy2);
  // monstor2.collide(wood2copy3);
  // monstor2.collide(wood2copy4);
  // monstor2.collide(wood2copy5);
  // monstor2.collide(wood2copy6);
  // monstor2.collide(wood3);
  // monstor2.collide(wood3copy1);
  // monstor2.collide(wood3copy2);
  // monstor2.collide(wood3copy3);
  // monstor2.collide(blackbrick);
  // monstor2.collide(wood3copy2);
  // monstor2.collide(wood3copy3);
  
  // monstor3.collide(wood1);
  // monstor3.collide(wood1copy1);
  // monstor3.collide(wood1copy2);
  // monstor3.collide(wood2);
  // monstor3.collide(wood2copy1);
  // monstor3.collide(wood2copy2);
  // monstor3.collide(wood2copy3);
  // monstor3.collide(wood2copy4);
  // monstor3.collide(wood2copy5);
  // monstor3.collide(wood2copy6);
  // monstor3.collide(wood3);
  // monstor3.collide(wood3copy1);
  // monstor3.collide(wood3copy2);
  // monstor3.collide(wood3copy3);
  // monstor3.collide(blackbrick);
  // monstor3.collide(wood3copy2);
  // monstor3.collide(wood3copy3);
  
  // monstor3copy1.collide(wood1);
  // monstor3copy1.collide(wood1copy1);
  // monstor3copy1.collide(wood1copy2);
  // monstor3copy1.collide(wood2);
  // monstor3copy1.collide(wood2copy1);
  // monstor3copy1.collide(wood2copy2);
  // monstor3copy1.collide(wood2copy3);
  // monstor3copy1.collide(wood2copy4);
  // monstor3copy1.collide(wood2copy5);
  // monstor3copy1.collide(wood2copy6);
  // monstor3copy1.collide(wood3);
  // monstor3copy1.collide(wood3copy1);
  // monstor3copy1.collide(wood3copy2);
  // monstor3copy1.collide(wood3copy3);
  // monstor3copy1.collide(blackbrick);
  // monstor3copy1.collide(wood3copy2);
  // monstor3copy1.collide(wood3copy3);
  
  // monstor4.collide(wood1);
  // monstor4.collide(wood1copy1);
  // monstor4.collide(wood1copy2);
  // monstor4.collide(wood2);
  // monstor4.collide(wood2copy1);
  // monstor4.collide(wood2copy2);
  // monstor4.collide(wood2copy3);
  // monstor4.collide(wood2copy4);
  // monstor4.collide(wood2copy5);
  // monstor4.collide(wood2copy6);
  // monstor4.collide(wood3);
  // monstor4.collide(wood3copy1);
  // monstor4.collide(wood3copy2);
  // monstor4.collide(wood3copy3);
  // monstor4.collide(blackbrick);
  // monstor4.collide(wood3copy2);
  // monstor4.collide(wood3copy3);
  
  // monstor4copy1.collide(wood1);
  // monstor4copy1.collide(wood1copy1);
  // monstor4copy1.collide(wood1copy2);
  // monstor4copy1.collide(wood2);
  // monstor4copy1.collide(wood2copy1);
  // monstor4copy1.collide(wood2copy2);
  // monstor4copy1.collide(wood2copy3);
  // monstor4copy1.collide(wood2copy4);
  // monstor4copy1.collide(wood2copy5);
  // monstor4copy1.collide(wood2copy6);
  // monstor4copy1.collide(wood3);
  // monstor4copy1.collide(wood3copy1);
  // monstor4copy1.collide(wood3copy2);
  // monstor4copy1.collide(wood3copy3);
  // monstor4copy1.collide(blackbrick);
  // monstor4copy1.collide(wood3copy2);
  // monstor4copy1.collide(wood3copy3);
  
  // monstor4copy2.collide(wood1);
  // monstor4copy2.collide(wood1copy1);
  // monstor4copy2.collide(wood1copy2);
  // monstor4copy2.collide(wood2);
  // monstor4copy2.collide(wood2copy1);
  // monstor4copy2.collide(wood2copy2);
  // monstor4copy2.collide(wood2copy3);
  // monstor4copy2.collide(wood2copy4);
  // monstor4copy2.collide(wood2copy5);
  // monstor4copy2.collide(wood2copy6);
  // monstor4copy2.collide(wood3);
  // monstor4copy2.collide(wood3copy1);
  // monstor4copy2.collide(wood3copy2);
  // monstor4copy2.collide(wood3copy3);
  // monstor4copy2.collide(blackbrick);
  // monstor4copy2.collide(wood3copy2);
  // monstor4copy2.collide(wood3copy3);
   
  // monstor4copy3.collide(wood1);
  // monstor4copy3.collide(wood1copy1);
  // monstor4copy3.collide(wood1copy2);
  // monstor4copy3.collide(wood2);
  // monstor4copy3.collide(wood2copy1);
  // monstor4copy3.collide(wood2copy2);
  // monstor4copy3.collide(wood2copy3);
  // monstor4copy3.collide(wood2copy4);
  // monstor4copy3.collide(wood2copy5);
  // monstor4copy3.collide(wood2copy6);
  // monstor4copy3.collide(wood3);
  // monstor4copy3.collide(wood3copy1);
  // monstor4copy3.collide(wood3copy2);
  // monstor4copy3.collide(wood3copy3);
  // monstor4copy3.collide(blackbrick);
  // monstor4copy3.collide(wood3copy2);
  // monstor4copy3.collide(wood3copy3);
  
  red_angrybird.setCollider("circle",0,0,120);
  red_angrybird1.setCollider("circle",0,0,120);
  red_angrybird2.setCollider("circle",0,0,120);
  red_angrybird3.setCollider("circle",0,0,120);
  wood1.setCollider("rectangle",18,-24,10,60);
  wood1copy1.setCollider("rectangle",18,-24,10,60);
  wood1copy2.setCollider("rectangle",47,96,122,12);
  wood2.setCollider("rectangle",97,-45,12,122);
  wood2copy1.setCollider("rectangle",96,-45,12,122);
  wood2copy2.setCollider("rectangle",96,-45,12,122);
  wood2copy3.setCollider("rectangle",96,-45,12,122);
  wood2copy4.setCollider("rectangle",45,95,122,12);
  wood2copy5.setCollider("rectangle",45,95,122,12);
  wood2copy6.setCollider("rectangle",45,95,122,12);
  wood3.setCollider("rectangle",0,-40,100,8);
  wood3copy1.setCollider("rectangle",0,-40,100,8);
  wood3copy2.setCollider("rectangle",0,-40,100,8);
  wood3copy3.setCollider("rectangle",0,-40,100,8);
  bricksgray.setCollider("rectangle",-163,75,55,80);
  bricksgray1.setCollider("rectangle",-163,75,55,80);
  bricksgray2.setCollider("rectangle",-163,75,55,80);
  bricksgray3.setCollider("rectangle",-163,75,55,80);
  brick1.setCollider("rectangle",-55,-85,28,25);
  brick2.setCollider("rectangle",-55,-85,28,25);
  blackbrick.setCollider("rectangle",45,95,120,10);
  blackbrick1.setCollider("rectangle",45,95,120,10);
  monstor1.setCollider("circle",120,30,100);
  monstor2.setCollider("circle",0,0,170);
  monstor3.setCollider("circle",-5,-60,100);
  monstor3copy1.setCollider("circle",-5,-60,100);
  monstor4.setCollider("circle",-3,-60,10);
  monstor4copy1.setCollider("circle",-3,-60,10);
  monstor4copy2.setCollider("circle",-3,-60,10);
  monstor4copy3.setCollider("circle",-3,-60,10);
  
  drawSprites();
  
  // wood1.debug = true ;
  // wood1copy1.debug = true ;
  // wood1copy2.debug = true ;
  // wood2.debug = true ;
  // wood2copy1.debug = true ;
  // wood2copy2.debug = true ;
  // wood2copy3.debug = true ;
  // wood2copy4.debug = true ;
  // wood2copy5.debug = true ;
  // wood2copy6.debug = true ;
  // wood3.debug = true ;
  // wood3copy1.debug = true ;
  // wood3copy2.debug = true ;
  // wood3copy3.debug = true ;
  // bricksgray.debug = true ;
  // bricksgray1.debug = true ;
  // bricksgray2.debug = true ;
  // bricksgray3.debug = true ;
  // brick1.debug = true ;
  // brick2.debug = true ;
  // blackbrick.debug = true ;
  // blackbrick1.debug = true ;
  // tnt1.debug = true ;
  // tnt2.debug = true ;
  
  textSize(40);
  stroke("red");
  text("SCORE : "+score,50,50);
  text("CHANCES LEFT : "+chancesleft,50,100);
  }

// function reset(){
  // first.x = 50000 ;
  // first.y = 50000 ;
// }

function song(){
    red_angrybird1.visible = false ;
    chancesleft = 0 ;
    gameover.visible = true ; 
    backsong.stop();
    gameoversound.play();
    red_angrybird1.y = -500000000900 ;
}