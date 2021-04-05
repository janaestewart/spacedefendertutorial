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
 
controller.moveSprite(spaceShip)
spaceShip.setFlag(SpriteFlag.StayInScreen, true)

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
})