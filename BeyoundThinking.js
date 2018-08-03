

//###setTimeout
//So the delay parameter in setTimeout(function, delayTime) 
//does not stand for the precise time delay after which 
// the function is executed. It stands for the minimum wait 
// time after which at some point in time the function will be executed.
(function(){
    function runWhileLoopForNSeconds(sec){
      let start = Date.now(), now = start;
      while (now - start < (sec*1000)) {
        now = Date.now();
      }
    }

	var start = Date.now();
	console.log("Welcome");
	setTimeout(() => {console.log(`We need coffee immediately. Delivered in  ${(Date.now()  - start)/1000}sec`);},0);
	setTimeout(() => {console.log(`But we need lunch after 5sec. Delivered in ${(Date.now()  - start)/1000}sec`);},2000);
	console.log("We are talking for 10sec.")
	runWhileLoopForNSeconds(10);
	console.log("Talk finished");
	setTimeout(() => {console.log(`We need tea immediately after talk. Delivered in  ${(Date.now()  - start)/1000}sec`);}, 0);
	setTimeout(() => {console.log(`We need biscuit after 5sec of talk. Delivered in  ${(Date.now()  - start)/1000}sec`);}, 5000);
	console.log("Bye!");
	return `Talk completes in ${(Date.now()  - start)/1000}sec`
})();


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
