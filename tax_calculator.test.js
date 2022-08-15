const  amount= require("./tax_calculator");

describe("calculating the tax",()=>{
    test("covert the amount according to tax",()=>{
        expect(amount(1200000)).toBe(29.997500208315973)
    })

    test("covert the amount according to tax of ",()=>{
        expect(amount(250000)).toBe(250000)
    })

    test("covert the amount according to tax of ",()=>{
        expect(amount(600000)).toBe(19.996667222129645)
    })

    test("covert the amount according to tax of ",()=>{
        expect(amount(400000)).toBe(9.99750062484379)
    })

    test("covert the amount according to tax of ",()=>{
        expect(amount( 500001)).toBe(19.99600080783682)
    })
})