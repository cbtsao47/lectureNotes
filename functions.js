// functions

//function declaration
function greet() {
  // greet is the name of the function
  console.log("yo wassup!"); //everything in between the {} block is the body of the function, stuff you want it to do
}

yo(); //function call/run/invoke

function greet(name) {
  // the greet function can take inputs. the inputs are refered as parameters
  console.log("yo wassup!" + name);
}

greet("Ben"); //ben is the argument here, parameter/argument is like borrow/loan, people say either, but they mean different things

function greet(name, myName) {
  console.log("yo wassup!" + name + "my name is" + myName);
}
greet("Ben");

//calculation
function timesTwo(number) {
  return number * 2;
}
