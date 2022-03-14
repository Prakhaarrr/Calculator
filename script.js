
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

   // This function display values
function display(value) {
    document.getElementById("result").value += value;
}
   // This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    if(document.getElementById("result").value="infinity")
    {
        alert("cannot divide by zero ");
        document.getElementById("result").value = " syntax error";
    }
    else
    {
        document.getElementById("result").value = q ;
    }
        
       
        
    document.getElementById("result").value = q;
}
