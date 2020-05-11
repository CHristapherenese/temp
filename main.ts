let Temp = 0
let Temp3 = 0
pins.LED.digitalWrite(false)
pins.D8.digitalWrite(false)
forever(function () {
    if (pins.D7.digitalRead()) {
        for (let index = 0; index < 3; index++) {
            Temp3 = 1
            pause(1000)
            console.logValue("TEMP3", Temp3)
            Temp3 = 0
            pause(1000)
            console.logValue("TEMP3", Temp3)
        }
        pause(5000)
    }
})
forever(function () {
    if (Temp3) {
        pins.LED.digitalWrite(true)
        pins.D8.digitalWrite(true)
        pixel.setColor(0xff0000)
    } else {
        pins.LED.digitalWrite(false)
        pins.D8.digitalWrite(false)
        pixel.setColor(0x000000)
    }
})
