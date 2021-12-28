function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var Constructor = new ExampleConstructor();
console.log(Constructor);
var test = Constructor instanceof ExampleConstructor;
console.log(test);
