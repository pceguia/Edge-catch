input.onButtonPressed(Button.A, function () {
    if (just_scored == _false) {
        just_scored = _true
        game.pause()
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        if (sprite.get(LedSpriteProperty.X) == 0) {
            game.addScore(1)
            basic.showIcon(IconNames.Yes)
            playScoreSong()
        } else {
            playMissSong()
        }
        game.resume()
    }
})
function playMissSong () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 300), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.B, function () {
    if (just_scored == _false) {
        just_scored = _true
        game.pause()
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        if (sprite.get(LedSpriteProperty.X) == 4) {
            game.addScore(1)
            basic.showIcon(IconNames.Skull)
            playScoreSong()
        } else {
            playMissSong()
        }
        game.resume()
    }
})
function playScoreSong () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 300), music.PlaybackMode.UntilDone)
}
let just_scored = 0
let sprite: game.LedSprite = null
let _true = 0
let _false = 0
_false = 0
_true = 1
basic.showIcon(IconNames.Happy)
sprite = game.createSprite(2, 2)
sprite.turn(Direction.Right, 0)
just_scored = _false
let list = [0, 2]
game.setScore(0)
basic.forever(function () {
    if (!(game.isPaused())) {
        sprite.move(1)
        just_scored = _false
        basic.pause(200)
        if (sprite.isTouchingEdge()) {
            sprite.turn(Direction.Right, 180)
        }
    }
})
