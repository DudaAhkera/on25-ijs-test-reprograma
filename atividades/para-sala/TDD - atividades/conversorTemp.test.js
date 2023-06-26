const convertCelsiusToFahrenheit = require('./conversorTemp')

describe(" Verify convert function", () => {
    it("should check convertion to fahrenheit", () => {
        // expectativa o que espero que aconteca
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);//o que eu espero no parâmetro da funcão
    })
})