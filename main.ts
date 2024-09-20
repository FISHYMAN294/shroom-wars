namespace SpriteKind {
    export const Gem = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(projectile, effects.halo, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile, effects.halo, 200)
    sprites.destroy(mySprite3, effects.ashes, 200)
})
let mySprite3: Sprite = null
let projectile: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let statusbar = statusbars.create(40, 4, StatusBarKind.Health)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Gem)
statusbar.attachToSprite(mySprite6)
let mySprite = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 2 2 2 2 b b b b . . . . 
    . . b b 2 2 2 2 2 1 1 b b c c . 
    . . b 1 1 2 2 2 2 2 1 1 2 2 c c 
    . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
    . . c 2 2 2 2 2 2 2 c c c b b f 
    . c 2 2 2 2 2 b b b b c c c b f 
    c 2 2 2 2 b b d d d d d c c b f 
    c 2 2 c b d d d d d d c d c c . 
    f 2 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 8 8 8 8 b b b b . . . . 
    . . b b 8 8 8 8 8 1 1 b b c c . 
    . . b 1 1 8 8 8 8 8 1 1 8 8 c c 
    . . b 1 1 8 8 8 8 8 8 8 8 8 b c 
    . . c 8 8 8 8 8 8 8 c c c b b f 
    . c 8 8 8 8 8 b b b b c c c b f 
    c 8 8 8 8 b b d d d d d c c b f 
    c 8 8 c b d d d d d d c d c c . 
    f 8 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 1 1 b b c c . 
    . . b 1 1 5 5 5 5 5 1 1 5 5 c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 5 5 5 5 5 5 5 c c c b b f 
    . c 5 5 5 5 5 b b b b c c c b f 
    c 5 5 5 5 b b d d d d d c c b f 
    c 5 5 c b d d d d d d c d c c . 
    f 5 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
let mySprite5 = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 7 7 7 7 b b b b . . . . 
    . . b b 7 7 7 7 7 1 1 b b c c . 
    . . b 1 1 7 7 7 7 7 1 1 7 7 c c 
    . . b 1 1 7 7 7 7 7 7 7 7 7 b c 
    . . c 7 7 7 7 7 7 7 c c c b b f 
    . c 7 7 7 7 7 b b b b c c c b f 
    c 7 7 7 7 b b d d d d d c c b f 
    c 7 7 c b d d d d d d c d c c . 
    f 7 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorDarkDiamond)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), mySprite)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), mySprite2)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), mySprite4)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), mySprite5)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
animation.runImageAnimation(
mySprite,
[img`
    . . . . b b b b . . . . . . . . 
    . . . b 2 2 2 2 b b b b . . . . 
    . . b b 2 2 2 2 2 1 1 b b c c . 
    . . b 1 1 2 2 2 2 2 1 1 2 b c c 
    . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
    . . c 2 2 2 2 2 b c c c c b b f 
    . c 2 2 2 2 b b d d d c c c b f 
    c b 2 2 b b d d d d d d b c b f 
    c 2 2 c b d d d d d d c d b c . 
    f 2 c c c d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c f f b d d b b b d f . 
    f f b b f b d d b d d d d c . . 
    . f f f f d d b b d d d c . . . 
    . . . . b b b b f b b f f . . . 
    . . . . . . . f f b b b f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 2 2 2 2 b b b b . . . . 
    . . b b 2 2 2 2 2 1 1 b b c c . 
    . . b 1 1 2 2 2 2 1 1 1 2 c c c 
    . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
    . . c 1 1 2 2 b b c c c c b b f 
    . c c 2 2 b b d d d d b c c b f 
    c b 2 2 b b d d d d d d d c b f 
    c 2 2 b b d d d d d d c d d c . 
    f 2 2 c b d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d f f b b b b d f . 
    f f b b c c f b d d b d d c . . 
    . f f f c c f d d b b d c . . . 
    . . . . . . b b b b f c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 2 2 2 2 b b b b . . . . 
    . . b b 2 2 2 2 2 2 1 1 b c c . 
    . . b 2 2 2 2 2 2 1 1 1 2 c c c 
    . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
    . . c 1 1 2 2 2 b c c c c b b f 
    . c c 2 2 2 b b d d d c c c b f 
    c b 2 2 b b d d d d d d b c b f 
    c 2 2 c b d d d d d d d d b c . 
    f 2 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `,img`
    . . . . b b b b . . . . . . . . 
    . . . b 2 2 2 2 b b b b . . . . 
    . . b b 2 2 2 2 2 1 1 b b c c . 
    . . b 1 1 2 2 2 2 2 1 1 2 2 c c 
    . . b 1 1 2 2 2 2 2 2 2 2 2 b c 
    . . c 2 2 2 2 2 2 2 c c c b b f 
    . c 2 2 2 2 2 b b b b c c c b f 
    c 2 2 2 2 b b d d d d d c c b f 
    c 2 2 c b d d d d d d c d c c . 
    f 2 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . b b b b . . . . . . . . 
    . . . b 8 8 8 8 b b b b . . . . 
    . . b b 8 8 8 8 8 1 1 b b c c . 
    . . b 1 1 8 8 8 8 8 1 1 8 b c c 
    . . b 1 1 8 8 8 8 8 8 8 8 8 b c 
    . . c 8 8 8 8 8 b c c c c b b f 
    . c 8 8 8 8 b b d d d c c c b f 
    c b 8 8 b b d d d d d d b c b f 
    c 8 8 c b d d d d d d c d b c . 
    f 8 c c c d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c f f b d d b b b d f . 
    f f b b f b d d b d d d d c . . 
    . f f f f d d b b d d d c . . . 
    . . . . b b b b f b b f f . . . 
    . . . . . . . f f b b b f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 8 8 8 8 b b b b . . . . 
    . . b b 8 8 8 8 8 1 1 b b c c . 
    . . b 1 1 8 8 8 8 1 1 1 8 c c c 
    . . b 1 1 8 8 8 8 8 8 8 8 8 b c 
    . . c 1 1 8 8 b b c c c c b b f 
    . c c 8 8 b b d d d d b c c b f 
    c b 8 8 b b d d d d d d d c b f 
    c 8 8 b b d d d d d d c d d c . 
    f 8 8 c b d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d f f b b b b d f . 
    f f b b c c f b d d b d d c . . 
    . f f f c c f d d b b d c . . . 
    . . . . . . b b b b f c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 8 8 8 8 b b b b . . . . 
    . . b b 8 8 8 8 8 8 1 1 b c c . 
    . . b 8 8 8 8 8 8 1 1 1 8 c c c 
    . . b 1 1 8 8 8 8 8 8 8 8 8 b c 
    . . c 1 1 8 8 8 b c c c c b b f 
    . c c 8 8 8 b b d d d c c c b f 
    c b 8 8 b b d d d d d d b c b f 
    c 8 8 c b d d d d d d d d b c . 
    f 8 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `,img`
    . . . . b b b b . . . . . . . . 
    . . . b 8 8 8 8 b b b b . . . . 
    . . b b 8 8 8 8 8 1 1 b b c c . 
    . . b 1 1 8 8 8 8 8 1 1 8 8 c c 
    . . b 1 1 8 8 8 8 8 8 8 8 8 b c 
    . . c 8 8 8 8 8 8 8 c c c b b f 
    . c 8 8 8 8 8 b b b b c c c b f 
    c 8 8 8 8 b b d d d d d c c b f 
    c 8 8 c b d d d d d d c d c c . 
    f 8 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite4,
[img`
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 1 1 b b c c . 
    . . b 1 1 5 5 5 5 5 1 1 5 b c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 5 5 5 5 5 b c c c c b b f 
    . c 5 5 5 5 b b d d d c c c b f 
    c b 5 5 b b d d d d d d b c b f 
    c 5 5 c b d d d d d d c d b c . 
    f 5 c c c d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c f f b d d b b b d f . 
    f f b b f b d d b d d d d c . . 
    . f f f f d d b b d d d c . . . 
    . . . . b b b b f b b f f . . . 
    . . . . . . . f f b b b f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 1 1 b b c c . 
    . . b 1 1 5 5 5 5 1 1 1 5 c c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 1 1 5 5 b b c c c c b b f 
    . c c 5 5 b b d d d d b c c b f 
    c b 5 5 b b d d d d d d d c b f 
    c 5 5 b b d d d d d d c d d c . 
    f 5 5 c b d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d f f b b b b d f . 
    f f b b c c f b d d b d d c . . 
    . f f f c c f d d b b d c . . . 
    . . . . . . b b b b f c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 5 1 1 b c c . 
    . . b 5 5 5 5 5 5 1 1 1 5 c c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 1 1 5 5 5 b c c c c b b f 
    . c c 5 5 5 b b d d d c c c b f 
    c b 5 5 b b d d d d d d b c b f 
    c 5 5 c b d d d d d d d d b c . 
    f 5 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `,img`
    . . . . b b b b . . . . . . . . 
    . . . b 5 5 5 5 b b b b . . . . 
    . . b b 5 5 5 5 5 1 1 b b c c . 
    . . b 1 1 5 5 5 5 5 1 1 5 5 c c 
    . . b 1 1 5 5 5 5 5 5 5 5 5 b c 
    . . c 5 5 5 5 5 5 5 c c c b b f 
    . c 5 5 5 5 5 b b b b c c c b f 
    c 5 5 5 5 b b d d d d d c c b f 
    c 5 5 c b d d d d d d c d c c . 
    f 5 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `],
500,
true
)
game.onUpdateInterval(2000, function () {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite3,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    mySprite3.follow(mySprite6, 25)
})
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 50)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 50, 50)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite4, 50, 50)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 50)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
})
