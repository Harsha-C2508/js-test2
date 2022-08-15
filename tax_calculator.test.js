const  amount= require("./tax_calculator");

describe("calculating the tax",()=>{
    test("covert the amount according to tax",()=>{
        expect(amount(1200000)).toBe(29.997500208315973)
    })
    test("covert the amount according to tax of ",()=>{
        expect(amount(250000)).toBe(250000)
    })
})