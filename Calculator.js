function Calculator() {
    var Stack = require('stack-lifo');
    var stack = new Stack();
    var inlineStack = new Stack();

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
    Calculator.prototype.evaluate = function(expr){
        return Function('"use strict";return (' + expr + ')')();
    }

    Calculator.prototype.processInput = function(line){
        switch (line){
            case 'c': stack.clear();break;

            case 'q': stack.clear(); return 'q';

            case 's': return ("stack size: " + stack.size());

            case '+':
            case '-':
            case '*':
            case '/':if (stack.size() > 1) {
                        let op2 = stack.pop();
                        let op1 = stack.pop();
                        let val = this.evaluate(op1 + ' ' + line + ' ' + op2);
                        stack.push(val);
                        return val;
                     }
                     return '';
            default:   inlineStack.clear();
                        let isValidExpression = true;
                        if (!isNaN(line)) {
                            stack.push(line);
                            return line;
                        }

                        let inlString = line.split(' ');
                        inlString.filter(v => v !== '').forEach(s => { //filter out the white/empty spaces
                            if (!isNaN(s)) inlineStack.push(s);
                            else {
                                if (s === '+' || s === '-' || s === '*' || s === '/'){
                                    if (inlineStack.size() > 1 && isValidExpression){
                                        let op2 = inlineStack.pop();
                                        let op1 = inlineStack.pop();
                                        let val = this.evaluate(op1 + ' ' + s + ' ' + op2);
                                        inlineStack.push(val);
                                    } else {
                                        isValidExpression = false;
                                        inlineStack.clear();
                                    }
                                }else {
                                    inlineStack.clear();
                                    isValidExpression = false;
                                }
                            }
                        })

                        if (inlineStack.size() === 1 && isValidExpression) {
                            stack.push(inlineStack.pop());
                            return (stack.peek() === null ? 0 : stack.peek());
                        } else {
                            return "Invalid expression!";
                        }

        }
    }

}
module.exports = Calculator;