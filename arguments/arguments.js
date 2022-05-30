//You can use the "arguments object" to see what arguments the function actually takes.

const string = '1Patrick00'

const result = string.replace(/(\d+)([^\d]+)(\d+ )/g, function() {
    console.log(arguments)
    return 'Brian'
});

console.log(result)