var Calculator = require("../Calculator.js");
var calc;

describe("Calculator", function() {

    beforeEach( () => {
        calc = new Calculator();
    })

    describe("basic calculator operations", () => {
        it("should output the result of add operation", () => {
            expect(calc.processInput("3")).toEqual("3");
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("+")).toEqual(5);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("+")).toEqual(7);
        });
        it("should output the result of subtract operation", () => {
            expect(calc.processInput("3")).toEqual("3");
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("-")).toEqual(1);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("-")).toEqual(-1);
            expect(calc.processInput("-2")).toEqual("-2");
            expect(calc.processInput("-")).toEqual(1);
        });

        it("should output the result of multiply operation", () => {
            expect(calc.processInput("3")).toEqual("3");
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("*")).toEqual(6);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("*")).toEqual(12);
            expect(calc.processInput("-2")).toEqual("-2");
            expect(calc.processInput("*")).toEqual(-24);
        });
        it("should output the result of divide operation", () => {
            expect(calc.processInput("10")).toEqual("10");
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("/")).toEqual(5);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("/")).toEqual(2.5);
            expect(calc.processInput("2.5")).toEqual("2.5");
            expect(calc.processInput("/")).toEqual(1);
        });

        it("test inline expressions", () => {
            expect(calc.processInput("3 4 +")).toEqual(7);
            expect(calc.processInput("3 4 -")).toEqual(-1);
            expect(calc.processInput("4 4 *")).toEqual(16);
            expect(calc.processInput("5 5 5 8 + + -")).toEqual(-13);
            expect(calc.processInput("4 4 * 2 + 5 - 2 2 + -")).toEqual(9);
            expect(calc.processInput("4 4 * +")).toEqual("Invalid expression!");
            expect(calc.processInput("asdlfj 4 4 * +")).toEqual("Invalid expression!");
            expect(calc.processInput("4asd")).toEqual("Invalid expression!");
            expect(calc.processInput("4 4")).toEqual("Invalid expression!");
            expect(calc.processInput("4 ab 4 2 -")).toEqual("Invalid expression!");
        });

        it("misc operations", () => {
            expect(calc.processInput("4 10 *")).toEqual(40);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("/")).toEqual(20);
            expect(calc.processInput("5 5 5 8 + + -")).toEqual(-13);
            expect(calc.processInput("+")).toEqual(7);
            expect(calc.processInput("7")).toEqual("7");
            expect(calc.processInput("-")).toEqual(0);
            expect(calc.processInput("0")).toEqual("0");
            expect(calc.processInput("/")).toEqual(NaN);
            expect(calc.processInput("2")).toEqual("2");
            expect(calc.processInput("+")).toEqual(2);
        });

        it("type q to quit", () => {
            expect(calc.processInput('q')).toEqual('q');
        })
    })
});