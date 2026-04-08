radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != ultimoValor) {
        ultimoValor = receivedNumber
        if (ultimoValor == 3) {
            servos.P0.setAngle(90)
        }
        if (ultimoValor == 0) {
            servos.P0.setAngle(0)
        }
    }
})
let ultimoValor = 0
ultimoValor = -1
radio.setGroup(13)
