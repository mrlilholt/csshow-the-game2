// i figured this out from a youtube tutorial... NOT YOU MR. LILHOLT!!!!
// 
function statusSetup () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setColor(1, 2)
    statusbar.attachToSprite(mySprite)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .....bbbbbbb........
        ....b1ddd1bd........
        ...b1111111b........
        ...bdbcccbdb........
        ...bdc666cdb........
        ...bdc6d6cdb........
        ...bdc666cdb........
        ...bdc666cdb........
        ...bdc666cdb........
        ...bdcccccdb........
        ...cbbbbbbbc........
        ..cbccccccccbc......
        ..c1dddddddd1c......
        ..cc111d11d11c......
        ..cbbbbbbbbbbc......
        ..cccccccccccc......
        .....cc...cc........
        .....cc...cc........
        ..........cc........
        ..........cc........
        `,img`
        .....bbbbbbb........
        ....b1ddd1bd........
        ...b1111111b........
        ...bdbcccbdb........
        ...bdc666cdb........
        ...bdc6d6cdb........
        ...bdc666cdb........
        ...bdc666cdb........
        ...bdc666cdb........
        ...bdcccccdb........
        ...cbbbbbbbc........
        ..cbccccccccbc......
        ..c1dddddddd1c......
        ..cc111d11d11c......
        ..cbbbbbbbbbbc......
        ..cccccccccccc......
        .....cc...cc........
        .....cc...cc........
        .....cc.............
        .....cc.............
        `],
    100,
    true
    )
})
function startScreen () {
    CS_Show_logo = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111999111111111111111111111111111111111111111111111111
        1111111111199999111111111111111111111111111111111111111111111111
        1111111199999999111111199911111111111111111111111111111111111111
        1111119999999999111991199911111111111111111111111111111111111111
        1119999999999991119991199911111111111111111111111111111111111111
        1119999999999911199999199999911199999111111111111111111111111111
        1119999999911111199999999999991999999111111111111111111111111111
        1119999911111111199911999199999999999111111111111111111111111111
        1119999999111111199911999199919999999111111111111111111111111111
        1119999999999111999991999199919999999111111111111111111111111111
        1119999999999991999999999999919999999111111111111111111111111111
        1111199999999999199999999999911999991111111111111111111111111111
        1111111999999999111111111111111111111111111111111111111111111111
        1111111111999999111999999119999991111111111111111111111111111111
        1111111111119999119999999999999999111111111111111111111111111111
        1111111111111111199991999999999991111111111111111111111111111111
        1111111111111111199991999999999111111111111111111111111111111111
        1111111111111111999991111999999911111111111111111111111111111111
        1111111111111111999911991199999991111111111111111111111111111111
        1111111111111111999919999991999991111111111111111111111111111111
        1111111111111111999999999999999911111111111111111111111111111111
        1111111111111111199999999999999911111111111111111111111111111111
        1111111111111111119999111999991111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111119991111111111111111111111111911111111111
        1111111111111111111111199991111111111111111111111119999911111111
        1111111111111111111999119999991111999119999199199919999999111111
        1111111111111111199999999999991199999919999999999919999999999111
        1111111111111111199999199999991999999999999999999911999999999991
        1111111111111111199999199919991999199999999999999111119999999991
        1111111111111111199999199919991999199919999999999111111119999991
        1111111111111111999999999999991999999911999999991111111119999991
        1111111111111111999999999999991999999111999199991111119999999991
        1111111111111111119111111111111119111111111111111111999999999991
        1111111111111111111111111111111111111111111111111119999999999111
        1111111111111111111111111111111111111111111111111119999999111111
        1111111111111111111111111111111111111111111111111119999911111111
        1111111111111111111111111111111111111111111111111111911111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Player)
    scene.setBackgroundColor(1)
    CS_Show_logo.setPosition(0, 60)
    CS_Show_logo.setVelocity(50, 0)
    effects.confetti.startScreenEffect()
    pause(1700)
    CS_Show_logo.setVelocity(0, 0)
    pause(1000)
    CS_Show_logo.destroy(effects.fountain, 1000)
    pause(1000)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........bbbbbbb.....
        ........db1ddd1b....
        ........b1111111b...
        ........bdbcccbdb...
        ........bdc666cdb...
        ........bdc6d6cdb...
        ........bdc666cdb...
        ........bdc666cdb...
        ........bdc666cdb...
        ........bdcccccdb...
        ........cbbbbbbbc...
        ......cbccccccccbc..
        ......c1dddddddd1c..
        ......c11d11d111cc..
        ......cbbbbbbbbbbc..
        ......cccccccccccc..
        ........cc...cc.....
        ........cc...cc.....
        ........cc..........
        ........cc..........
        `,img`
        ........bbbbbbb.....
        ........db1ddd1b....
        ........b1111111b...
        ........bdbcccbdb...
        ........bdc666cdb...
        ........bdc6d6cdb...
        ........bdc666cdb...
        ........bdc666cdb...
        ........bdc666cdb...
        ........bdcccccdb...
        ........cbbbbbbbc...
        ......cbccccccccbc..
        ......c1dddddddd1c..
        ......c11d11d111cc..
        ......cbbbbbbbbbbc..
        ......cccccccccccc..
        ........cc...cc.....
        ........cc...cc.....
        .............cc.....
        .............cc.....
        `],
    100,
    true
    )
})
function blastOff () {
    scene.cameraFollowSprite(mySprite)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    // this is not just any tile map... this is from the color code tilemap extension
    // 
    scene.setTileMap(img`
        3333355553
        3333355533
        3333355333
        3333333353
        5223333553
        5223335533
        5553355333
        5553333355
        7773355555
        7773355555
        7733355555
        7333335555
        3337335555
        3377333355
        3377733355
        3377777355
        7773333355
        7723333355
        7777773355
        7777773355
        7733333255
        7733333355
        7733553355
        7733553355
        7733553335
        7733553335
        7733355525
        7773335555
        7777333355
        7777733355
        7773333355
        7733333355
        7723377355
        7777777355
        7723777355
        7733777355
        7733777355
        3333733355
        3337333355
        3373339355
        3373399355
        3373399355
        3333399355
        7333399355
        7773399355
        7773399355
        7773339333
        7777333333
        7777773333
        7777777736
        `, TileScale.Sixteen)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f e e 7 7 7 7 7 7 7 7 7 7 7 e f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 d d d d d 7 7 7 f . 
        f e 7 7 7 5 5 d d f d 7 7 e e f 
        . f 7 7 7 7 d d d d d 7 7 7 f . 
        . f 7 7 7 7 d f d d d 7 7 7 f . 
        f e e 7 7 7 d d d d d 7 7 7 e f 
        . f 7 7 7 7 7 7 7 5 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f e 7 7 7 7 7 7 7 7 7 7 7 e e f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(3, img`
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 3 3 4 4 5 5 6 6 7 7 8 9 9 a a 
        2 3 3 4 4 5 5 6 6 7 7 8 9 9 a a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        3 3 4 4 5 5 6 6 7 7 8 9 9 a a 2 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        2 2 3 3 4 4 5 5 6 6 7 7 8 9 9 a 
        `, false)
    scene.setTile(5, img`
        a a a a a a a a a a a a 2 a a a 
        9 9 9 9 9 9 9 9 9 a a 9 a 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 
        8 8 8 8 8 8 8 8 8 9 9 8 9 8 8 8 
        7 7 7 7 7 7 7 7 7 8 8 7 9 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 8 7 7 7 
        6 6 6 6 6 6 6 6 6 7 7 6 7 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
        5 5 5 5 5 5 5 5 5 6 6 5 6 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
        4 4 4 4 4 4 4 4 4 5 5 4 5 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 
        3 3 3 3 3 3 3 3 3 4 4 3 4 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 4 3 3 3 
        2 2 2 2 2 2 2 2 2 3 3 2 3 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 
        `, true)
    scene.setTile(7, img`
        a a a a a a a a a a a a 2 a a a 
        9 9 9 9 9 9 9 9 9 a a 9 a 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 
        8 8 8 8 8 8 8 8 8 9 9 8 9 8 8 8 
        7 7 7 7 7 7 7 7 7 8 8 7 9 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 8 7 7 7 
        6 6 6 6 6 6 6 6 6 7 7 6 7 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
        5 5 5 5 5 5 5 5 5 6 6 5 6 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
        4 4 4 4 4 4 4 4 4 5 5 4 5 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 
        3 3 3 3 3 3 3 3 3 4 4 3 4 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 4 3 3 3 
        2 2 2 2 2 2 2 2 2 3 3 2 3 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 
        `, true)
    scene.setTile(9, img`
        6 6 9 9 8 9 9 9 9 9 9 9 9 1 9 9 
        6 8 9 6 8 9 9 9 9 9 9 9 6 9 9 9 
        6 8 9 6 8 9 9 9 9 9 1 6 8 9 9 9 
        8 9 9 6 8 9 9 9 9 9 6 6 8 9 9 9 
        9 9 9 6 6 8 9 9 9 9 6 8 8 9 9 9 
        9 9 9 9 6 8 9 9 9 9 6 9 9 9 9 9 
        9 9 9 9 6 8 9 9 9 9 6 9 9 9 9 9 
        9 1 9 9 6 9 1 9 9 9 6 9 9 9 8 9 
        9 8 1 9 9 9 9 9 9 1 6 9 9 6 9 9 
        9 8 8 9 9 9 9 9 9 6 8 9 9 6 9 9 
        9 8 8 9 9 9 9 9 6 8 9 9 9 6 9 9 
        9 9 8 9 9 9 9 6 6 9 9 9 9 6 9 9 
        9 9 9 9 9 9 9 1 9 9 9 9 8 6 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 8 6 6 9 
        9 9 9 9 8 9 9 9 9 9 9 9 9 8 6 8 
        9 9 9 9 8 9 9 9 9 9 9 9 9 8 6 6 
        `, true)
    enemeanie = sprites.create(assets.image`glassOfH2O`, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemeanie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 9 9 . . . . 1 . . . . 
        . . . . 1 9 9 9 9 9 . 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 9 9 . . . . 1 . . . . 
        . . . . 1 1 9 9 . . . 1 . . . . 
        . . . . 1 9 9 9 9 . . 1 . . . . 
        . . . . 1 9 9 9 9 9 . 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 9 9 . . . . 1 . . . . 
        . . . . 1 9 9 9 9 9 . 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . 9 . 1 . . . . 
        . . . . 1 . . . . . 9 1 . . . . 
        . . . . 1 . . . . . 9 1 . . . . 
        . . . . 1 . 9 9 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 . . . . . . . . . 
        . . . . . . . . 9 . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . 9 . 1 . . . . 
        . . . . 1 . . . . . 9 1 . . . . 
        . . . . 1 . . . . 9 9 1 . . . . 
        . . . . 1 . . 9 9 9 1 1 . . . . 
        . . . . 1 . 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . 9 . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . 9 9 1 . . . . 
        . . . . 1 . . 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 9 . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . 9 9 9 1 . . . . 
        . . . . 1 . 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 1 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . 9 . . . 9 1 . . . . 
        . . . . 1 9 . . 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 9 9 9 1 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 1 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 9 9 1 9 9 9 1 . . . . 
        . . . . 1 9 9 9 9 9 9 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `],
    100,
    true
    )
    mySprite.setPosition(11, 15)
    enemeanie.follow(mySprite, 50)
    controller.player1.moveSprite(mySprite)
    statusSetup()
}
function GameBegin () {
    effects.confetti.endScreenEffect()
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    mySprite = sprites.create(img`
        ...bbbbbbbbb.....
        ..b1ddddddd1b....
        .b11111111111b...
        .bdbcccccccbdb...
        .bdc6666666cdb...
        .bdc6d66666cdb...
        .bdc6666666cdb...
        .bdc6666666cdb...
        .bdc6666666cdb...
        .bdcccccccccdb...
        .cbbbbbbbbbbbc...
        cbcccccccccccbc..
        c1ddddddddddd1c..
        cccc1d11d11d11ccc
        cbbbbbbbbbbbbbc..
        ccccccccccccccc..
        ...cc......cc....
        ...cc......cc....
        ...cc......cc....
        ...cc......cc....
        `, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`compy`,
    500,
    true
    )
    game.showLongText("I'm a dancing computer", DialogLayout.Bottom)
    blastOff()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
    if (statusbar.value == 0) {
        mySprite.destroy(effects.fountain, 1000)
        game.over(false)
    }
})
let enemeanie: Sprite = null
let CS_Show_logo: Sprite = null
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
startScreen()
GameBegin()
