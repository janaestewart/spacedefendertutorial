 let spaceShip: Sprite = null
 let enemyShip: Sprite = null
 let projectile: Sprite = null
 
 spaceShip = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . 2 2 2 . . . . . . . . . . .
     . . 2 8 2 2 2 . . . . . . . . .
     . . 2 8 8 8 2 2 2 2 . . . . . .
     . . 2 8 8 8 8 8 8 2 2 2 . . . .
     . . 2 2 8 8 8 8 8 8 8 2 2 2 . .
     . . . 2 2 8 8 8 8 8 8 8 8 2 2 .
     . . . . 2 8 8 8 8 8 8 8 8 8 2 .
     . . . . 2 8 8 8 8 8 8 8 8 2 2 .
     . . . 2 2 8 8 8 8 8 8 2 2 2 . .
     . . 2 2 8 8 8 8 8 2 2 2 . . . .
     . . 2 8 8 8 2 2 2 2 . . . . . .
     . . 2 8 2 2 2 . . . . . . . . .
     . . 2 2 2 . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
 `,SpriteKind.Player)

//  enemyShip = sprites.create(img`
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . a a a . .
//      . . . . . . . . . . . a a a . .
//      . . . . . . . . . . a a a a . .
//      . . . . . . . . a a a a a a . .
//      . . . . . . a a a a a a a a a .
//      . . . . a a a a a a a a a a a .
//      . . a a a a a a a a a a a a a .
//      . . a a a a a a a a a a a a a .
//      . . . a a a a a a a a a a a a .
//      . . . . . a a a a a a a a a a .
//      . . . . . . . a a a a a a a a .
//      . . . . . . . . a a a a a a a .
//      . . . . . . . . . . a a a a . .
//      . . . . . . . . . . . a a a . .
//  `, SpriteKind.Enemy)
 
controller.moveSprite(spaceShip)
spaceShip.setFlag(SpriteFlag.StayInScreen, true) //so the spaceShip wont fly off screen

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
     projectile = sprites.createProjectileFromSprite(img`
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . 1 . . . . 1 . . . . . .
         . . 9 9 9 9 9 9 9 9 9 9 9 9 . .
         . . 1 . . . 1 . . . . . 1 . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
         . . . . . . . . . . . . . . . .
     `,spaceShip,200,0)
}) //this is so the projectile will spawn on our spaceship sprite when we hit the A button 

//continously spawn enemies every half second
game.onUpdateInterval(500, function() {
     enemyShip = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . a a a . .
     . . . . . . . . . . . a a a . .
     . . . . . . . . . . a a a a . .
     . . . . . . . . a a a a a a . .
     . . . . . . a a a a a a a a a .
     . . . . a a a a a a a a a a a .
     . . a a a a a a a a a a a a a .
     . . a a a a a a a a a a a a a .
     . . . a a a a a a a a a a a a .
     . . . . . a a a a a a a a a a .
     . . . . . . . a a a a a a a a .
     . . . . . . . . a a a a a a a .
     . . . . . . . . . . a a a a . .
     . . . . . . . . . . . a a a . .
 `, SpriteKind.Enemy)
    enemyShip.setVelocity(-100, 0)
})