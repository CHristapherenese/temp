Temp = 0
degrees = 0
Temp3 = 0
pins.LED.digital_write(False)
ht16k33.set_address(HT16K33_I2C_ADDRESSES.ADD_0X70)
ht16k33.set_blink_rate(5)
ht16k33.set_brightness(100)
_7seg = 0
def on_forever():
    global Temp3
    if True:
        for index in range(3):
            Temp3 = 1
            pause(1000)
            Temp3 = 0
            pause(1000)
    pause(5000)
forever(on_forever)
def on_forever2():
    global degrees, Temp, _7seg
    degrees = pins.i2c_read_number(24, NumberFormat.INT8_LE, True)
    console.log_value("deg", degrees)
    pause(1000)
    if degrees < -50:
        Temp = 0
        console.log_value("Temp", Temp)
        pause(1000)
        Temp = 1
        console.log_value("Temp", Temp)
        pause(1000)
        Temp = 2
        console.log_value("Temp", Temp)
        pause(1000)
        Temp = 3
        console.log_value("Temp", Temp)
        _7seg = Temp
        pins.i2c_write_number(113, _7seg, NumberFormat.UINT32_LE, True)
        console.log_value("7Seg", _7seg)
        pause(1000)
forever(on_forever2)
def on_forever3():
    if Temp3:
        pins.LED.digital_write(True)
        pixel.set_color(0xff0000)
    else:
        pins.LED.digital_write(False)
        pixel.set_color(0x000000)
forever(on_forever3)