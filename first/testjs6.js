/**
 * Created by lenovo on 2015/7/28.
 */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){ return scope;}
    return f;
}
var test = checkscope()()
console.log(test);
document.write(test.toString());
