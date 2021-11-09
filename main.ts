basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("ZAP")
    } else {
        images.createBigImage(`
            . . . . . . . . . .
            . # . # . # . # . #
            # . # . # . # . # .
            . # . # . # . # . #
            . . . . . . . . . .
            `).scrollImage(1, 200)
    }
})
