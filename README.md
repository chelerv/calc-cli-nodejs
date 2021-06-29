This is a sample calculator with command line interface (CLI).
It supports the 4 basic operations of + - * and / (add, subtract, multiply and divide respectively).

index.js is the main file - it makes use of the 'readline' module
to read from the standard input. For each line read from the input,it invokes 
the processInput() function from the Calculator. The input can be read
from either the standard input or, in future, from a file, or any other
medium.

Calculator.js is where the actual calculator operations are implemented.
It makes use of the 'stack-lifo' module to leverage the stack functionality.
There are two 'stacks' used here: one for the line wise operations,
and the other for the inline operations (expressions that are input 
on the same line). 

For the inline expressions, if any one term (operator/operand) is invalid,
the whole line is discarded as invalid. For example,

calc>3 4 - aslkdfj

is invalid.

#### Build
To build the docker image, run this cmd, from the root folder:

docker build -t calculatorcli:1.0.0 -f docker/Dockerfile .

Alternately, you can fetch the image from the docker hub. The url is https://hub.docker.com/repository/docker/chelerv/calculatorcli.

#### Run
To run (execute) this docker image:

docker run -ti calculatorcli:1.0.0

If you are running the image fetched from the docker hub, use "latest" in place of "1.0.0 in the above command."

The prompt used is "calc>".

Typing 'c' will clear the main (line) stack.

's' will print the size of the stack to the console.

'q' will quit the program.

#### Notes
- Currently, there's no limit on the size of the stacks, but this can easily be enforced
by putting an upper limit on the number of operands that they can hold by disallowing pushing new 
  operands.
- Assumption - each line is validated for correctness of the operands and operators. If any one of the items is missing or is incorrect, the 
whole line is discarded.
