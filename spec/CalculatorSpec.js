var Calculator = require("../Calculator.js");
var calc = new Calculator();

describe("Calculator", function() {

    describe("basic calculator operations", () => {
        it("should output the first number", () => {
            expect(calc.processInput("3")).toEqual("3");
        });
        it("should output the second number", () => {
            expect(calc.processInput("2")).toEqual("2");
        });
        it("should show the result of the add operation", () => {
            expect(calc.processInput('+')).toEqual('5');
        })
    })
});