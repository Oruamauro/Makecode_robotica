def on_received_number(receivedNumber):
    global ultimoValor
    if receivedNumber != ultimoValor:
        ultimoValor = receivedNumber
        if ultimoValor == 1:
            servos.P0.set_angle(90)
        if ultimoValor == 0:
            servos.P0.set_angle(0)
radio.on_received_number(on_received_number)

ultimoValor = 0
ultimoValor = -1
radio.set_group(13)