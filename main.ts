input.onButtonPressed(Button.A, function () {
    ParkingDistance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    while (ParkingDistance == 0) {
        ParkingDistance = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    basic.showNumber(ParkingDistance)
})
let ParkingDistance = 0
basic.showIcon(IconNames.Yes)
