//% color=190 weight=100 icon="\uf1b9" block="Maqueen→L298N"
if (m == Motors.M2 || m == Motors.All) { pins.digitalWritePin(IN3, 1); pins.digitalWritePin(IN4, 1); pins.analogWritePin(ENB, 0) }
}


/** Set pins once according to your wiring */
//% block="setup L298N ENA %ena IN1 %in1 IN2 %in2 ENB %enb IN3 %in3 IN4 %in4"
//% ena.shadow="analogPin" enb.shadow="analogPin"
//% in1.shadow="digitalPin" in2.shadow="digitalPin" in3.shadow="digitalPin" in4.shadow="digitalPin"
//% group="Setup" weight=100
export function setup(ena: AnalogPin, in1: DigitalPin, in2: DigitalPin, enb: AnalogPin, in3: DigitalPin, in4: DigitalPin) {
ENA = ena; IN1 = in1; IN2 = in2; ENB = enb; IN3 = in3; IN4 = in4
motorStop(Motors.All)
}


/** If one side is wired reversed */
//% block="invert left %on"
//% group="Setup" weight=80
export function invertLeft(on: boolean) { invertL = on }
//% block="invert right %on"
//% group="Setup" weight=79
export function invertRight(on: boolean) { invertR = on }


// Convenience car moves
//% block="forward speed %s \%"
//% s.min=0 s.max=100 s.defl=70
//% group="Motion" weight=70
export function forward(s: number) { setLR(true, true, s, s) }


//% block="backward speed %s \%"
//% s.min=0 s.max=100 s.defl=70
//% group="Motion" weight=69
export function backward(s: number) { setLR(false, false, s, s) }


//% block="turn left speed %s \%"
//% s.min=0 s.max=100 s.defl=70
//% group="Motion" weight=68
export function turnLeft(s: number) { setLR(true, true, 0, s) }


//% block="turn right speed %s \%"
//% s.min=0 s.max=100 s.defl=70
//% group="Motion" weight=67
export function turnRight(s: number) { setLR(true, true, s, 0) }


//% block="stop"
//% group="Motion" weight=66
export function stop() { motorStop(Motors.All) }
}
