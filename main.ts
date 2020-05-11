let Temp3 = 0
let Temp = 0
let degrees = 0
pins.LED.digitalWrite(false)
ht16k33.setAddress(HT16K33_I2C_ADDRESSES.ADD_0x70)
ht16k33.setBlinkRate(5)
ht16k33.setBrightness(100)
let _7seg = 0
forever(function () {
    degrees = pins.i2cReadNumber(
    24,
    NumberFormat.Int8LE,
    true
    )
    console.logValue("deg", degrees)
    datalogger.addRow()
    datalogger.addValue("Deg", degrees)
    pause(1000)
    if (degrees < 1) {
        Temp = 0
        console.logValue("Temp", Temp)
        pause(1000)
        Temp = 1
        console.logValue("Temp", Temp)
        pause(1000)
        Temp = 2
        console.logValue("Temp", Temp)
        pause(1000)
        Temp = 3
        console.logValue("Temp", Temp)
        _7seg = Temp
        pins.i2cWriteNumber(
        113,
        _7seg,
        NumberFormat.UInt32LE,
        true
        )
        console.logValue("7Seg", _7seg)
        pause(1000)
    }
})
forever(function () {
    if (degrees == 0) {
        for (let index = 0; index < 3; index++) {
            Temp3 = 1
            pause(1000)
            Temp3 = 0
            pause(1000)
        }
    }
    pause(5000)
})
forever(function () {
    if (Temp3) {
        pins.LED.digitalWrite(true)
        pixel.setColor(0xff0000)
    } else {
        pins.LED.digitalWrite(false)
        pixel.setColor(0x000000)
    }
})
