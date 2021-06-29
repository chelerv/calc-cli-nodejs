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

#### Run
To run (execute) this docker image:

docker run -ti calculatorcli:1.0.0

The prompt used is "calc>".

Typing q will quit the program.

