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

info.setLife(3)

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
    enemyShip.setPosition(180, Math.randomRange(0,120))
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire,100)
    info.changeScoreBy(1)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})