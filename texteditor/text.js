var code    = document.getElementById("code").value;
var result   = document.getElementById("result");
// buttons
var run     = document.getElementById("run");
var del     = document.getElementById("del");

run.addEventListener("click",function(){
    result.innerHTML = document.getElementById("code").value;
})
del.addEventListener("click",function(){
    result.innerHTML = " " ;
})