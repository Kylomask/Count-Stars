strip = neopixel.create(DigitalPin.P0, 200, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.BLUE))

def on_forever():
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    for index in range(10):
        strip.set_pixel_color(randint(0, 199), neopixel.colors(NeoPixelColors.WHITE))
    strip.show()
    basic.pause(2000)
basic.forever(on_forever)

def on_forever2():
    strip.rotate(1)
    strip.show()
    basic.pause(100)
basic.forever(on_forever2)
