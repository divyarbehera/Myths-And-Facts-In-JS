1 #this

var logA = window.console.log;
var logB = () => {console.log(this);}
var logC = function() {console.log(this);}

console.log(logA())
console.log(logB())
console.log(logC())

2 #BubbleVsCapture
<!doctype html>
<body>
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
</body>

3 #Scope - Lexical Blocked
