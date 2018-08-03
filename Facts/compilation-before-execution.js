//###CompilationVsExecution
(function(){
	var a = 10;
	console.log("Variable declared(with var key) before : "+ a); 
	console.log("Variable declared(with var key) after : "+ b);
	var b = 10;
	c = 10;
	console.log("Variable declared(without var key) before : "+ c);
	console.log("Variable declared(without var key) after : "+ d);
	d = 10;
})();
// O/P:
// Variable declared(with var key) before : 10
// Variable declared(with var key) after : undefined
// Variable declared(without var key) before : 10
// VM121:8 Uncaught ReferenceError: d is not defined
