radio.onReceivedString(function (receivedString) {
    if (receivedString == "stars") {
        Total += 1
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    group += 1
    basic.showNumber(group % 10)
    basic.clearScreen()
})
let group = 0
let Total = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 500, NeoPixelMode.RGB)
let My_stars = 0
music.setTempo(145)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
proportionalFont.showString("Count stars!     ", 75)
basic.forever(function () {
    radio.setGroup(group % 10)
})
loops.everyInterval(100, function () {
    if (randint(0, 10) == 0) {
        radio.sendString("stars")
        My_stars += 1
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    }
    strip.shift(1)
    strip.show()
})
